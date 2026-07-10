/**
 * Simple in-process rate limiter.
 *
 * Allows up to MAX_REQUESTS per WINDOW_MS per IP.
 * This works fine on a single Vercel serverless function instance.
 * For a production site that may spin up many instances simultaneously,
 * back this with Redis / Upstash — but for a personal portfolio the
 * in-memory approach is perfectly adequate.
 */

const MAX_REQUESTS = 5;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

// Module-level map — lives as long as the serverless function is warm.
const store = new Map<string, RateLimitEntry>();

/**
 * Returns `true` if the request should be allowed, `false` if it
 * has exceeded the rate limit.
 */
export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = store.get(ip);

  if (!entry || now > entry.resetAt) {
    // First request in this window (or window has expired)
    store.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX_REQUESTS) {
    return false;
  }

  entry.count += 1;
  return true;
}

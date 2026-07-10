/**
 * Verifies a Cloudflare Turnstile token server-side.
 *
 * Docs: https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
 */

const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

interface TurnstileVerifyResponse {
  success: boolean;
  "error-codes"?: string[];
}

/**
 * Returns `true` when the token is valid, `false` otherwise.
 * Throws if the environment variable is missing (configuration error).
 */
export async function verifyTurnstileToken(
  token: string,
  ip?: string
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    throw new Error(
      "TURNSTILE_SECRET_KEY environment variable is not set."
    );
  }

  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.append("remoteip", ip);

  const res = await fetch(TURNSTILE_VERIFY_URL, {
    method: "POST",
    body,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });

  if (!res.ok) {
    // Cloudflare's endpoint returned an unexpected HTTP error
    return false;
  }

  const data: TurnstileVerifyResponse = await res.json();
  return data.success === true;
}

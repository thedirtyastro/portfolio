import { z } from "zod";

/**
 * Zod schema for the contact form payload.
 * This is the single source of truth for both
 * frontend display rules and backend enforcement.
 */
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(60, "Name must be at most 60 characters."),

  email: z.string().email("Please enter a valid email address."),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(1000, "Message must be at most 1000 characters."),

  /** Cloudflare Turnstile one-time verification token */
  turnstileToken: z.string().min(1, "Spam-protection token is missing."),
});

export type ContactFormData = z.infer<typeof contactSchema>;

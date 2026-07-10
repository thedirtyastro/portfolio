import { Resend } from "resend";

/**
 * Singleton Resend client.
 * The key is read lazily at call time so the module can be imported
 * during build without throwing.
 */
let _resend: Resend | null = null;

export function getResendClient(): Resend {
  if (!_resend) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY environment variable is not set.");
    }
    _resend = new Resend(apiKey);
  }
  return _resend;
}

/**
 * Escapes characters that have special meaning in HTML.
 * Used to prevent HTML injection in the email body.
 */
export function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/** Options for building the contact notification email. */
export interface ContactEmailOptions {
  name: string;
  email: string;
  message: string;
  ip?: string;
  userAgent?: string;
}

/** Builds a clean HTML email body for the contact notification. */
export function buildEmailHtml(opts: ContactEmailOptions): string {
  const { name, email, message, ip, userAgent } = opts;

  const safeName    = escapeHtml(name);
  const safeEmail   = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
  const safeIp      = ip        ? escapeHtml(ip)        : "unavailable";
  const safeUa      = userAgent ? escapeHtml(userAgent) : "unavailable";

  const submittedAt = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "medium",
    timeZone: "UTC",
  }).format(new Date());

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Portfolio Contact</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0"
               style="background:#ffffff;border-radius:4px;overflow:hidden;max-width:600px;">

          <!-- Header -->
          <tr>
            <td style="background:#0a0a09;padding:32px 40px;">
              <p style="margin:0;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#8a8880;">
                Portfolio Contact
              </p>
              <h1 style="margin:8px 0 0;font-size:22px;color:#f0eeea;font-weight:700;letter-spacing:-0.01em;">
                New message from ${safeName}
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">

              <!-- Sender details -->
              <table width="100%" cellpadding="0" cellspacing="0"
                     style="margin-bottom:32px;border-bottom:1px solid #e8e6e0;">
                <tr>
                  <td style="padding:0 0 16px;">
                    <p style="margin:0 0 4px;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#68675f;">Name</p>
                    <p style="margin:0;font-size:16px;color:#0a0a09;font-weight:500;">${safeName}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 24px;">
                    <p style="margin:0 0 4px;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#68675f;">Email</p>
                    <a href="mailto:${safeEmail}"
                       style="margin:0;font-size:16px;color:#0a0a09;font-weight:500;text-decoration:none;">
                      ${safeEmail}
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <p style="margin:0 0 8px;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#68675f;">Message</p>
              <div style="background:#f9f8f5;border-left:3px solid #0a0a09;padding:20px 24px;margin-bottom:40px;">
                <p style="margin:0;font-size:16px;line-height:1.75;color:#0a0a09;">${safeMessage}</p>
              </div>

              <!-- Metadata -->
              <table width="100%" cellpadding="0" cellspacing="0"
                     style="border-top:1px solid #e8e6e0;padding-top:24px;">
                <tr>
                  <td style="padding:0 0 8px;">
                    <p style="margin:0;font-size:12px;color:#68675f;">
                      <strong>Submitted:</strong> ${submittedAt} UTC
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 8px;">
                    <p style="margin:0;font-size:12px;color:#68675f;">
                      <strong>IP Address:</strong> ${safeIp}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style="margin:0;font-size:12px;color:#68675f;word-break:break-all;">
                      <strong>User Agent:</strong> ${safeUa}
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9f8f5;padding:20px 40px;border-top:1px solid #e8e6e0;">
              <p style="margin:0;font-size:11px;color:#68675f;text-align:center;">
                Sent via Sarukhan.dev portfolio contact form
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
}

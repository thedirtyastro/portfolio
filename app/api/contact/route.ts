import type { NextRequest } from "next/server";
import { contactSchema } from "@/lib/validation";
import { checkRateLimit } from "@/lib/rateLimit";
import { getResendClient, buildEmailHtml } from "@/lib/resend";

export async function POST(request: NextRequest): Promise<Response> {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  const userAgent = request.headers.get("user-agent") ?? undefined;

  if (!checkRateLimit(ip)) {
    return Response.json(
      { success: false, message: "Too many requests. Please wait a while before trying again." },
      { status: 429 }
    );
  }

  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return Response.json({ success: false, message: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(rawBody);
  if (!parsed.success) {
    return Response.json(
      { success: false, message: "Validation failed.", errors: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const { name, email, message } = parsed.data;

  const toEmail = process.env.CONTACT_EMAIL;
  if (!toEmail) {
    console.error("[contact] CONTACT_EMAIL environment variable is not set.");
    return Response.json({ success: false, message: "Server configuration error." }, { status: 500 });
  }

  try {
    const resend = getResendClient();
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to:   [toEmail],
      replyTo: email,
      subject: `New Portfolio Contact from ${name}`,
      html: buildEmailHtml({ name, email, message, ip, userAgent }),
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return Response.json({ success: false, message: "Failed to send email. Please try again." }, { status: 502 });
    }
  } catch (err) {
    console.error("[contact] Unexpected email error:", err);
    return Response.json({ success: false, message: "An unexpected error occurred." }, { status: 500 });
  }

  return Response.json({ success: true, message: "Message sent successfully." }, { status: 200 });
}

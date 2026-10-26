"use client";

import { useId, useState } from "react";
import { contactSchema } from "@/lib/validation";
import type { ZodIssue } from "zod";

const labelCls =
  "block text-[11px] uppercase tracking-[0.06em] text-(--graphite) mb-1";

const inputCls =
  "w-full bg-transparent border-0 border-b border-(--mist) text-[16px] py-3.5 text-(--ink) outline-none font-[inherit] focus:border-(--ink) transition-colors placeholder:text-(--mist)";

const errorCls = "mt-1.5 text-[12px] text-red-500";

type FormState = "idle" | "loading" | "success" | "error";

interface FieldErrors {
  name?:    string[];
  email?:   string[];
  message?: string[];
}

function firstError(errors: FieldErrors, field: keyof FieldErrors): string {
  return errors[field]?.[0] ?? "";
}

function validateLocally(name: string, email: string, message: string): FieldErrors | null {
  const result = contactSchema.safeParse({ name, email, message });
  if (result.success) return null;
  const errs: FieldErrors = {};
  for (const issue of result.error.issues as ZodIssue[]) {
    const field = issue.path[0] as keyof FieldErrors;
    if (!errs[field]) errs[field] = [];
    errs[field]!.push(issue.message);
  }
  return errs;
}

export default function ContactForm() {
  const nameId    = useId();
  const emailId   = useId();
  const messageId = useId();

  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [message, setMessage] = useState("");

  const [formState,   setFormState]   = useState<FormState>("idle");
  const [serverMsg,   setServerMsg]   = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<"name" | "email" | "message", boolean>>>({});

  const isLoading = formState === "loading";
  const handleBlur = (field: "name" | "email" | "message") =>
    setTouched((prev) => ({ ...prev, [field]: true }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    const localErrors = validateLocally(name, email, message);
    if (localErrors) { setFieldErrors(localErrors); return; }
    setFieldErrors({});
    setFormState("loading");
    setServerMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data: { success: boolean; message: string; errors?: FieldErrors } = await res.json();

      if (data.success) {
        setFormState("success");
        setServerMsg(data.message);
        setName(""); setEmail(""); setMessage(""); setTouched({});
      } else {
        setFormState("error");
        setServerMsg(data.message ?? "Something went wrong.");
        if (data.errors) setFieldErrors(data.errors);
      }
    } catch {
      setFormState("error");
      setServerMsg("Network error — please check your connection and try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form" className="flex flex-col gap-9">

      {/* Name */}
      <div>
        <label htmlFor={nameId} className={labelCls}>Name</label>
        <input
          id={nameId} type="text" autoComplete="name" required
          minLength={2} maxLength={60} value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => handleBlur("name")} disabled={isLoading}
          aria-invalid={!!(touched.name && firstError(fieldErrors, "name"))}
          aria-describedby={`${nameId}-error`} className={inputCls}
        />
        {touched.name && firstError(fieldErrors, "name") && (
          <p id={`${nameId}-error`} role="alert" className={errorCls}>
            {firstError(fieldErrors, "name")}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor={emailId} className={labelCls}>Email</label>
        <input
          id={emailId} type="email" autoComplete="email" required
          value={email} onChange={(e) => setEmail(e.target.value)}
          onBlur={() => handleBlur("email")} disabled={isLoading}
          aria-invalid={!!(touched.email && firstError(fieldErrors, "email"))}
          aria-describedby={`${emailId}-error`} className={inputCls}
        />
        {touched.email && firstError(fieldErrors, "email") && (
          <p id={`${emailId}-error`} role="alert" className={errorCls}>
            {firstError(fieldErrors, "email")}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor={messageId} className={labelCls}>Message</label>
        <textarea
          id={messageId} rows={5} required minLength={10} maxLength={1000}
          value={message} onChange={(e) => setMessage(e.target.value)}
          onBlur={() => handleBlur("message")} disabled={isLoading}
          aria-invalid={!!(touched.message && firstError(fieldErrors, "message"))}
          aria-describedby={`${messageId}-error ${messageId}-count`}
          className={`${inputCls} resize-none`}
        />
        <div className="flex items-center justify-between mt-1.5">
          {touched.message && firstError(fieldErrors, "message") ? (
            <p id={`${messageId}-error`} role="alert" className={errorCls}>
              {firstError(fieldErrors, "message")}
            </p>
          ) : <span />}
          <span id={`${messageId}-count`} aria-live="polite" className="text-[11px] text-(--graphite) tabular-nums">
            {message.length} / 1000
          </span>
        </div>
      </div>

      {/* Success */}
      {formState === "success" && (
        <div role="status" aria-live="polite" className="flex items-start gap-3 p-4 border border-(--mist) bg-(--paper)">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 mt-0.5 text-green-600">
            <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="text-[14px] text-(--ink)">{serverMsg}</p>
        </div>
      )}

      {/* Error */}
      {formState === "error" && serverMsg && (
        <div role="alert" aria-live="assertive" className="flex items-start gap-3 p-4 border border-red-200 bg-red-50">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 mt-0.5 text-red-500">
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 4.5v4M8 10.5v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <p className="text-[14px] text-red-700">{serverMsg}</p>
        </div>
      )}

      {/* Submit */}
      {formState !== "success" && (
        <button
          type="submit" disabled={isLoading} aria-disabled={isLoading}
          className="self-start inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.07em] px-7 py-[15px] disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ background: "var(--ink)", color: "var(--paper)", border: "1px solid var(--ink)", fontFamily: "inherit" }}
        >
          {isLoading ? (
            <>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="animate-spin">
                <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
                <path d="M7 1.5A5.5 5.5 0 0 1 12.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Sending…
            </>
          ) : "Send Message"}
        </button>
      )}
    </form>
  );
}

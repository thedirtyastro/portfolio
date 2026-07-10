import Link from "next/link";
import SectionLabel from "../ui/SectionLabel";

const ROLES = ["Frontend Engineer", "Web3 Developer", "UI Engineer"];

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-between pt-44 pb-0 px-[clamp(24px,6vw,96px)] border-b border-(--mist)">

      {/* ── Title block ───────────────────────────────────────── */}
      <div>
        <div className="mb-14">
          <SectionLabel>Based in Bangalore, India</SectionLabel>
        </div>
        <h1
          className="hero-title font-bold leading-[0.92] tracking-[-0.04em]"
          style={{ fontSize: "clamp(64px,10vw,148px)" }}
        >
          <span className="reveal-line"><span>Sarukhan</span></span>
          <span className="reveal-line"><span>Muthuraman</span></span>
          <span className="reveal-line">
            <span className="italic text-(--graphite)">.</span>
          </span>
        </h1>
      </div>

      {/* ── Bottom band ───────────────────────────────────────── */}
      {/*
        Layout (desktop):
        | Role pills + description | Divider | Year / exp stat | Divider | CTAs |
        Full-width, border-top, sits flush at bottom of the viewport
      */}
      <div
        data-animate
        className="grid grid-cols-[1fr_1px_200px_1px_auto] gap-0 border-t border-(--mist) mt-20 max-lg:grid-cols-1 max-lg:border-0 max-lg:mt-16 max-lg:gap-0"
      >

        {/* Col 1 — Description + role tags */}
        <div className="py-12 pr-16 flex flex-col justify-between gap-8 max-lg:pr-0 max-lg:pb-10 max-lg:border-b max-lg:border-(--mist)">
          <p
            className="hero-desc text-[18px] leading-[1.8] text-(--graphite) max-w-[40ch]"
          >
            I build scalable web products for Web3, FinTech, and SaaS —
            Next.js, React, TypeScript, and blockchain.
          </p>
          <div className="flex flex-wrap gap-2">
            {ROLES.map((r) => (
              <span
                key={r}
                className="text-[11px] uppercase tracking-[0.1em] text-(--graphite) border border-(--mist) px-3.5 py-2"
              >
                {r}
              </span>
            ))}
          </div>
        </div>

        {/* Vertical divider */}
        <div className="bg-(--mist) self-stretch max-lg:hidden" />

        {/* Col 2 — Experience stat */}
        <div className="py-12 px-10 flex flex-col justify-between gap-4 max-lg:px-0 max-lg:py-10 max-lg:border-b max-lg:border-(--mist)">
          <div>
            <div
              className="font-bold leading-none tracking-tight text-(--ink)"
              style={{ fontSize: "clamp(52px,6vw,80px)" }}
            >
              2+
            </div>
            <div className="text-[11px] uppercase tracking-[0.12em] text-(--graphite) mt-3">
              Years of experience
            </div>
          </div>
          <div className="flex items-center gap-2 text-[12px] text-(--graphite)">
            <span className="w-2 h-2 rounded-full bg-(--signal) shrink-0" />
            Available for work
          </div>
        </div>

        {/* Vertical divider */}
        <div className="bg-(--mist) self-stretch max-lg:hidden" />

        {/* Col 3 — CTAs */}
        <div className="py-12 pl-10 flex flex-col justify-center gap-3 max-lg:pl-0 max-lg:pt-10">
          <Link
            href="/work"
            className="btn-fill inline-flex items-center justify-between border border-(--ink) px-6 py-4 text-[12px] uppercase tracking-[0.07em] w-full max-lg:w-auto max-lg:justify-start max-lg:gap-6"
          >
            <span>View Projects</span>
            <span className="text-[16px] leading-none">→</span>
          </Link>
          <Link
            href="/contact"
            className="btn-fill inline-flex items-center justify-between border border-(--mist) px-6 py-4 text-[12px] uppercase tracking-[0.07em] w-full max-lg:w-auto max-lg:justify-start max-lg:gap-6"
          >
            <span>Get in Touch</span>
            <span className="text-[16px] leading-none">↗</span>
          </Link>
          <a
            href="#"
            className="btn-fill inline-flex items-center justify-between border border-(--mist) px-6 py-4 text-[12px] uppercase tracking-[0.07em] w-full max-lg:w-auto max-lg:justify-start max-lg:gap-6"
          >
            <span>Download CV</span>
            <span className="text-[16px] leading-none">↓</span>
          </a>
        </div>

      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useResume } from "./ResumeProvider";

const NAV_LINKS = [
  { label: "Work",    href: "/work" },
  { label: "About",   href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sarukhan-muthuraman-752869391/" },
  { label: "GitHub",   href: "https://github.com/thedirtyastro" },
  { label: "Twitter",  href: "https://x.com/thedirtyastro" },
];

export default function SiteFooter() {
  const { openResume } = useResume();

  return (
    <footer
      style={{
        borderTop:  "1px solid var(--mist)",
        padding:    "0 clamp(24px,6vw,96px)",
        background: "var(--paper)",
        color:      "var(--ink)",
      }}
    >
      {/* Top band */}
      <div className="grid grid-cols-[1fr_auto_auto] gap-20 items-start py-20 border-b border-(--mist) max-md:grid-cols-1 max-md:gap-12">

        <div>
          <p
            className="font-bold tracking-tight leading-none mb-6"
            style={{ fontSize: "clamp(40px,5.5vw,80px)" }}
          >
            Sarukhan<br />Muthuraman
          </p>
          <p className="text-[15px] leading-[1.75] text-(--graphite) max-w-[36ch]">
            Frontend Engineer &amp; Web3 Developer building scalable,
            high-performance digital products.
          </p>
          <div
            className="mt-8 inline-flex items-center gap-2 px-4 py-2.5"
            style={{ border: "1px solid var(--mist)" }}
          >
            <span className="w-2 h-2 rounded-full bg-(--signal) shrink-0" />
            <span className="text-[11px] uppercase tracking-widest text-(--graphite)">
              Available for work
            </span>
          </div>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.14em] text-(--graphite) mb-6">
            Navigation
          </p>
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[15px] text-(--ink) hover:text-(--graphite) transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.14em] text-(--graphite) mb-6">
            Online
          </p>
          <ul className="flex flex-col gap-4">
            {SOCIAL_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-(--ink) hover:text-(--graphite) transition-colors"
                >
                  {l.label} ↗
                </a>
              </li>
            ))}
            {/* Resume opens the modal */}
            <li>
              <button
                onClick={openResume}
                className="text-[15px] text-(--ink) hover:text-(--graphite) transition-colors"
                style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", padding: 0 }}
              >
                Resume ↗
              </button>
            </li>
          </ul>
        </div>

      </div>

      {/* Middle band */}
      <div className="grid grid-cols-3 gap-0 py-12 border-b border-(--mist) max-md:grid-cols-1 max-md:gap-6">
        {[
          { role: "Frontend Engineering", desc: "React, Next.js, TypeScript, Tailwind CSS" },
          { role: "Web3 Development",     desc: "Solana, Wallet integrations, Trading UIs" },
          { role: "UI Engineering",        desc: "Motion design, Design systems, GSAP" },
        ].map((item, i) => (
          <div
            key={item.role}
            style={i > 0 ? { borderLeft: "1px solid var(--mist)", paddingLeft: 48 } : {}}
            className="max-md:!border-l-0 max-md:!pl-0 max-md:border-t max-md:border-t-(--mist) max-md:pt-6"
          >
            <p className="text-[15px] font-semibold mb-2">{item.role}</p>
            <p className="text-[13px] text-(--graphite) leading-[1.6]">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Bottom band */}
      <div className="flex items-center justify-between py-8 text-[12px] text-(--graphite) flex-wrap gap-4">
        <span>© 2026 Sarukhan Muthuraman. All rights reserved.</span>
        <span>Designed &amp; Developed using Next.js, Tailwind CSS &amp; GSAP.</span>
        <a
          href="mailto:s.saru7072@gmail.com"
          className="hover:text-(--ink) transition-colors"
        >
          s.saru7072@gmail.com
        </a>
      </div>

    </footer>
  );
}

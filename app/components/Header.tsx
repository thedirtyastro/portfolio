"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { label: "Work",    href: "/work" },
  { label: "About",   href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[500] flex items-center justify-between py-4"
      style={{
        padding: "16px clamp(24px,6vw,96px)",
        /* No mix-blend-difference — it inverts colours in dark mode making
           the header unreadable. Instead use a semi-transparent backdrop. */
        background:   "var(--paper)",
        borderBottom: "1px solid var(--mist)",
        color:        "var(--ink)",
      }}
    >
      <Link
        href="/"
        style={{ fontSize: 17, fontWeight: 500, letterSpacing: "0.02em", color: "var(--ink)" }}
      >
        Sarukhan.
      </Link>

      <nav className="hidden md:flex items-center gap-10">
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-link text-[13px] uppercase tracking-[0.06em]${pathname === item.href ? " active" : ""}`}
            style={{ color: "var(--graphite)" }}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <a
        href="/assets/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          border:        "1px solid var(--mist)",
          padding:       "9px 20px",
          fontSize:      11,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color:         "var(--ink)",
          transition:    "border-color 0.25s ease, color 0.25s ease",
        }}
      >
        Resume
      </a>
    </header>
  );
}

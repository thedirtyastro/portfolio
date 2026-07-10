"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useResume } from "./ResumeProvider";
import Logo from "../assets/Logo.png";

const NAV = [
  { label: "Work",    href: "/work" },
  { label: "About",   href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { openResume } = useResume();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Lock body scroll while menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed", top: 0, left: 0, right: 0,
          zIndex: 500,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "12px clamp(24px,6vw,96px)",
          background: "var(--paper)",
          borderBottom: "1px solid var(--mist)",
          color: "var(--ink)",
        }}
      >
        {/* Logo */}
        <Link href="/" aria-label="Home" style={{ display: "flex", alignItems: "center", zIndex: 600 }}>
          <Image
            src={Logo}
            alt="Sarukhan Muthuraman"
            height={56}
            priority
            style={{ objectFit: "contain", maxWidth: 140 }}
          />
        </Link>

        {/* Desktop nav */}
        <nav style={{  alignItems: "center", gap: 40 }} className="hidden md:flex">
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

        {/* Desktop resume button */}
        <button
          onClick={openResume}
          className="hidden md:block"
          style={{
            border: "1px solid var(--mist)",
            padding: "9px 20px",
            fontSize: 11,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--ink)",
            background: "transparent",
            cursor: "pointer",
            transition: "border-color 0.25s ease, color 0.25s ease",
            fontFamily: "inherit",
          }}
        >
          Resume
        </button>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex md:hidden"
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            width: 40,
            height: 40,
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
            zIndex: 600,
            position: "relative",
          }}
        >
          {/* Three lines that animate into X */}
          <span style={{
            display: "block",
            width: 22, height: 1.5,
            background: "var(--ink)",
            transformOrigin: "center",
            transition: "transform 0.3s cubic-bezier(0.16,0.8,0.24,1), opacity 0.2s",
            transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
          }} />
          <span style={{
            display: "block",
            width: 22, height: 1.5,
            background: "var(--ink)",
            transition: "opacity 0.2s",
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: "block",
            width: 22, height: 1.5,
            background: "var(--ink)",
            transformOrigin: "center",
            transition: "transform 0.3s cubic-bezier(0.16,0.8,0.24,1), opacity 0.2s",
            transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
          }} />
        </button>
      </header>

      {/* ── Mobile fullscreen menu ── */}
      <div
        aria-hidden={!menuOpen}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 490,
          background: "var(--paper)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 clamp(24px,6vw,96px)",
          /* Slide in from top */
          transform: menuOpen ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.45s cubic-bezier(0.16,0.8,0.24,1)",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        {/* Nav links */}
        <nav style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {NAV.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "clamp(36px, 10vw, 64px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: pathname === item.href ? "var(--ink)" : "var(--graphite)",
                borderBottom: i < NAV.length - 1 ? "1px solid var(--mist)" : "none",
                padding: "20px 0",
                transition: "color 0.2s",
                /* Staggered entry */
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                transitionProperty: "opacity, transform, color",
                transitionDuration: menuOpen ? "0.4s" : "0s",
                transitionDelay: menuOpen ? `${0.15 + i * 0.07}s` : "0s",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Resume button */}
        <button
          onClick={() => { setMenuOpen(false); openResume(); }}
          style={{
            marginTop: 40,
            alignSelf: "flex-start",
            border: "1px solid var(--ink)",
            padding: "14px 32px",
            fontSize: 12,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--ink)",
            background: "transparent",
            cursor: "pointer",
            fontFamily: "inherit",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.4s, transform 0.4s",
            transitionDelay: menuOpen ? "0.38s" : "0s",
          }}
        >
          View Resume ↗
        </button>

        {/* Bottom meta */}
        <div style={{
          position: "absolute",
          bottom: "clamp(24px, 5vh, 48px)",
          left: "clamp(24px,6vw,96px)",
          right: "clamp(24px,6vw,96px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          opacity: menuOpen ? 1 : 0,
          transition: "opacity 0.4s",
          transitionDelay: menuOpen ? "0.45s" : "0s",
        }}>
          <span style={{ fontSize: 11, color: "var(--graphite)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Sarukhan Muthuraman
          </span>
          <span style={{ fontSize: 11, color: "var(--graphite)", letterSpacing: "0.08em" }}>
            © 2026
          </span>
        </div>
      </div>
    </>
  );
}

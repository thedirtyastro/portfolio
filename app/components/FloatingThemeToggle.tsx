"use client";

import { useTheme } from "./ThemeProvider";

/**
 * Fixed bottom-right theme toggle.
 * Matches the site's design language:
 *   — sharp square corners (no border-radius)
 *   — 1px border using var(--mist)
 *   — text-[11px] uppercase tracking label
 *   — a small filled/hollow circle as the mode indicator
 *   — background matches var(--paper), text matches var(--graphite)
 */
export default function FloatingThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        /* Position */
        position:   "fixed",
        bottom:     32,
        right:      32,
        zIndex:     9000,

        /* Layout */
        display:    "inline-flex",
        alignItems: "center",
        gap:        10,

        /* Appearance — matches existing button/border style */
        background:    "var(--paper)",
        color:         "var(--graphite)",
        border:        "1px solid var(--mist)",
        borderRadius:  0,               /* sharp — matches .btn-fill */
        padding:       "11px 18px",
        cursor:        "pointer",
        fontFamily:    "inherit",
        outline:       "none",

        /* Subtle lift */
        boxShadow: "0 2px 16px rgba(0,0,0,0.08)",

        /* Transition */
        transition: "background 0.25s ease, color 0.25s ease, border-color 0.25s ease",
      }}
    >
      {/* Mode indicator — filled circle (dark) / outline circle (light) */}
      <span
        aria-hidden
        style={{
          display:      "block",
          width:        8,
          height:       8,
          borderRadius: "50%",
          background:   isDark ? "var(--ink)" : "transparent",
          border:       "1px solid var(--ink)",
          flexShrink:   0,
          transition:   "background 0.25s ease, border-color 0.25s ease",
        }}
      />

      {/* Label */}
      <span
        style={{
          fontSize:      11,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          fontWeight:    500,
          whiteSpace:    "nowrap",
        }}
      >
        {isDark ? "Light" : "Dark"}
      </span>
    </button>
  );
}

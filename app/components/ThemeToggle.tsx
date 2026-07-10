"use client";

import { useTheme } from "./ThemeProvider";

/**
 * Pill toggle — square knob slides left (light) / right (dark).
 * Self-contained inline styles so no CSS class conflicts.
 */
export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      style={{
        display:        "inline-flex",
        alignItems:     "center",
        width:          56,
        height:         30,
        borderRadius:   999,
        border:         `1px solid ${isDark ? "#b6ff3c" : "#d8d6cd"}`,
        background:     isDark ? "#0a0a09" : "#faf9f6",
        padding:        "3px 4px",
        cursor:         "pointer",
        flexShrink:     0,
        position:       "relative",
        transition:     "background 0.3s ease, border-color 0.3s ease",
        outline:        "none",
      }}
    >
      {/* Square knob */}
      <span
        style={{
          display:      "block",
          width:        20,
          height:       20,
          borderRadius: 4,
          background:   isDark ? "#b6ff3c" : "#0a0a09",
          transform:    isDark ? "translateX(26px)" : "translateX(0px)",
          transition:   "transform 0.35s cubic-bezier(0.16,0.8,0.24,1), background 0.3s ease",
          flexShrink:   0,
        }}
      />
    </button>
  );
}

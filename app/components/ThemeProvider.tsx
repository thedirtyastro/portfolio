"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
}>({ theme: "light", toggle: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  // On mount — read from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) {
      apply(stored);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      apply("dark");
    }
  }, []);

  function apply(t: Theme) {
    setTheme(t);
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("theme", t);
  }

  const toggle = useCallback(() => {
    apply(theme === "light" ? "dark" : "light");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

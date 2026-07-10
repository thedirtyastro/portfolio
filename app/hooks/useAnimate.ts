"use client";

import { useEffect } from "react";

/**
 * Wires IntersectionObserver to every [data-animate] element.
 * When an element enters the viewport, adds the class "in-view"
 * which triggers the CSS transition defined in globals.css.
 */
export function useAnimate() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

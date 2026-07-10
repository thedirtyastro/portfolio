"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Fires once after the preloader exits — animates hero title + bottom row */
export function playIntro() {
  const tl = gsap.timeline();

  // Title lines reveal
  tl.to(".hero-title .reveal-line span", {
    y: "0%",
    duration: 1.1,
    stagger: 0.1,
    ease: "power4.out",
  });

  // Bottom row fades up
  tl.fromTo(
    "[data-animate]",
    { opacity: 0, y: 28 },
    { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: "power3.out" },
    "-=0.4"
  );
}

/**
 * Drop into any page to enable GSAP scroll-reveals for
 * elements with class `.reveal-up` (used on inner pages).
 */
export default function GSAPInit() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal-up");
    els.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return null;
}

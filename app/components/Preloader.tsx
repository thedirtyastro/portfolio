"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(wrapRef.current, {
      yPercent: -100,
      duration: 1.0,
      delay: 1.2,
      ease: "power4.inOut",
      onComplete,
    });
  }, [onComplete]);

  return (
    <div
      ref={wrapRef}
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--ink)",
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontSize: "clamp(48px, 8vw, 96px)",
          fontWeight: 800,
          color: "var(--paper)",
          letterSpacing: "-0.05em",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        SN
      </span>
    </div>
  );
}

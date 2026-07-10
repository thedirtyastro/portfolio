"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Preloader sequence:
 *
 * Phase 1 — Entry
 *   · "S"  rises  from below  (translateY +120% → 0)
 *   · "N"  drops  from above  (translateY -120% → 0)
 *   Both land center-screen, stacked, large.
 *
 * Phase 2 — Expand (opposite directions)
 *   · "S" stays left  — "arukhan"  clips open to the RIGHT  → "Sarukhan"
 *   · "N" stays right — "Muthuraman" clips open to the LEFT → "MuthuramanN"
 *     (visually: the full word "Muthuraman" grows leftward, N is its anchor)
 *
 * Phase 3 — Progress bar counts 0 → 100
 *
 * Phase 4 — Exit: full panel slides up
 */
export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const wrapRef = useRef<HTMLDivElement>(null);

  // Row 1:  [S][arukhan]  — S is the anchor, arukhan opens right
  const sRef       = useRef<HTMLSpanElement>(null);
  const sRestRef   = useRef<HTMLSpanElement>(null); // "arukhan"

  // Row 2:  [Muthuraman][N]  — N is the anchor, Muthuraman opens left
  const nRef       = useRef<HTMLSpanElement>(null);
  const nRestRef   = useRef<HTMLSpanElement>(null); // "Muthuraman"

  // Progress
  const progressRef = useRef<HTMLDivElement>(null);
  const barFillRef  = useRef<HTMLSpanElement>(null);
  const numRef      = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // ── Phase 1: S up from below, N down from above ──────────
    tl
      .set([sRestRef.current, nRestRef.current, progressRef.current], {
        visibility: "hidden",
      })
      .fromTo(
        sRef.current,
        { yPercent: 120, autoAlpha: 0 },
        { yPercent: 0,   autoAlpha: 1, duration: 0.72 },
        0
      )
      .fromTo(
        nRef.current,
        { yPercent: -120, autoAlpha: 0 },
        { yPercent: 0,    autoAlpha: 1, duration: 0.72 },
        0
      );

    // ── Phase 2: Expand in opposite directions ────────────────
    // "arukhan" clips open to the RIGHT of S
    tl
      .set(sRestRef.current, {
        visibility: "visible",
        clipPath: "inset(0 100% 0 0)",   // fully hidden on the right side
      }, "+=0.18")
      .to(
        sRestRef.current,
        { clipPath: "inset(0 0% 0 0)", duration: 0.65, ease: "power2.inOut" },
        "expand"
      )

      // "Muthuraman" clips open to the LEFT of N
      .set(nRestRef.current, {
        visibility: "visible",
        clipPath: "inset(0 0 0 100%)",   // fully hidden on the left side
      }, "expand")
      .to(
        nRestRef.current,
        { clipPath: "inset(0 0 0 0%)", duration: 0.65, ease: "power2.inOut" },
        "expand"
      );

    // ── Phase 3: Progress bar fades in ───────────────────────
    tl.set(progressRef.current, { visibility: "visible" }, "-=0.2")
      .fromTo(
        progressRef.current,
        { autoAlpha: 0, y: 10 },
        { autoAlpha: 1, y: 0,  duration: 0.4 },
        "-=0.2"
      );

    // ── Phase 4: Counter ──────────────────────────────────────
    let n = 0;
    const iv = setInterval(() => {
      n += Math.ceil(Math.random() * 8) + 2;
      if (n >= 100) { n = 100; clearInterval(iv); }
      if (numRef.current)     numRef.current.textContent = String(n);
      if (barFillRef.current) barFillRef.current.style.width = n + "%";

      if (n === 100) {
        // ── Exit: slide the whole panel up ───────────────────
        gsap.to(wrapRef.current, {
          yPercent: -100,
          duration: 0.9,
          delay: 0.45,
          ease: "power4.inOut",
          onComplete,
        });
      }
    }, 72);

    return () => clearInterval(iv);
  }, [onComplete]);

  // Shared text style for the big letters
  const big: React.CSSProperties = {
    fontSize: "clamp(60px, 10vw, 128px)",
    fontWeight: 700,
    letterSpacing: "-0.04em",
    lineHeight: 1,
    display: "inline-block",
  };

  return (
    <div
      ref={wrapRef}
      className="fixed inset-0 z-[10000] bg-(--ink) flex flex-col items-center justify-center gap-16 overflow-hidden"
    >
      {/* ── Name block ───────────────────────────────────────── */}
      <div className="flex flex-col select-none" style={{ gap: "0.06em" }}>

        {/* Row 1 — S · arukhan  (expands RIGHT) */}
        <div className="flex items-baseline">
          {/* S — anchor, rises from below */}
          <span ref={sRef} style={{ ...big, color: "var(--paper)" }}>
            S
          </span>
          {/* arukhan — hidden until expand, clips from right */}
          <span
            ref={sRestRef}
            style={{ ...big, color: "var(--paper)", visibility: "hidden" }}
          >
            arukhan
          </span>
        </div>

        {/* Row 2 — Muthuraman · N  (expands LEFT) */}
        {/*
          Layout order in DOM: nRestRef then nRef
          nRestRef ("Muthuraman") opens leftward — inset(0 0 0 100%) → inset(0 0 0 0%)
          nRef ("N") is the right anchor that dropped from above
        */}
        <div className="flex items-baseline">
          {/* Muthuraman — hidden until expand, clips from left */}
          <span
            ref={nRestRef}
            style={{ ...big, color: "var(--signal)", visibility: "hidden" }}
          >
            Muthuraman
          </span>
          {/* N — anchor, drops from above */}
          <span ref={nRef} style={{ ...big, color: "var(--signal)" }}>
            {/* N is already the last letter of Muthuraman — we hide it
                inside nRestRef once the expansion completes so it looks
                like one continuous word. We use a zero-width spacer. */}
          </span>
        </div>

      </div>

      {/* ── Progress ─────────────────────────────────────────── */}
      <div
        ref={progressRef}
        className="flex flex-col items-center gap-3"
        style={{ visibility: "hidden" }}
      >
        <div className="w-[200px] h-px relative overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
          <span
            ref={barFillRef}
            className="absolute inset-y-0 left-0 w-0 bg-(--signal)"
          />
        </div>
        <p
          className="tabular-nums"
          style={{ fontSize: 12, letterSpacing: "0.16em", color: "var(--mist)" }}
        >
          <span ref={numRef}>0</span>%
        </p>
      </div>

    </div>
  );
}

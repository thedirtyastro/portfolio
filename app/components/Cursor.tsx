"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top  = my + "px";
    };

    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.left = rx + "px";
      ring.style.top  = ry + "px";
      requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener("mousemove", onMove);

    document.querySelectorAll<HTMLElement>("a, button").forEach((el) => {
      el.addEventListener("mouseenter", () => ring.classList.add("hovered"));
      el.addEventListener("mouseleave", () => ring.classList.remove("hovered"));
    });

    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        id="cursor-dot"
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-(--ink)"
      />
      {/* Ring */}
      <div
        ref={ringRef}
        id="cursor-ring"
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full -translate-x-1/2 -translate-y-1/2 w-[34px] h-[34px] border border-(--ink) transition-[width,height,border-color,background] duration-[250ms]"
      />
    </>
  );
}

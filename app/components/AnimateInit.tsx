"use client";

import { useAnimate } from "../hooks/useAnimate";

/** Mounts the IntersectionObserver for [data-animate] elements on any page. */
export default function AnimateInit() {
  useAnimate();
  return null;
}

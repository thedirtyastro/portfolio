"use client";

import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "../../data/projects";

export default function ProjectList() {
  return (
    <div className="px-[clamp(24px,6vw,96px)]">
      {PROJECTS.map((p, i) => (
        <Link
          key={p.num}
          href={`/work/${p.slug}`}
          data-animate
          className="group grid grid-cols-[64px_1fr_460px] gap-14 items-start py-[72px] border-b border-(--mist) max-[1100px]:grid-cols-[64px_1fr] max-md:grid-cols-1 max-md:gap-5 max-md:py-12 cursor-none"
        >
          {/* Index + year */}
          <div className="pt-1">
            <span className="block text-[13px] text-(--graphite)">{p.num}</span>
            <span className="block text-[12px] text-(--mist) mt-1">{p.year}</span>
          </div>

          {/* Body */}
          <div>
            {/* Title */}
            <h2
              className="font-bold tracking-tight leading-none transition-transform duration-500 group-hover:translate-x-2.5 mb-3"
              style={{ fontSize: "clamp(28px,3.6vw,50px)" }}
            >
              {p.name}
            </h2>

            {/* Type */}
            <p className="text-[12px] uppercase tracking-[0.06em] text-(--graphite) mb-4">
              {p.type}
            </p>

            {/* Live link — separate, clearly visible */}
            {p.link && (
              <span
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(`https://${p.link}`, "_blank", "noopener,noreferrer"); }}
                className="inline-flex items-center gap-2 mb-6 text-[11px] uppercase tracking-[0.1em] px-4 py-2 border border-(--mist) text-(--graphite) hover:border-(--ink) hover:text-(--ink) transition-colors cursor-none"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-(--signal) shrink-0" />
                {p.link} ↗
              </span>
            )}

            {/* Description */}
            <p className="text-[15px] leading-[1.75] text-(--graphite) max-w-[54ch] mb-8">
              {p.desc}
            </p>

            {/* Bullet points */}
            <ul className="flex flex-col gap-2 mb-8 max-w-[58ch]">
              {p.bullets.map((b, j) => (
                <li key={j} className="flex items-start gap-3 text-[14px] leading-[1.65] text-(--graphite)">
                  <span className="mt-[7px] w-1 h-1 rounded-full bg-(--graphite) shrink-0 opacity-50" />
                  {b}
                </li>
              ))}
            </ul>

            {/* Stack tags */}
            <div className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="text-[11px] uppercase tracking-[0.04em] px-3 py-[5px] border border-(--mist) text-(--graphite)"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Thumbnail */}
          <div className={`relative aspect-video bg-(--ink) overflow-hidden max-[1100px]:hidden ${
            !p.bannerImages || p.bannerImages.length !== 1 ? "transition-colors duration-400 group-hover:bg-(--signal)" : ""
          }`}>
            {p.bannerImages && p.bannerImages.length > 0 ? (
              <>
                {p.bannerImages.length === 1 ? (
                  <>
                    <Image
                      src={p.bannerImages[0]}
                      alt={`${p.name} banner`}
                      fill
                      className="object-cover"
                      sizes="460px"
                    />

                  </>
                ) : (
                  p.bannerImages.map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt={`${p.name} banner ${i + 1}`}
                      fill
                      className={`object-cover transition-opacity duration-500 ${
                        i === 0 ? "opacity-100 group-hover:opacity-0" : "opacity-0 group-hover:opacity-100"
                      }`}
                      sizes="460px"
                    />
                  ))
                )}
              </>
            ) : (
              <>
                <div className="absolute inset-0 grid-texture opacity-25" />
                <span className="absolute bottom-[18px] right-[18px] italic text-[13px] text-(--paper) opacity-75 transition-colors duration-400 group-hover:text-(--ink)">
                  {p.name} — {p.num}
                </span>
              </>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}

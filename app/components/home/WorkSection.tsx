import Link from "next/link";
import SectionLabel from "../ui/SectionLabel";
import { FEATURED_PROJECTS } from "../../data/projects";

export default function WorkSection() {
  return (
    <section className="px-[clamp(24px,6vw,96px)] pt-40 pb-40 border-b border-(--mist)">

      {/* Header */}
      <div data-animate className="flex justify-between items-end mb-20">
        <div>
          <div className="mb-6"><SectionLabel>Work</SectionLabel></div>
          <h2
            className="font-bold tracking-tight leading-none"
            style={{ fontSize: "clamp(40px,5.5vw,78px)" }}
          >
            Selected Work
          </h2>
        </div>
        <Link
          href="/work"
          className="text-[13px] tracking-[0.04em] text-(--graphite) hover:text-(--ink) transition-colors pb-1 border-b border-(--mist)"
        >
          View all 12 projects ↗
        </Link>
      </div>

      {/* Featured rows */}
      {FEATURED_PROJECTS.map((p, i) => (
        <div
          key={p.num}
          data-animate
          data-delay={String(i + 1) as "1" | "2" | "3"}
          className="group grid grid-cols-[56px_1fr_400px] gap-14 items-start py-16 border-t border-(--ink) last:border-b last:border-b-(--ink) max-[1040px]:grid-cols-[56px_1fr] max-md:grid-cols-1 max-md:gap-5 max-md:py-10"
        >
          {/* Num + year */}
          <div>
            <span className="block text-[13px] text-(--graphite)">{p.num}</span>
            <span className="block text-[11px] text-(--mist) mt-1">{p.year}</span>
          </div>

          {/* Info */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.12em] text-(--graphite) mb-4">{p.type}</p>
            <h3
              className="font-bold tracking-tight leading-none transition-transform duration-500 group-hover:translate-x-2.5 mb-5"
              style={{ fontSize: "clamp(28px,3.6vw,52px)" }}
            >
              {p.name}
            </h3>
            <p className="text-[15px] leading-[1.75] text-(--graphite) max-w-[44ch] mb-6">
              {p.desc}
            </p>
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
          <div className="relative aspect-video bg-(--ink) overflow-hidden transition-colors duration-400 group-hover:bg-(--signal) max-[1040px]:hidden">
            <div className="absolute inset-0 grid-texture opacity-20" />
            <span className="absolute bottom-4 right-4 italic text-[13px] text-(--paper) opacity-75 transition-colors duration-400 group-hover:text-(--ink)">
              {p.name} — {p.num}
            </span>
          </div>
        </div>
      ))}

      <div data-animate className="pt-16">
        <Link
          href="/work"
          className="btn-fill inline-flex items-center text-[12px] uppercase tracking-[0.07em] px-7 py-[15px] border border-(--mist)"
        >
          All 12 Projects →
        </Link>
      </div>

    </section>
  );
}

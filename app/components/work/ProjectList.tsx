import { PROJECTS } from "../../data/projects";

export default function ProjectList() {
  return (
    <div className="px-[clamp(24px,6vw,96px)]">
      {PROJECTS.map((p, i) => (
        <div
          key={p.num}
          data-animate
          className="group grid grid-cols-[64px_1fr_460px] gap-14 items-start py-[72px] border-b border-(--mist) max-[1100px]:grid-cols-[64px_1fr] max-md:grid-cols-1 max-md:gap-5 max-md:py-12"
        >
          {/* Index + year */}
          <div className="pt-1">
            <span className="block text-[13px] text-(--graphite)">{p.num}</span>
            <span className="block text-[12px] text-(--mist) mt-1">{p.year}</span>
          </div>

          {/* Body */}
          <div>
            {/* Title row */}
            <div className="flex items-baseline gap-4 flex-wrap mb-3">
              <h2
                className="font-bold tracking-tight leading-none transition-transform duration-500 group-hover:translate-x-2.5"
                style={{ fontSize: "clamp(28px,3.6vw,50px)" }}
              >
                {p.name}
              </h2>
              {p.link && (
                <a
                  href={`https://${p.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] uppercase tracking-[0.06em] text-(--graphite) border-b border-(--mist) hover:text-(--ink) hover:border-(--ink) transition-colors pb-px"
                >
                  {p.link} ↗
                </a>
              )}
            </div>

            <p className="text-[12px] uppercase tracking-[0.06em] text-(--graphite) mb-6">
              {p.type}
            </p>

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
          <div className="relative aspect-video bg-(--ink) overflow-hidden transition-colors duration-400 group-hover:bg-(--signal) max-[1100px]:hidden">
            <div className="absolute inset-0 grid-texture opacity-25" />
            <span className="absolute bottom-[18px] right-[18px] italic text-[13px] text-(--paper) opacity-75 transition-colors duration-400 group-hover:text-(--ink)">
              {p.name} — {p.num}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

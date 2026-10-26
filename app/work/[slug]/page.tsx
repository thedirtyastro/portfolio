import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PROJECTS } from "../../data/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = PROJECTS.find((p) => p.slug === slug);
  if (!p) return {};
  return {
    title: `${p.name} | Sarukhan Muthuraman`,
    description: p.desc,
    alternates: { canonical: `/work/${p.slug}` },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  if (idx === -1) notFound();

  const p = PROJECTS[idx];
  const prev = PROJECTS[idx - 1] ?? null;
  const next = PROJECTS[idx + 1] ?? null;

  return (
    <div className="pt-32 pb-32">

      {/* ── Back link ── */}
      <div className="px-[clamp(24px,6vw,96px)] mb-16">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-(--graphite) hover:text-(--ink) transition-colors"
        >
          <span>←</span> All Work
        </Link>
      </div>

      {/* ── Hero ── */}
      <div className="px-[clamp(24px,6vw,96px)] border-b border-(--mist) pb-20">
        <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-(--graphite) mb-8 before:content-[''] before:w-7 before:h-px before:bg-(--graphite) before:shrink-0">
          {p.type} — {p.year}
        </p>

        <div className="flex items-end justify-between gap-8 flex-wrap">
          <h1
            className="font-bold tracking-[-0.03em] leading-none"
            style={{ fontSize: "clamp(48px,7vw,110px)" }}
          >
            {p.name}
          </h1>

          <div className="flex items-center gap-6 pb-2">
            {(p.liveUrl || p.link) && (
              <a
                href={p.liveUrl ?? `https://${p.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] uppercase tracking-[0.08em] border border-(--mist) px-5 py-3 hover:border-(--ink) transition-colors"
              >
                Live Site ↗
              </a>
            )}
            <span className="text-[13px] text-(--graphite)">{p.num}</span>
          </div>
        </div>
      </div>

      {/* ── Banner Images ── */}
      {p.bannerImages && p.bannerImages.length > 0 && (
        <div className="px-[clamp(24px,6vw,96px)] py-12 border-b border-(--mist)">
          <div className={`grid gap-4 ${p.bannerImages.length === 1 ? "grid-cols-1" : "grid-cols-2 max-md:grid-cols-1"}`}>
            {p.bannerImages.map((src, i) => (
              <div key={i} className="relative aspect-video bg-(--mist) overflow-hidden">
                <Image
                  src={src}
                  alt={`${p.name} banner ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Overview + Role ── */}
      <div className="px-[clamp(24px,6vw,96px)] grid grid-cols-[1fr_340px] gap-20 py-20 border-b border-(--mist) max-lg:grid-cols-1 max-lg:gap-12">

        {/* Overview */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-(--graphite) mb-6">Overview</p>
          <p className="text-[17px] leading-[1.8] max-w-[60ch]">
            {p.overview ?? p.desc}
          </p>
        </div>

        {/* Meta sidebar */}
        <div className="flex flex-col gap-10">

          {/* Role */}
          {p.role && p.role.length > 0 && (
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-(--graphite) mb-4">My Role</p>
              <ul className="flex flex-col gap-2">
                {p.role.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-[14px] leading-[1.65] text-(--graphite)">
                    <span className="mt-[7px] w-1 h-1 rounded-full bg-(--graphite) shrink-0 opacity-50" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Stack */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-(--graphite) mb-4">Tech Stack</p>
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

          {/* Year */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-(--graphite) mb-2">Year</p>
            <p className="text-[14px]">{p.year}</p>
          </div>
        </div>
      </div>

      {/* ── What I Built ── */}
      <div className="px-[clamp(24px,6vw,96px)] py-20 border-b border-(--mist)">
        <p className="text-[11px] uppercase tracking-[0.18em] text-(--graphite) mb-10">What I Built</p>
        <ul className="grid grid-cols-2 gap-x-16 gap-y-4 max-md:grid-cols-1 max-w-[80ch]">
          {p.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-[15px] leading-[1.7] text-(--graphite)">
              <span className="mt-[9px] w-1 h-1 rounded-full bg-(--graphite) shrink-0 opacity-50" />
              {b}
            </li>
          ))}
        </ul>
      </div>

      {/* ── Images ── */}
      {p.images && p.images.length > 0 && (
        <div className="px-[clamp(24px,6vw,96px)] py-20 border-b border-(--mist)">
          <p className="text-[11px] uppercase tracking-[0.18em] text-(--graphite) mb-10">Project Screens</p>
          <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            {p.images.map((src, i) => (
              <div key={i} className="relative aspect-video bg-(--mist) overflow-hidden">
                <Image
                  src={src}
                  alt={`${p.name} screenshot ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Prev / Next navigation ── */}
      <div className="px-[clamp(24px,6vw,96px)] pt-20 grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        {prev ? (
          <Link
            href={`/work/${prev.slug}`}
            className="group border border-(--mist) p-8 hover:border-(--ink) transition-colors"
          >
            <p className="text-[11px] uppercase tracking-[0.12em] text-(--graphite) mb-3">← Previous</p>
            <p className="font-bold text-[22px] tracking-tight group-hover:translate-x-1 transition-transform duration-300">
              {prev.name}
            </p>
            <p className="text-[12px] text-(--graphite) mt-1">{prev.type}</p>
          </Link>
        ) : <div />}

        {next && (
          <Link
            href={`/work/${next.slug}`}
            className="group border border-(--mist) p-8 hover:border-(--ink) transition-colors text-right max-sm:text-left"
          >
            <p className="text-[11px] uppercase tracking-[0.12em] text-(--graphite) mb-3">Next →</p>
            <p className="font-bold text-[22px] tracking-tight group-hover:translate-x-1 transition-transform duration-300">
              {next.name}
            </p>
            <p className="text-[12px] text-(--graphite) mt-1">{next.type}</p>
          </Link>
        )}
      </div>

    </div>
  );
}

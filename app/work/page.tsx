import type { Metadata } from "next";
import GSAPInitServer from "../components/GSAPInitServer";
import ProjectList from "../components/work/ProjectList";

export const metadata: Metadata = {
  title: "Work | Sarukhan Muthuraman",
  description: "Selected projects by Sarukhan Muthuraman — Web3 platforms, FinTech apps, trading UIs, and more built with Next.js, React, and TypeScript.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work | Sarukhan Muthuraman",
    description: "Selected projects — Web3 platforms, FinTech apps, trading UIs built with Next.js, React, and TypeScript.",
    url: "https://sarukhan.dev/work",
  },
};

export default function WorkPage() {
  return (
    <>
      <GSAPInitServer />

      {/* Page header */}
      <div className="px-[clamp(24px,6vw,96px)] pt-44 pb-24 border-b border-(--mist)">
        <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-(--graphite) mb-10 before:content-[''] before:w-7 before:h-px before:bg-(--graphite) before:shrink-0">
          Selected Work
        </p>
        <h1
          className="font-bold tracking-[-0.03em] leading-none max-w-[12ch]"
          style={{ fontSize: "clamp(48px,7vw,110px)" }}
        >
          Projects &amp;{" "}
          <em className="italic text-(--graphite)">Work</em>
        </h1>
      </div>

      <ProjectList />
    </>
  );
}

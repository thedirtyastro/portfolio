import Link from "next/link";
import SectionLabel from "../ui/SectionLabel";
import Image from "next/image";
import Profile from "../../assets/profile.svg";

const STATS = [
  { n: "2+",  l: "Years experience"   },
  { n: "12+", l: "Projects shipped"   },
  { n: "50+", l: "Features delivered" },
];

export default function AboutSection() {
  return (
    <section className="px-[clamp(24px,6vw,96px)] pt-40 pb-40 border-b border-(--mist)">

      {/* Header */}
      <div className="mb-20">
        <div className="mb-6"><SectionLabel>About</SectionLabel></div>
        <h2 className="font-bold tracking-tight leading-none" style={{ fontSize: "clamp(40px,5.5vw,78px)" }}>
          About Me
        </h2>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-[380px_1fr] gap-24 items-start max-[1040px]:grid-cols-1 max-[1040px]:gap-16">

        {/* Photo block */}
        <div data-animate className="flex flex-col gap-8">
          {/* Photo with B&W → color reveal on hover */}
          <div className="photo-block w-full aspect-3/4 relative overflow-hidden bg-(--ink)">
            {/* Layer 1 — full color (always visible underneath) */}
            <Image
              src={Profile}
              alt="Sarukhan Muthuraman"
              fill
              sizes="(max-width: 1040px) 100vw, 380px"
              className="object-cover"
              priority
            />

            {/* Layer 2 — grayscale overlay, clips away on hover revealing color below */}
            <div className="photo-bw-layer absolute inset-0">
              <Image
                src={Profile}
                alt=""
                aria-hidden="true"
                fill
                sizes="(max-width: 1040px) 100vw, 380px"
                className="object-cover grayscale"
              />
            </div>

            {/* Overlay badge — neutral, not signal green */}
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <div
                className="px-5 py-3 inline-flex items-center gap-3"
                style={{ background: "var(--ink)" }}
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: "var(--signal)" }}
                />
                <span
                  className="text-[11px] uppercase tracking-[0.12em] font-medium"
                  style={{ color: "var(--paper)" }}
                >
                  Available for work
                </span>
              </div>
            </div>
          </div>

          {/* Quick facts */}
          <div className="flex flex-col gap-3">
            {[
              ["Location", "Bangalore, India"],
              ["Experience", "2+ Years"],
              ["Focus", "Frontend & Web3"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between items-center py-3 border-b border-(--mist)">
                <span className="text-[11px] uppercase tracking-widest text-(--graphite)">{k}</span>
                <span className="text-[14px] font-medium">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Text + stats */}
        <div data-animate data-delay="2" className="flex flex-col gap-10 pt-2">
          <h3 className="font-bold tracking-tight leading-[1.1]" style={{ fontSize: "clamp(32px,3.5vw,52px)" }}>
            Building digital products{" "}
            <em className="text-(--graphite)" style={{ fontStyle: "italic" }}>that matter.</em>
          </h3>

          <div className="flex flex-col gap-5 text-[17px] leading-[1.85] text-(--graphite) max-w-[52ch]">
            <p>
              I&apos;m a Frontend Engineer specializing in modern web applications,
              Web3 experiences, and interactive user interfaces.
            </p>
            <p>
              With 3+ years of professional experience, I build scalable products
              using Next.js, React, TypeScript, Tailwind CSS, Spring Boot, and
              blockchain technologies.
            </p>
            <p className="text-(--ink)">
              I enjoy transforming complex ideas into elegant digital products
              that are fast, accessible, and enjoyable to use.
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
            <Link href="/about" className="btn-fill inline-flex items-center text-[12px] uppercase tracking-[0.07em] px-7 py-[15px] border border-(--ink)">
              Full Profile →
            </Link>
            <a href="/Sarukhan-Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-fill inline-flex items-center text-[12px] uppercase tracking-[0.07em] px-7 py-[15px] border border-(--mist)">
              Download CV
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-0 border-t border-(--mist) pt-10 max-sm:grid-cols-1">
            {STATS.map((s, i) => (
              <div key={s.l} className={`pr-10 ${i > 0 ? "border-l border-(--mist) pl-10 max-sm:border-l-0 max-sm:pl-0 max-sm:pt-6 max-sm:border-t max-sm:border-t-(--mist)" : ""}`}>
                <div className="font-bold tracking-tight leading-none mb-2" style={{ fontSize: "clamp(36px,4vw,56px)" }}>
                  {s.n}
                </div>
                <div className="text-[12px] uppercase tracking-[0.1em] text-(--graphite)">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

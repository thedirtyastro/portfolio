import Link from "next/link";
import SectionLabel from "../ui/SectionLabel";

const CONTACT_LINKS = [
  { label: "Email",    href: "mailto:s.saru7072@gmail.com",                                  value: "s.saru7072@gmail.com" },
  { label: "Phone",    href: "tel:+917092978110",                                             value: "+91 7092978110" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sarukhan-muthuraman-752869391/",    value: "linkedin.com/in/sarukhan" },
  { label: "GitHub",   href: "https://github.com/thedirtyastro",                              value: "github.com/thedirtyastro" },
];

const SOCIAL_LINKS = [
  { l: "LinkedIn", h: "https://www.linkedin.com/in/sarukhan-muthuraman-752869391/" },
  { l: "GitHub",   h: "https://github.com/thedirtyastro" },
  { l: "Twitter",  h: "https://x.com/thedirtyastro" },
  { l: "Resume ↗", h: "/Sarukhan-Resume.pdf" },
];

export default function ContactSection() {
  return (
    <section className="px-[clamp(24px,6vw,96px)] pt-40 pb-40">

      {/* Header */}
      <div className="mb-20">
        <div className="mb-6"><SectionLabel>Contact</SectionLabel></div>
        <h2
          className="font-bold tracking-tight leading-none"
          style={{ fontSize: "clamp(40px,5.5vw,78px)" }}
        >
          Get in Touch
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-24 items-start max-md:grid-cols-1 max-md:gap-16">

        {/* Left — headline + contact list */}
        <div data-animate className="flex flex-col gap-10">
          <p
            className="font-bold tracking-tight leading-none"
            style={{ fontSize: "clamp(36px,4.5vw,68px)" }}
          >
            Let&apos;s Build{" "}
            <em className="italic" style={{ color: "var(--graphite)" }}>Something</em>{" "}
            Great
          </p>

          <p className="text-[17px] leading-[1.85] text-(--graphite) max-w-[42ch]">
            Available for freelance projects, full-time roles, and remote
            opportunities. I typically respond within 24 hours.
          </p>

          <ul className="flex flex-col">
            {CONTACT_LINKS.map((item) => (
              <li
                key={item.label}
                className="flex justify-between items-center py-5 border-b border-(--mist)"
              >
                <span className="text-[11px] uppercase tracking-widest text-(--graphite)">
                  {item.label}
                </span>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-[15px] text-(--ink) hover:text-(--graphite) transition-colors"
                >
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — CTA block */}
        <div data-animate data-delay="2" className="flex flex-col gap-8 pt-2">

          {/*
            CTA block: always dark background (#0a0a09) so it stands out
            against both light and dark themes. Text is always light (#f0eeea).
            Button border and text are also always light.
            We hardcode these values instead of using CSS vars to prevent
            the dark-theme token swap from making text invisible.
          */}
          <div
            className="p-12 flex flex-col gap-8"
            style={{ background: "#0a0a09" }}
          >
            <p
              className="text-[13px] uppercase tracking-[0.12em]"
              style={{ color: "#8a8880" }}
            >
              Ready to start a project?
            </p>
            <p
              className="text-[17px] leading-[1.8] max-w-[32ch]"
              style={{ color: "#f0eeea" }}
            >
              Whether it&apos;s a new product, an ongoing project, or just
              an idea — let&apos;s talk.
            </p>
            <Link
              href="/contact"
              className="self-start inline-flex items-center text-[12px] uppercase tracking-[0.07em] px-7 py-[15px]"
              style={{
                border:     "1px solid #f0eeea",
                color:      "#f0eeea",
                position:   "relative",
                overflow:   "hidden",
                transition: "color 0.35s ease",
              }}
            >
              Start a Conversation →
            </Link>
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-4">
            <p className="text-[11px] uppercase tracking-[0.12em] text-(--graphite)">
              Find me online
            </p>
            <div className="flex gap-6 flex-wrap">
              {SOCIAL_LINKS.map((x) => (
                <a
                  key={x.l}
                  href={x.h}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] tracking-[0.04em] text-(--graphite) hover:text-(--ink) transition-colors border-b border-(--mist) pb-0.5"
                >
                  {x.l}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

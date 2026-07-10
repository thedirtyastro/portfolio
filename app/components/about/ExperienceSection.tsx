import SectionLabel from "../ui/SectionLabel";

const EXPERIENCE = [
  {
    years: "2025 — Present",
    company: "Tradala Trade Solutions",
    role: "Frontend Developer",
    desc: "Developing Web3 products, blockchain integrations, responsive UI systems, reusable components, and backend APIs.",
  },
  {
    years: "2023 — 2024",
    company: "Rocket Finance",
    role: "Full Stack Developer",
    desc: "Developed fintech applications using Spring Boot, Angular, REST APIs, and MySQL.",
  },
  {
    years: "2022",
    company: "Zoho",
    role: "Incubation Trainee",
    desc: "Completed intensive software engineering training in Java, Data Structures & Algorithms, and OOP concepts.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="px-[clamp(24px,6vw,96px)] pt-32 pb-0 border-b border-(--mist)">

      <div className="flex justify-between items-end mb-20">
        <div>
          <div className="mb-6"><SectionLabel>Experience</SectionLabel></div>
          <h2 className="font-bold tracking-tight leading-none" style={{ fontSize: "clamp(40px,5.5vw,78px)" }}>
            Experience
          </h2>
        </div>
        <span className="text-[13px] text-(--graphite)">01</span>
      </div>

      {EXPERIENCE.map((exp, i) => (
        <div
          key={i}
          data-animate
          className="grid grid-cols-[200px_1fr_1fr] gap-12 py-16 border-t border-(--mist) last:border-b last:border-b-(--mist) max-md:grid-cols-1 max-md:gap-4 max-md:py-10"
        >
          <p className="text-[13px] text-(--graphite) pt-1">{exp.years}</p>

          <div>
            <h3
              className="font-bold tracking-tight mb-3"
              style={{ fontSize: "clamp(22px,2.4vw,32px)" }}
            >
              {exp.company}
            </h3>
            <p className="text-[12px] uppercase tracking-wider text-(--graphite)">{exp.role}</p>
          </div>

          <p className="text-[15px] leading-[1.75] text-(--graphite) max-w-[52ch] pt-1">{exp.desc}</p>
        </div>
      ))}

    </section>
  );
}

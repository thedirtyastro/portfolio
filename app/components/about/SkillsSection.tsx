const SKILLS = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML / CSS", "SCSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Spring Boot", "Java", "REST APIs", "Node.js"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    category: "Cloud",
    items: ["AWS EC2", "AWS RDS"],
  },
  {
    category: "Design",
    items: ["Figma", "Adobe Illustrator"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Spring Tool Suite", "TradingView"],
  },
];

export default function SkillsSection() {
  return (
    <section className="px-[clamp(24px,6vw,96px)] pt-32 pb-40">

      {/* Section header */}
      <div className="flex justify-between items-end mb-20">
        <h2 className="font-bold tracking-tight leading-none" style={{ fontSize: "clamp(40px,5.5vw,78px)" }}>
          Skills
        </h2>
        <span className="text-[13px] text-(--graphite)">03</span>
      </div>

      {/* 3-col card grid */}
      <div
        data-animate
        className="grid grid-cols-3 gap-px bg-(--mist) border border-(--mist) max-md:grid-cols-2 max-sm:grid-cols-1"
      >
        {SKILLS.map((col) => (
          <div key={col.category} className="bg-(--paper) p-10 flex flex-col gap-8">
            {/* Category label */}
            <div className="flex items-center justify-between">
              <h3 className="text-[11px] uppercase tracking-[0.14em] text-(--graphite) font-semibold">
                {col.category}
              </h3>
              <span className="text-[11px] text-(--mist)">{col.items.length}</span>
            </div>

            {/* Items */}
            <ul className="flex flex-col">
              {col.items.map((item, j) => (
                <li
                  key={item}
                  className={`text-[15px] py-3.5 flex items-center gap-3 ${j > 0 ? "border-t border-(--mist)" : ""}`}
                >
                  <span className="w-1 h-1 rounded-full bg-(--graphite) shrink-0 opacity-40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </section>
  );
}

import SectionLabel from "../ui/SectionLabel";

export default function AboutHero() {
  return (
    <div className="px-[clamp(24px,6vw,96px)] pt-44 pb-28 border-b border-(--mist)">

      <div className="mb-10">
        <SectionLabel>About</SectionLabel>
      </div>

      <div className="grid grid-cols-2 gap-20 items-start pt-4 max-md:grid-cols-1 max-md:gap-10">
        <h1
          className="font-bold tracking-tight leading-none"
          style={{ fontSize: "clamp(48px,6.5vw,100px)" }}
        >
          Engineer.{" "}
          <em className="italic text-(--graphite)">Builder.</em>
        </h1>

        <div className="flex flex-col gap-6">
          {[
            "I'm a Frontend Engineer with over three years of experience building high-performance web applications for Web3, FinTech, and SaaS products.",
            "I specialize in transforming complex product requirements into intuitive, scalable, and visually refined digital experiences.",
            "Based in Bangalore, India. Available for freelance, remote, and full-time opportunities.",
          ].map((text, i) => (
            <p
              key={i}
              className={`text-[18px] leading-[1.75] max-w-[52ch] ${i === 2 ? "text-(--ink)" : "text-(--graphite)"}`}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

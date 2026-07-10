const SERVICES = [
  { num: "01", title: "Frontend Development",    desc: "Responsive, performant websites built with React and Next.js." },
  { num: "02", title: "UI Engineering",          desc: "Pixel-perfect interfaces with reusable component systems and design tokens." },
  { num: "03", title: "Web3 Development",        desc: "Wallet integrations, blockchain interfaces, token swaps, and trading dashboards." },
  { num: "04", title: "Backend Development",     desc: "Spring Boot APIs, authentication flows, and REST architecture." },
  { num: "05", title: "Performance Optimization",desc: "Core Web Vitals, lazy loading, and rendering optimization." },
  { num: "06", title: "UI Animation",            desc: "Framer Motion, GSAP, and meaningful micro interactions." },
];

export default function ServicesSection() {
  return (
    <section className="px-[clamp(24px,6vw,96px)] pt-32 pb-0">
      <div className="flex justify-between items-end mb-16">
        <h2
          className="font-bold tracking-tight leading-none"
          style={{ fontSize: "clamp(40px,5.5vw,78px)" }}
        >
          Services
        </h2>
        <span className="text-[13px] text-(--graphite)">02</span>
      </div>

      {SERVICES.map((s, i) => (
        <div
          key={i}
          data-animate
          className="grid grid-cols-[60px_1fr_1.4fr] gap-10 py-12 border-t border-(--mist) last:border-b last:border-b-(--mist) max-md:grid-cols-1 max-md:gap-3 max-md:py-8"
        >
          <span className="text-[13px] text-(--graphite)">{s.num}</span>
          <h3
            className="font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(22px,2.4vw,32px)" }}
          >
            {s.title}
          </h3>
          <p className="text-[15px] leading-[1.7] text-(--graphite) max-w-[48ch]">
            {s.desc}
          </p>
        </div>
      ))}
    </section>
  );
}

const ITEMS = [
  "Next.js","React","TypeScript","Tailwind CSS",
  "Solana","Spring Boot","Framer Motion",
  "Next.js","React","TypeScript","Tailwind CSS",
  "Solana","Spring Boot","Framer Motion",
];

export default function Marquee() {
  return (
    <div className="border-t border-b border-(--mist) py-5 overflow-hidden">
      <div className="marquee-track">
        {ITEMS.map((item, i) => (
          <span
            key={i}
            className="text-[13px] tracking-wider text-(--graphite) uppercase"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

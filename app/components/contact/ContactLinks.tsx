const LINKS = [
  { label: "Email",    href: "mailto:s.saru7072@gmail.com", text: "s.saru7072@gmail.com" },
  { label: "Phone",    href: "tel:+917092978110",           text: "+91 7092978110" },
  { label: "LinkedIn", href: "#",                           text: "linkedin.com/in/sarukhan" },
  { label: "GitHub",   href: "#",                           text: "github.com/sarukhan" },
  { label: "Resume",   href: "#",                           text: "Download Resume ↗" },
];

export default function ContactLinks() {
  return (
    <div>
      <p className="text-[13px] uppercase tracking-widest text-(--graphite) mb-10">
        Direct Channels
      </p>
      <ul>
        {LINKS.map((link, i) => (
          <li
            key={i}
            className="flex justify-between items-center gap-5 border-t border-(--mist) py-[22px] last:border-b last:border-b-(--mist)"
          >
            <span className="text-[11px] uppercase tracking-[0.06em] text-(--graphite) shrink-0">
              {link.label}
            </span>
            <a
              href={link.href}
              className="text-[17px] hover:text-(--graphite) transition-colors"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

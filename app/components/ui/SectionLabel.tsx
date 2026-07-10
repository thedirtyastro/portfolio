/** Reusable eyebrow label with leading line — used in every section */
export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-(--graphite) before:content-[''] before:w-7 before:h-px before:bg-(--graphite) before:shrink-0">
      {children}
    </p>
  );
}

import GSAPInitServer from "../components/GSAPInitServer";
import ContactLinks from "../components/contact/ContactLinks";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <GSAPInitServer />

      {/* Page header */}
      <div className="px-[clamp(24px,6vw,96px)] pt-44 pb-24 border-b border-(--mist)">
        <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-(--graphite) mb-10 before:content-[''] before:w-7 before:h-px before:bg-(--graphite) before:shrink-0">
          Contact
        </p>
        <h1
          className="font-bold tracking-[-0.03em] leading-none max-w-[14ch] mb-10"
          style={{ fontSize: "clamp(48px,8vw,120px)" }}
        >
          Let&apos;s Build{" "}
          <em className="italic text-(--graphite)">Something</em>{" "}
          Great
        </h1>
        <p className="text-[18px] text-(--graphite) max-w-[48ch] leading-[1.7]">
          Available for freelance projects, full-time roles, and remote
          opportunities. I typically respond within 24 hours.
        </p>
      </div>

      {/* Contact grid */}
      <section className="px-[clamp(24px,6vw,96px)] py-32">
        <div className="grid grid-cols-2 gap-24 max-md:grid-cols-1 max-md:gap-16">
          <div data-animate>
            <ContactLinks />
          </div>
          <div data-animate data-delay="2">
            <p className="text-[13px] uppercase tracking-widest text-(--graphite) mb-10">
              Send a Message
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

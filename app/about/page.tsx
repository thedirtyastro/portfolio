import type { Metadata } from "next";
import GSAPInitServer from "../components/GSAPInitServer";
import AboutHero from "../components/about/AboutHero";
import ExperienceSection from "../components/about/ExperienceSection";
import ServicesSection from "../components/about/ServicesSection";
import SkillsSection from "../components/about/SkillsSection";

export const metadata: Metadata = {
  title: "About | Sarukhan Muthuraman",
  description: "Learn about Sarukhan Muthuraman — Frontend and Full Stack Developer with 2+ years of experience in Web3, FinTech, and SaaS products.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Sarukhan Muthuraman",
    description: "Frontend and Full Stack Developer with 2+ years of experience in Web3, FinTech, and SaaS products.",
    url: "https://sarukhan.dev/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <GSAPInitServer />
      <AboutHero />
      <ExperienceSection />
      <ServicesSection />
      <SkillsSection />
    </>
  );
}

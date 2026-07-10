import GSAPInitServer from "../components/GSAPInitServer";
import AboutHero from "../components/about/AboutHero";
import ExperienceSection from "../components/about/ExperienceSection";
import ServicesSection from "../components/about/ServicesSection";
import SkillsSection from "../components/about/SkillsSection";

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

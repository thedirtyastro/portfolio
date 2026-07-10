"use client";

import { useState } from "react";
import { useAnimate } from "./hooks/useAnimate";
import Preloader from "./components/Preloader";
import { playIntro } from "./components/GSAPInit";
import Marquee from "./components/Marquee";
import HeroSection from "./components/home/HeroSection";
import WorkSection from "./components/home/WorkSection";
import AboutSection from "./components/home/AboutSection";
import ContactSection from "./components/home/ContactSection";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useAnimate();

  return (
    <>
      {!loaded && (
        <Preloader
          onComplete={() => {
            setLoaded(true);
            setTimeout(() => playIntro(), 50);
          }}
        />
      )}
      <HeroSection />
      <Marquee />
      <WorkSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}

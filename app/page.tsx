"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IntroAnimation from "@/components/sections/IntroAnimation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import EventsSection from "@/components/sections/EventsSection";
import TeamSection from "@/components/sections/TeamSection";
import GallerySection from "@/components/sections/GallerySection";
import ResourcesSection from "@/components/sections/ResourcesSection";
import JoinSection from "@/components/sections/JoinSection";
import GeometricBackground from "@/components/ui/GeometricBackground";

export default function HomePage() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {!introComplete && (
        <IntroAnimation onComplete={() => setIntroComplete(true)} />
      )}

      <main className="relative overflow-x-hidden">
        <Navbar />
        <HeroSection />

        <GeometricBackground>
          <AboutSection />
          <EventsSection />
          <TeamSection />
          <GallerySection />
          <ResourcesSection />
          <JoinSection />
        </GeometricBackground>

        <Footer />
      </main>
    </>
  );
}
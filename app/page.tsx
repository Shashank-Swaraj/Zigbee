// File: app/page.tsx
import { Hero } from "@/components/hero/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { CrewSection } from "@/components/sections/CrewSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <AboutSection />
      <EventsSection />
      <CrewSection />
    </div>
  );
}
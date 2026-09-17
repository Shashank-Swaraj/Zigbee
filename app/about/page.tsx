// File: app/about/page.tsx
import { AboutSection } from "@/components/sections/AboutSection";

export const metadata = {
  title: "About // ZIGBEE.JU",
  description: "Learn about the Zigbee IoT & Embedded Systems Club at Jain University (JU-FET).",
};

export default function AboutPage() {
  return (
    <div className="w-full">
      <AboutSection />
    </div>
  );
}
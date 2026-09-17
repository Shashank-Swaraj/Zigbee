// File: app/crew/page.tsx
import { CrewSection } from "@/components/sections/CrewSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "THE CREW // ZIGBEE.JU",
  description: "Meet the student engineers, designers, hackers, and faculty advisors of Zigbee IoT & Embedded Systems Club.",
};

export default function CrewPage() {
  return <CrewSection />;
}
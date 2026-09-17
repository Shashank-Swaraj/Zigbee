// File: components/hero/Hero.tsx
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { HeroCollage } from "@/components/hero/HeroCollage";
import { WhatWeDo } from "@/components/hero/WhatWeDo";
import { Zap } from "lucide-react";

export function Hero() {
  return (
    <div className="w-full bg-[#0E0E10]">
      {/* Top Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 pt-10 pb-12 sm:pt-8 sm:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Bold Block Typography & CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:-ml-10">
            
            {/* Top Tape Badge */}
            <div className="w-fit bg-[#1F1F23] border border-[#333338] text-zinc-300 px-3 py-1 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest font-bold rotate-[-1deg] shadow-sm mb-6">
              BUILDING. BREAKING. LEARNING.
            </div>

            {/* Main Headline (Chalk White + Glowing Orange) */}
            <h1 className="font-sedgwick text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal tracking-tight uppercase leading-[0.90] select-none text-[#F4F4F5]">
              GRAB A BOARD.<br />
              WIRE A SENSOR.<br />
              <span className="text-[#84CC16]">SEE WHAT</span><br />
              <span className="text-[#84CC16]">HAPPENS.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 font-mono text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-lg">
              Zigbee is the IoT &amp; Embedded Systems club of Jain University. We build{" "}
              <span className="text-zinc-200 underline decoration-zinc-600 font-semibold">smart devices</span>,{" "}
              <span className="text-zinc-200 underline decoration-zinc-600 font-semibold">mesh networks</span> and{" "}
              <span className="text-zinc-200 underline decoration-zinc-600 font-semibold">real-world hardware</span>.<br />
              <span>By students, </span>
              <span className="text-[#FF5200] font-bold">for builders.</span>
            </p>

            {/* LAB STATUS Badge */}
            <div className="mt-6 p-2.5 border border-dashed border-zinc-700 bg-[#161619] w-fit font-mono text-xs text-zinc-400">
              <span className="text-[10px] uppercase font-bold text-zinc-500 block mb-0.5">LAB STATUS</span>
              <span className="text-[#FF5200] text-xs font-semibold flex items-center gap-1.5">
                WIRES WRONG, VIBES STRONG. <Zap className="w-3.5 h-3.5 fill-current" />
              </span>
            </div>

            
            {/* Action Buttons & Handwritten Annotations */}
            <div className="mt-8 pt-2 flex flex-col sm:flex-row sm:items-end gap-y-5 sm:gap-x-6 sm:gap-y-8 select-none">
              
              {/* Left Group: Annotation + Orange Taped Button */}
              <div className="flex items-center gap-2">
                {/* Handwritten Annotation on Left */}
                <div className="font-caveat text-zinc-200 sm:text-zinc-300 text-[15px] sm:text-sm leading-tight text-right flex flex-col items-end shrink-0">
                  <span>yeah, we go</span>
                  <span className="flex items-center gap-1">
                    outside too <span className="text-[17px] sm:text-base font-bold text-zinc-100 sm:text-zinc-200">:)</span>
                  </span>
                  {/* Handwritten arrow pointing right to button */}
                  <svg className="w-8 h-4 text-zinc-400 stroke-current fill-none mt-0.5" viewBox="0 0 32 16">
                    <path d="M 2,8 Q 16,14 28,6" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M 22,2 L 28,6 L 22,11" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>

                {/* Button 1: PROOF WE HAVE A LIFE ↗ */}
                <div className="relative rotate-[-2.5deg] hover:rotate-0 transition-transform">
                  {/* Tape on top-left corner */}
                  <div className="absolute -top-2.5 -left-2 w-10 h-4 bg-[#EADFB7]/70 rotate-[-12deg] shadow-sm z-20 pointer-events-none border border-[#d8cc9e]/40"></div>
                  
                  <a
                    href="https://instagram.com/zigbee_ju"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 block px-4 py-2.5 bg-[#81b136  ] hover:bg-[#76b515] text-white font-mono text-[11px] sm:text-xs font-extrabold uppercase tracking-wider shadow-md border border-[#CC4200]"
                  >
                    PROOF WE HAVE A LIFE ↗
                  </a>
                </div>
              </div>

              {/* Right Group: Dark Card + Bottom Disclaimer Annotation */}
              <div className="relative flex flex-col items-start sm:items-center ml-[88px] sm:ml-0 mb-6 sm:mb-0">
                {/* Button 2: PEOPLE BEHIND THE SMOKE */}
                <Link
                  href="/crew"
                  className="block px-4 py-2.5 bg-[#161619] hover:bg-[#1F1F24] text-zinc-200 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider border border-zinc-700 shadow-sm rotate-[1deg] hover:rotate-0 transition-transform"
                >
                  PEOPLE BEHIND THE SMOKE
                </Link>

                {/* Handwritten Disclaimer Annotation underneath */}
                <div className="absolute -bottom-10 left-3 flex items-start gap-1 font-caveat text-zinc-400 text-xs sm:text-sm pointer-events-none whitespace-nowrap">
                  {/* Arrow pointing up */}
                  <svg className="w-4 h-5 text-zinc-400 stroke-current fill-none -rotate-12 mt-0.5" viewBox="0 0 16 20">
                    <path d="M 8,18 Q 4,8 7,3" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M 3,7 L 7,3 L 11,8" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <div className="leading-tight">
                    <span>not a button.</span><br />
                    <span>a disclaimer.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Center/Right Column: Scrapbook Collage */}
          <div className="lg:col-span-7 flex justify-center">
            <HeroCollage />
          </div>

        </div>
      </div>

      {/* Bottom Feature Strip & Upcoming Taped Card */}
      <WhatWeDo />
    </div>
  );
}
// File: components/hero/WhatWeDo.tsx
import React from "react";
import { Box, Code, Network, BookOpen } from "lucide-react";
import { UpcomingEventPaper } from "@/components/hero/UpcomingEventPaper";

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative w-full border-t border-[#222226] bg-[#0A0A0C] pt-10 pb-13 scroll-mt-16 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-8">
          <h2 className="font-mono text-sm font-bold tracking-widest text-white uppercase">
            WHAT WE DO
          </h2>
          <div className="h-[2px] w-8 bg-[#84CC16] ml-1"></div>
        </div>

        {/* Grid: 4 Feature Pillars (Left) + Floating Layered Paper (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
          
          {/* ================= 4 PILLARS GRID (Left 7 Cols) ================= */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* BUILD */}
            <div className="p-5 border border-[#222226] hover:border-zinc-700 transition-colors bg-[#111114]">
              <div className="flex items-center gap-2 mb-2">
                <Box className="w-4 h-4 text-[#84CC16]" />
                <span className="font-mono font-bold text-sm tracking-wider text-white">BUILD</span>
              </div>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                From sensor nodes to full IoT setups. We build stuff that actually works.
              </p>
            </div>

            {/* CODE */}
            <div className="p-5 border border-[#222226] hover:border-zinc-700 transition-colors bg-[#111114]">
              <div className="flex items-center gap-2 mb-2">
                <Code className="w-4 h-4 text-[#84CC16]" />
                <span className="font-mono font-bold text-sm tracking-wider text-white">CODE</span>
              </div>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                Firmware, apps, dashboards and tools to bring ideas to life.
              </p>
            </div>

            {/* DEPLOY */}
            <div className="p-5 border border-[#222226] hover:border-zinc-700 transition-colors bg-[#111114]">
              <div className="flex items-center gap-2 mb-2">
                <Network className="w-4 h-4 text-[#84CC16]" />
                <span className="font-mono font-bold text-sm tracking-wider text-white">DEPLOY</span>
              </div>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                Mesh networks, wireless protocols and real world testing.
              </p>
            </div>

            {/* LEARN */}
            <div className="p-5 border border-[#222226] hover:border-zinc-700 transition-colors bg-[#111114]">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#84CC16]" />
                <span className="font-mono font-bold text-sm tracking-wider text-white">LEARN</span>
              </div>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                Workshops, mentor sessions and peer learning every week.
              </p>
            </div>

          </div>

          {/* FLOATING PINNED PAPER (Right 5 Cols)  */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="w-full max-w-[540px] lg:absolute lg:-top-40 lg:-right-15 z-30 pointer-events-auto">
              <UpcomingEventPaper />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
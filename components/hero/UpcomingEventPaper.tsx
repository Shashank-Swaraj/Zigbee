// File: components/hero/UpcomingEventPaper.tsx
import React from "react";
import Image from "next/image";
import { upcomingEvents } from "@/data/events";
import { ClubEvent } from "@/types/event";
import { AlertCircle } from "lucide-react";

export function UpcomingEventPaper() {
  return (
    <div className="relative w-full max-w-[500px] mx-auto aspect-square select-none rotate-[-3deg] hover:rotate-[-1.5deg] transition-transform duration-300 drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)]">
      
      {/* 1. LAYER 1: The Realistic Torn Paper + Push Pin Canvas */}
      <Image
        unoptimized
        src="/images/upcoming-paper.png"
        alt="Upcoming Events Notice"
        fill
        className="object-contain pointer-events-none"
        priority
      />

      {/* 2. LAYER 2: Printed Static Content Inside Safe Margins */}
      <div className="absolute inset-x-[11%] top-[17%] bottom-[11%] flex flex-col justify-between select-text text-[#18181B]">
        
        {/* ================= TOP BLOCK (Header + Events) ================= */}
        <div>
          {/* Metadata Header */}
          <div className="flex items-start justify-between pb-2.5 border-b border-zinc-700/40 font-mono">
            <div>
              <div className="text-[12px] font-black tracking-widest text-[#18181B] leading-tight">
                ZIGBEE.JU
              </div>
              <div className="text-[9.5px] font-semibold tracking-wider text-zinc-700">
                JU-FET &times; CSE (IoT)
              </div>
            </div>

            <div className="text-right">
              <div className="font-caveat text-base sm:text-lg text-zinc-900 leading-tight -rotate-2 select-none">
                Same people.<br />New builds. :)
              </div>
              <div className="text-[8.5px] font-bold text-zinc-600 tracking-wider mt-0.5">
                EVENT_001 // 2026
              </div>
            </div>
          </div>

          {/* Large Slanted "UPCOMING" with Neon Green Highlight */}
          <div className="relative inline-block mt-3 mb-4">
            <span className="font-sans font-black italic text-2xl sm:text-3xl tracking-tight uppercase text-[#111114]">
              UPCOMING
            </span>
            <div className="h-2.5 w-full bg-[#84CC16]/75 -mt-2 rounded-xs -rotate-1 pointer-events-none"></div>
          </div>

          {/* Two Events (Static Printed) */}
          <div className="space-y-4 font-mono">
            {upcomingEvents.slice(0, 2).map((evt: ClubEvent, idx: number) => (
              <div
                key={evt.id}
                className="pb-3 border-b border-zinc-700/30 last:border-b-0"
              >
                {/* Line 1: Category on Left vs. Confirmed Date & Time on Right */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="text-zinc-600 font-bold">&gt;</span>
                    {evt.highlightCategory ? (
                      <span className="bg-[#84CC16] text-black px-1.5 py-0.5 font-mono font-black text-[11px] tracking-wider uppercase shadow-xs">
                        {evt.category}
                      </span>
                    ) : (
                      <span className="font-mono font-black text-[11px] tracking-wider text-[#18181B] uppercase">
                        {evt.category}
                      </span>
                    )}
                  </div>

                  {/* Date & Time: High contrast dark ink */}
                  <div className="text-right">
                    <span className="font-mono font-black text-[11.5px] tracking-wider text-[#111114] block">
                      {idx === 0 ? evt.date : "TBA"}
                    </span>
                    {idx === 0 && evt.time !== "TBA" && (
                      <span className="font-mono text-[9px] text-zinc-600 block -mt-0.5">
                        {evt.time}
                      </span>
                    )}
                  </div>
                </div>

                {/* Line 2: Title on Left vs. Crisp Printed Status Stamp on Right */}
                <div className="mt-1.5 pl-3.5 flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-zinc-900 leading-tight">
                    {evt.title}
                  </span>

                  {/* Crisp Printed Status Stamp */}
                  <div className="shrink-0">
                    {evt.status === "REGISTRATION_OPEN" && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#18181B] text-[#84CC16] font-mono text-[9px] font-black uppercase tracking-wider shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16] animate-pulse"></span>
                        REG OPEN
                      </span>
                    )}
                    {evt.status === "SEATS_FULL" && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#18181B] text-amber-400 font-mono text-[9px] font-black uppercase tracking-wider">
                        FULL
                      </span>
                    )}
                    {evt.status === "UPCOMING" && (
                      <span className="inline-flex items-center px-1.5 py-0.5 border border-zinc-800 text-zinc-800 font-mono text-[8.5px] font-black uppercase tracking-wider">
                        UPCOMING
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM OF PAPER ================= */}
        <div className="pt-2 border-t border-zinc-700/40 flex items-end justify-between">
          {/* Handwritten Cursive Note */}
          <div className="font-caveat text-base sm:text-lg text-zinc-900 leading-tight select-none">
            <span>Bring your board.</span><br />
            <span className="relative inline-block">
              We&apos;ll figure it out.
              <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#84CC16]" viewBox="0 0 100 10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                <path d="M 2,5 Q 50,9 98,4" />
              </svg>
            </span>
          </div>

          {/* Minimalist Printed Stamp */}
          <div className="text-right font-mono text-[8px] font-bold text-zinc-600 tracking-wider uppercase pr-6">
            ZGB // 2026<br />
            <span className="text-[#558410] font-black">ACTIVE LAB</span>
          </div>
        </div>

      </div>

      {/* ================= 3. REALISTIC GREEN MASKING TAPE ================= */}
      <div 
        className="absolute bottom-4 right-4 w-16 h-6 bg-[#84CC16]/65 rotate-[-14deg] shadow-md pointer-events-none border-t border-b border-[#65A30D]/40 backdrop-blur-[1px] z-30"
        style={{
          boxShadow: "0 2px 5px rgba(0,0,0,0.3)"
        }}
      ></div>

    </div>
  );
}
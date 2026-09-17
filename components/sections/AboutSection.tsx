// File: components/sections/AboutSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

// =========================================================================
// EDIT ANY WORD, NUMBER, OR STAT RIGHT HERE:
// =========================================================================
const TERMINAL_LINES = [
  "students",
  "hardware",
  "ideas",
  "late nights",
  "occasional success",
  "lots of learning",
];

const TASKS = [
  { id: 1, text: "Building sensor nodes", checked: true },
  { id: 2, text: "Testing mesh network", checked: true },
  { id: 3, text: "Planning next workshop", checked: true },
  { id: 4, text: "Debugging something (again)", checked: true },
];

const CLUB_STATS = [
  { label: "Members", value: "50+" },
  { label: "Projects", value: "10+" },
  { label: "Broken boards", value: "∞" },
  { label: "Working nodes", value: "(sometimes)" },
  { label: "Coffee consumed", value: "too much" },
  { label: "Sleep", value: "?" },
];

export function AboutSection() {

  return (
    <section id="about" className="w-full border-t border-[#222226] bg-[#08080A] py-[40px] text-zinc-300 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        
        {/* 2-Column Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/*  LEFT COLUMN */}
          <div className="lg:col-span-5 space-y-6 lg:-ml-10">
            
            {/* Tag Badge */}
            <div className="font-mono text-xs uppercase tracking-widest text-[#22C55E] font-bold">
              01. ABOUT THE CLUB // JU-FET CSE(IOT)
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl min-[400px]:text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white font-mono leading-[1.1] break-words">
              WHERE IDEAS MEET <br />
              <span className="text-[#22C55E]">WIRES</span>,{" "}
              <span className="text-[#38BDF8]">CODE</span> &amp; REALITY.
            </h2>

            {/* Sub-header */}
            <div className="pt-2 flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-wider text-white">
              <span className="text-[#22C55E]">&gt;_</span>
              <span>BUILDING BUILDING and BUILDING </span>
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 font-mono text-xs sm:text-sm text-zinc-400 leading-relaxed">
              <p>
                Zigbee is the official student-led CSE-IoT club in the{" "}
                <span className="text-zinc-200 font-semibold">
                  Department of Computer Science &amp; Engineering (IoT)
                </span>{" "}
                at Jain (Deemed-To-Be University) Faculty of Engineering and Technology (JU-FET).
              </p>
              <p>
                We bridge the gap between abstract computer science and raw hardware.
                We don&apos;t just simulate circuits on screens — we wire breadboards, flash code
                to microcontrollers, debug on the serial monitor, and celebrate when real sensor data finally prints.
              </p>
            </div>

            {/* Manifesto Box */}
            <div className="relative mt-8 p-5 sm:p-6 border border-dashed border-zinc-800 bg-[#101114]">
              <div className="absolute -top-3 left-6 px-2.5 py-0.5 bg-[#22C55E] text-black font-mono text-[9px] uppercase tracking-widest font-black shadow-sm">
                THE RITUAL
              </div>
              <p className="font-caveat text-base sm:text-xl text-zinc-200 leading-snug pt-1">
                &ldquo;Waving your hand in front of a sensor twenty times just to see a &lsquo;1&rsquo; print on the serial monitor. If you know that feeling, you belong here.&rdquo;
              </p>
              <div className="font-mono text-[10px] text-zinc-500 mt-3 tracking-widest uppercase">
                - ZIGBEE CREW @ JU-FET
              </div>
            </div>

            {/* Meet Crew Link */}
            <div className="pt-2">
              <Link
                href="/crew"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase font-bold text-zinc-300 hover:text-[#22C55E] border-b border-zinc-700 hover:border-[#22C55E] pb-0.5 transition-colors"
              >
                <span>MEET THE STUDENT CREW</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: RUGGED BACKDROP + LIVE TEXT ================= */}
          <div className="lg:col-span-7 flex justify-center items-center lg:translate-x-14 w-full">
            <div className="relative w-full max-w-[680px] lg:max-w-[900px] aspect-square select-none rotate-[-1.5deg] drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)] transition-transform duration-300">
              
              {/* 1. The Authentic Rugged Torn Paper Backdrop */}
              <Image
                unoptimized
                src="/images/about-paper-bg.png"
                alt="Rugged Dossier Sheet"
                fill
                className="object-contain pointer-events-none"
                priority
              />

              {/* 2. Live Editable Content Overlaid Directly on the Paper */}
              <div className="absolute inset-[6%] sm:inset-[8%] flex flex-col justify-between select-text pointer-events-auto text-zinc-300">
                
                {/* TIER 1: Terminal commands + Cursive Note */}
                <div className="grid grid-cols-12 gap-2 items-start pb-2 sm:pb-3 border-b border-zinc-700/50">
                  
                  {/* Left: Terminal Output */}
                  <div className="col-span-7 font-mono text-[9px] min-[400px]:text-[10.5px] sm:text-xs leading-snug space-y-0.5">
                    <div className="text-zinc-400 uppercase tracking-widest text-[12px] min-[400px]:text-[14px] sm:text-[16px] mb-1 sm:mb-2 font-semibold pt-2 sm:pt-[19px]">
                      ZIGBEE.JU // ABOUT.EXE
                    </div>
                    <div className="text-zinc-300 space-y-0.5">
                      {TERMINAL_LINES.map((line, idx) => (
                        <p key={idx} className="truncate">
                          <span className="text-zinc-600 mr-1.5">&gt;</span>
                          {line}
                        </p>
                      ))}
                      <p className="flex items-center text-white pt-0.5">
                        <span className="text-zinc-600 mr-1.5">&gt;</span>
                        <span className="inline-block w-2 h-3.5 bg-white animate-pulse"></span>
                      </p>
                    </div>
                  </div>

                  {/* Right: Handwritten Note */}
                  <div className="col-span-5 text-right font-caveat text-sm min-[400px]:text-base sm:text-[20px] text-zinc-200 leading-tight pt-1 pr-1 select-none -rotate-2">
                    <p>same curiosity</p>
                    <p>more problems.</p>
                    <div className="relative inline-block mt-0.5">
                      <span>— always.</span>
                      {/* Green marker stroke */}
                      <svg className="absolute -bottom-1.5 left-0 w-full h-2.5 text-[#22C55E]" viewBox="0 0 100 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M 4,6 Q 35,11 65,5 T 96,7" />
                      </svg>
                    </div>
                  </div>

                </div>

                {/* TIER 2: Interactive Checklist vs CLUB STATS */}
                <div className="grid grid-cols-12 gap-2 sm:gap-3 py-1.5 sm:py-3 border-b border-zinc-700/50 font-mono text-[8px] min-[380px]:text-[9.5px] sm:text-xs">
                  
                  {/* Left: Checklist */}
                  <div className="col-span-6 space-y-1 sm:space-y-2">
                    <div className="text-zinc-400 font-bold uppercase tracking-wider text-[8px] min-[380px]:text-[9.5px] sm:text-[10px] mb-1 sm:mb-1.5">
                      CURRENTLY:
                    </div>
                    
                    {TASKS.map((task) => (
                      <div
                        key={task.id}
                        className="flex items-center gap-1.5 sm:gap-2 select-none"
                      >
                        <div
                          className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-none flex items-center justify-center shrink-0 ${
                            task.checked
                              ? "border border-[#22C55E] bg-[#22C55E]/10 text-[#22C55E]"
                              : "border border-zinc-600 bg-transparent"
                          }`}
                        >
                          {task.checked && <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />}
                        </div>
                        <span
                          className={`truncate ${task.checked ? "text-zinc-200" : "text-zinc-400"}`}
                        >
                          {task.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Right: CLUB STATS (ish) */}
                  <div className="col-span-6 border-l border-zinc-700/50 pl-2 sm:pl-3 space-y-0.5 sm:space-y-1">
                    <div className="text-zinc-400 font-bold uppercase tracking-wider text-[8px] min-[380px]:text-[9.5px] sm:text-[10px] mb-1 sm:mb-1.5">
                      CLUB STATS (ish)
                    </div>
                    
                    {CLUB_STATS.map((stat, idx) => (
                      <div key={idx} className="flex justify-between text-zinc-400 gap-1">
                        <span className="truncate">{stat.label}</span>
                        <span className="text-[8.5px] min-[380px]:text-[10px] sm:text-[11px] text-zinc-200 font-semibold shrink-0">{stat.value}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* TIER 3: Bottom Handwritten Sign-off */}
                <div className="pl-1 pr-1 pb-2 sm:pl-0 sm:pr-0 sm:pb-0 pt-1.5 sm:pt-2 flex items-end justify-between font-caveat text-zinc-200 text-xs min-[400px]:text-sm sm:text-lg select-none">
                  <div>
                    <p className="leading-snug">Unlike Others.</p>
                    <p className="leading-snug pt-0.5">
                      We{" "}
                      <span className="relative inline-block text-white">
                        are who
                        {/* Green marker stroke under 'are who' */}
                        <svg className="absolute -bottom-1 left-0 w-full h-1.5 sm:h-2 text-[#22C55E]" viewBox="0 0 80 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M 2,5 Q 40,9 78,4" />
                        </svg>
                      </span>{" "}
                      actually build things.
                    </p>
                  </div>

                  {/* Hand-drawn Smiley */}
                  <div className="text-lg sm:text-2xl text-zinc-300 select-none pb-0.5 pr-2">
                    :)
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
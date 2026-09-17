// File: components/hero/HeroCollage.tsx
"use client";

import Image from "next/image";
import React from "react";

export function HeroCollage() {
  return (
    <div className="relative w-full max-w-[620px] mx-auto h-[500px] sm:h-[550px] select-none my-2">
      {/* 1. LAYER 1 (BOTTOM-LEFT): Real Scrapbook/Notebook Paper Image      */}
      <div className="absolute left-0 sm:left-2 top-20 sm:top-16 w-[270px] sm:w-[310px] rotate-[-6deg] z-10 drop-shadow-[0_15px_25px_rgba(0,0,0,0.12)]">
        <Image
          unoptimized
          src="/images/scrapbook-paper.png"
          alt="Notebook Sketch"
          width={310}
          height={380}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* 2. LAYER 2 (TOP-CENTER): ESP32 Breadboard Polaroid                 */}
      <div 
        className="absolute left-20 sm:left-38 top-0 w-[230px] sm:w-[255px] bg-white p-2.5 pb-4 rotate-[3deg] z-20 border border-zinc-200"
        style={{
          boxShadow: "0 20px 30px -10px rgba(0,0,0,0.2), 0 10px 15px -5px rgba(0,0,0,0.1)"
        }}
      >
        {/* Beige Electrical Tape on Corner */}
        <div className="absolute -top-3.5 right-4 w-16 h-6 bg-[#EADFB7] rotate-[14deg] shadow-md z-30"></div>
        
        <div className="relative w-full h-36 sm:h-40 bg-zinc-900 overflow-hidden border border-zinc-100">
          <Image
            unoptimized
            src="/images/hero-esp32.png"
            alt="ESP32 Breadboard Prototype"
            width={255}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Handwritten Annotation for ESP32 + Curled Arrow */}
      <div className="absolute right-6 sm:right-10 top-0 z-30 font-['Caveat',cursive] text-zinc-900 rotate-[-2deg] pointer-events-none">
        <div className="leading-tight text-left pl-2">
          <span className="font-bold text-lg sm:text-xl text-white">ESP32 + RC522</span><br />
          <span className="text-zinc-700 text-sm sm:text-white">WAITING FOR TAG...</span>
        </div>
        {/* Hand-drawn Arrow pointing down-left directly to ESP32 */}
        <svg className="w-10 h-10 text-white -rotate-12 mt-0.5 stroke-current fill-none" viewBox="0 0 50 50">
          <path d="M 28,5 Q 58,29 1,19" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M 14,11 L 2,19 L 15,30" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </div>

      {/* 3. LAYER 3 (TOP-RIGHT): Yellow Sticky Note                         */}
      <div 
        className="absolute right-0 sm:right-2 top-24 sm:top-20 w-[125px] sm:w-[140px] bg-[#FFF8A6] p-3 pt-4 rotate-[6deg] z-25 border border-[#EADB72]"
        style={{
          boxShadow: "0 10px 15px -3px rgba(0,0,0,0.12), 0 4px 6px -2px rgba(0,0,0,0.05)"
        }}
      >
        {/* Beige Masking Tape on Top */}
        <div className="absolute -top-2.5 left-1/4 w-12 h-4 bg-[#EADFB7]/90 rotate-[-5deg] shadow-sm"></div>
        <p className="font-['Caveat',cursive] text-zinc-900 text-base sm:text-lg leading-snug pt-0.5">
          It&apos;s not always clean code. <span className="text-lg">:)</span>
        </p>
      </div>

      {/* 4. LAYER 4 (BOTTOM-RIGHT): Enlarged Group Polaroid */}
      <div 
        className="absolute right-0 sm:-right-12 bottom-8 sm:bottom-12 w-[290px] sm:w-[340px] md:w-[360px] bg-white p-3 pb-5 rotate-[-2.5deg] z-30 sm:z-15 border border-zinc-200"
        style={{
          boxShadow: "0 25px 35px -5px rgba(0,0,0,0.35), 0 15px 15px -5px rgba(0,0,0,0.15)"
        }}
      >
        {/* Black Tape Badge Header */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-0.5 font-mono text-[9px] uppercase tracking-wider font-bold z-30 shadow-sm whitespace-nowrap">
          LATE NIGHTS. GOOD PEOPLE.
        </div>
        <div className="relative w-full h-44 sm:h-52 bg-zinc-900 overflow-hidden border border-zinc-100">
          <Image
            unoptimized
            src="/images/hero-team.jpeg"
            alt="Club Members Working"
            width={360}
            height={220}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 5. LAYER 5 (FRONT OVERLAY): Floating Dark Terminal */}
      <div 
        className="absolute left-2 sm:left-24 bottom-4 sm:bottom-20 w-[215px] sm:w-[240px] bg-[#0E0E11] text-zinc-300 p-3 rounded-none border border-zinc-700/80 z-20 sm:z-40 font-mono text-[9.5px] leading-relaxed shadow-2xl rotate-[18deg]"
      >
        <div className="flex items-center gap-1.5 pb-1.5 mb-1.5 border-b border-zinc-800 text-zinc-500">
          <span className="w-2 h-2 rounded-full bg-red-500/80"></span>
          <span className="w-2 h-2 rounded-full bg-amber-500/80"></span>
          <span className="w-2 h-2 rounded-full bg-emerald-500/80"></span>
          <span className="text-[8.5px] ml-1 text-zinc-400 font-semibold">$ make flash monitor</span>
        </div>
        <div className="space-y-0.5 text-zinc-400 font-mono">
          <p><span className="text-zinc-600">&gt;</span> Connecting...</p>
          <p><span className="text-zinc-600">&gt;</span> Chip: <span className="text-cyan-400 font-bold">ESP32-D0WD</span></p>
          <p><span className="text-zinc-600">&gt;</span> Crystal: 40MHz</p>
          <p className="text-emerald-400 font-bold">&gt; Zigbee Node Online</p>
          <p className="text-orange-400 font-semibold">&gt; Joined Mesh [2.4GHz]</p>
          <p className="text-zinc-400">&gt; recv: packet from 0x04</p>
          <p className="text-zinc-500">&gt; ack [ok]</p>
        </div>
      </div>

      {/* Handwritten quote at bottom right */}
      <div className="absolute right-4 sm:-right-4 -bottom-1 font-caveat text-[#EADFB7] text-base sm:text-lg rotate-[-5deg] z-40 pointer-events-none">
        Packets don&apos;t lie.
      </div>

    </div>
  );
}
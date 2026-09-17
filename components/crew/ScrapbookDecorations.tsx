// File: components/crew/ScrapbookDecorations.tsx
import React from "react";

/**
 * 1. The Taped Section Label (e.g. [ LEADERSHIP ], [ TEAM LEADS ], [ FACULTY ])
 * Tilted kraft-paper badge taped to the board.
 */
export function TapedLabel({ text, tilt = -1.5 }: { text: string; tilt?: number }) {
  return (
    <div
      className="relative inline-block select-none shadow-md z-10"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      {/* Corner Masking Tape */}
      <div 
        className="absolute -top-2.5 -left-3 w-8 h-4 bg-[#E6D7B8]/80 backdrop-blur-[1px] shadow-sm border-t border-b border-black/10 z-10"
        style={{ transform: "rotate(-15deg)" }}
      />

      {/* Tan Paper Badge */}
      <div className="bg-[#EAE0D0] text-zinc-900 border border-[#D5C7B0] px-4 py-1 sm:py-1.5 shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
        <span className="font-mono font-black text-xs sm:text-sm tracking-widest uppercase">
          {text}
        </span>
      </div>
    </div>
  );
}

/**
 * 2. The Torn Parchment Paper Note in the Top Right Corner
 * ("Ideas. People. Progress. The Crew. :)")
 */
export function TornParchmentNote() {
  return (
    <div 
      className="relative w-44 sm:w-52 p-5 bg-[#EAE0D0] text-zinc-900 shadow-[0_15px_30px_rgba(0,0,0,0.85)] border border-[#D5C7B0] select-none mx-auto xl:ml-9"
      style={{ transform: "rotate(2deg)" }}
    >
      {/* Top-Left Scotch Tape */}
      <div 
        className="absolute -top-3 -left-3 w-12 h-5 bg-[#E6D7B8]/80 backdrop-blur-[1px] shadow-sm border-t border-b border-black/10 z-10"
        style={{ transform: "rotate(-25deg)" }}
      />

      {/* Top-Right Scotch Tape */}
      <div 
        className="absolute -top-3 -right-3 w-12 h-5 bg-[#E6D7B8]/80 backdrop-blur-[1px] shadow-sm border-t border-b border-black/10 z-10"
        style={{ transform: "rotate(20deg)" }}
      />

      {/* Handwritten Text */}
      <div className="font-caveat text-xl sm:text-2xl font-bold leading-snug text-zinc-900">
        <p>Ideas.</p>
        <p>People.</p>
        <p>Progress.</p>
        <div className="relative inline-block mt-0.5">
          <span>The Crew.</span>
          {/* Green marker underline */}
          <svg
            className="absolute -bottom-1 left-0 w-full h-2 text-[#84CC16]"
            viewBox="0 0 100 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <path d="M 4,6 Q 50,11 96,6" />
          </svg>
        </div>
        <p className="text-right text-lg mt-1 text-zinc-700">:)</p>
      </div>
    </div>
  );
}

/**
 * 3. Hero Monospace Stamp Box
 * ("DIFFERENT ROLES. SAME MISSION. WIRES. PEOPLE. IDEAS.")
 */
export function TelemetryStampBox() {
  return (
    <div className="inline-block border border-zinc-700/80 bg-[#121215] px-3.5 py-2 select-none font-mono text-[11px] tracking-wider text-zinc-300">
      <div className="font-semibold text-zinc-400">
        DIFFERENT ROLES. SAME MISSION.
      </div>
      <div className="font-bold text-[#FF5200] mt-0.5 tracking-widest">
        WIRES. PEOPLE. IDEAS.
      </div>
    </div>
  );
}

/**
 * 4. Taped Quote Index Card (Bottom of page)
 * ("Good things happen when curious people build together. — ZIGBEE CREW")
 */
export function TapedBottomQuote() {
  return (
    <div 
      className="relative max-w-xl mx-auto bg-[#18181C] border border-[#2B2B32] p-4 sm:p-5 shadow-[0_15px_35px_rgba(0,0,0,0.9)] select-none text-center"
      style={{ transform: "rotate(-0.5deg)" }}
    >
      {/* Top-Right Masking Tape */}
      <div 
        className="absolute -top-3 -right-3 w-12 h-5 bg-[#E6D7B8]/75 backdrop-blur-[1px] shadow-sm border-t border-b border-black/10 z-10"
        style={{ transform: "rotate(25deg)" }}
      />
      {/* Bottom-Left Masking Tape */}
      <div 
        className="absolute -bottom-3 -left-3 w-12 h-5 bg-[#E6D7B8]/75 backdrop-blur-[1px] shadow-sm border-t border-b border-black/10 z-10"
        style={{ transform: "rotate(-20deg)" }}
      />

      <p className="font-caveat text-xl sm:text-2xl text-zinc-200 tracking-wide">
        &ldquo;Good things happen when curious people build together.&rdquo;
      </p>
      <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500 mt-1 font-bold">
        &mdash; ZIGBEE CREW
      </p>
    </div>
  );
}
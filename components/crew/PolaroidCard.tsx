// File: components/crew/PolaroidCard.tsx
import React from "react";
import Image from "next/image";
import { User, ArrowUpRight } from "lucide-react";
import { PolaroidMember } from "@/types/crew";
import { getCrewPhoto } from "@/lib/crew-images";

interface PolaroidCardProps {
  member: PolaroidMember;
  tiltDeg?: number;
  size?: "md" | "sm";
}

/**
 * Clean official LinkedIn SVG
 */
function LinkedinIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.65-1.66 1.66 1.66 0 0 0-1.65-1.66" />
    </svg>
  );
}

export function PolaroidCard({ member, tiltDeg = 0, size = "md" }: PolaroidCardProps) {
  const privatePhoto = getCrewPhoto(member.id);
  const isSmall = size === "sm";

  return (
    <div
      className="group relative flex flex-col items-center select-none transition-all duration-300 ease-out hover:-translate-y-1.5 hover:z-30 cursor-pointer"
      style={{
        transform: `rotate(${tiltDeg}deg)`,
      }}
    >
      {/* ------------------------------------------------------------------- */}
      {/* 1. THE POLAROID FRAME                                               */}
      {/* ------------------------------------------------------------------- */}
      <div
        className={`relative bg-[#F2EFEB] shadow-[0_8px_18px_rgba(0,0,0,0.65)] group-hover:shadow-[0_20px_35px_rgba(0,0,0,0.95)] border border-black/10 group-hover:border-[#84CC16]/70 rounded-[2px] transition-all duration-300 ${
          isSmall ? "w-[105px] min-[380px]:w-[114px] sm:w-[126px] p-1.5 min-[380px]:p-2 pb-2.5 sm:pb-3" : "w-[136px] min-[380px]:w-[150px] sm:w-44 p-2.5 min-[380px]:p-3 pb-3.5 sm:pb-4"
        }`}
      >
        {/* Real Masking Tape with tension flex on hover */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 bg-[#E6D7B8]/85 backdrop-blur-[1px] shadow-[0_1px_3px_rgba(0,0,0,0.25)] border-t border-b border-black/10 z-20 transition-transform duration-300 group-hover:scale-x-105 ${
            isSmall ? "-top-2.5 w-10 h-4.5" : "-top-3 w-14 h-6"
          }`}
          style={{ transform: "rotate(-1.5deg)" }}
        />

        {/* The Photo Square */}
        <div className="relative w-full aspect-square bg-[#1B1B1E] flex items-center justify-center overflow-hidden border border-black/10 group-hover:brightness-105 transition-all">
          {privatePhoto ? (
            <Image
              src={privatePhoto}
              alt={member.name}
              fill
              placeholder="blur"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : member.photoUrl ? (
            <Image
              unoptimized
              src={member.photoUrl}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <User
              className={`text-zinc-500 stroke-[1.2] transition-colors duration-300 group-hover:text-zinc-400 ${
                isSmall ? "w-10 h-10" : "w-16 h-16"
              }`}
            />
          )}

          {/* "Say hi ↗" Hover Badge (on larger cards) */}
          {!isSmall && member.linkedinUrl && (
            <a
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 bg-[#0E0E10]/90 hover:bg-[#0A66C2] text-white border border-zinc-700/80 px-2 py-1 rounded flex items-center gap-1 text-[10px] font-mono tracking-wider font-semibold shadow-lg z-10"
            >
              <LinkedinIcon className="w-2.5 h-2.5 fill-current" />
              <span>Say hi</span>
              <ArrowUpRight className="w-2.5 h-2.5 stroke-[2.5]" />
            </a>
          )}
        </div>

        {/* The Polaroid "Chin" Text */}
        <div className="mt-2 text-center">
          <h3
            className={`text-zinc-900 font-sans font-bold tracking-tight leading-tight truncate group-hover:text-black ${
              isSmall ? "text-[11px]" : "text-xs sm:text-sm"
            }`}
          >
            {member.name}
          </h3>
          <p
            className={`font-mono font-bold uppercase tracking-wider text-zinc-600 truncate group-hover:text-zinc-800 ${
              isSmall ? "text-[9px] mt-0.5" : "text-[10px] sm:text-[11px] mt-1"
            }`}
          >
            {member.role}
          </p>
        </div>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* 2. LINKEDIN BUTTON BENEATH THE POLAROID                            */}
      {/* ------------------------------------------------------------------- */}
      {member.linkedinUrl && (
        <a
          href={member.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} LinkedIn`}
          className={`rounded bg-[#1A1A1E] hover:bg-[#0A66C2] border border-zinc-700/80 hover:border-[#0A66C2] flex items-center justify-center text-zinc-300 hover:text-white transition-all duration-200 shadow-md hover:scale-110 hover:shadow-[0_0_12px_rgba(10,102,194,0.5)] ${
            isSmall ? "mt-2 w-5 h-5" : "mt-2.5 w-6 h-6"
          }`}
        >
          <LinkedinIcon className={isSmall ? "w-2.5 h-2.5 fill-current" : "w-3 h-3 fill-current"} />
        </a>
      )}
    </div>
  );
}
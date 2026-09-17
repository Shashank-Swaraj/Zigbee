// File: components/crew/FacultyCard.tsx
import React from "react";
import Image from "next/image";
import { User } from "lucide-react";
import { FacultyAdvisor } from "@/types/crew";

interface FacultyCardProps {
  advisor: FacultyAdvisor;
  tiltDeg?: number;
}

/**
 * Clean inline LinkedIn SVG
 */
function LinkedinIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
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

export function FacultyCard({ advisor, tiltDeg = 0 }: FacultyCardProps) {
  return (
    <div
      className="relative flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 bg-[#F2EFEB] text-zinc-900 p-4 sm:p-5 shadow-[0_15px_30px_rgba(0,0,0,0.85)] border border-black/10 rounded-[2px] select-none transition-transform duration-300 hover:scale-[1.01] hover:z-20 max-w-lg w-full"
      style={{ transform: `rotate(${tiltDeg}deg)` }}
    >
      {/* Masking Tape on Top-Left Corner */}
      <div 
        className="absolute -top-3 -left-3 w-14 h-5 bg-[#E6D7B8]/85 backdrop-blur-[1px] shadow-sm border-t border-b border-black/10 z-10"
        style={{ transform: "rotate(-25deg)" }}
      />

      {/* Faculty Portrait / Silhouette Box */}
      <div className="relative w-28 h-36 sm:w-32 sm:h-40 bg-[#1B1B1E] flex-shrink-0 flex items-center justify-center overflow-hidden border border-black/10">
        {advisor.photoUrl ? (
          <Image
            unoptimized
            src={advisor.photoUrl}
            alt={advisor.name}
            fill
            className="object-cover"
          />
        ) : (
          <User className="w-16 h-16 text-zinc-500 stroke-[1.2]" />
        )}
      </div>

      {/* Faculty Credentials & Details */}
      <div className="flex-1 text-center sm:text-left flex flex-col justify-between h-full py-1">
        <div>
          <h3 className="font-sans font-bold text-base sm:text-lg text-zinc-900 tracking-tight leading-snug">
            {advisor.name}
          </h3>
          <p className="font-sans font-semibold text-xs sm:text-sm text-zinc-700 mt-0.5">
            {advisor.role}
          </p>
          <div className="mt-2 space-y-0.5 font-mono text-[10px] sm:text-[11px] text-zinc-600 leading-tight">
            <p>{advisor.department}</p>
            <p>{advisor.university}</p>
          </div>
        </div>

        {/* LinkedIn Button */}
        {advisor.linkedinUrl && (
          <div className="mt-3 sm:mt-4 flex justify-center sm:justify-start">
            <a
              href={advisor.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${advisor.name} LinkedIn`}
              className="w-6 h-6 rounded bg-[#1A1A1E] hover:bg-[#0A66C2] border border-zinc-700/80 flex items-center justify-center text-zinc-300 hover:text-white transition-all duration-200 shadow-md"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
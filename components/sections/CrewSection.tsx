// File: components/sections/CrewSection.tsx
import React from "react";
import { getCrewRoster } from "@/lib/crew";
import { PolaroidCard } from "@/components/crew/PolaroidCard";
import { FacultyCard } from "@/components/crew/FacultyCard";
import { 
  TapedLabel, 
  TornParchmentNote, 
  TelemetryStampBox, 
  TapedBottomQuote 
} from "@/components/crew/ScrapbookDecorations";
import { 
  Code, 
  Pencil, 
  Camera, 
  Megaphone, 
  Heart, 
  Globe 
} from "lucide-react";

export async function CrewSection() {
  // Fetch data on the server via our repository
  const roster = await getCrewRoster();

  // Helper to map icon types to Lucide components with matching accent colors
  const getPodIcon = (type: string) => {
    switch (type) {
      case "code":
        return <Code className="w-4 h-4 text-[#84CC16]" strokeWidth={2.5} />;
      case "pencil":
        return <Pencil className="w-4 h-4 text-[#FF5200]" strokeWidth={2.5} />;
      case "camera":
        return <Camera className="w-4 h-4 text-[#06B6D4]" strokeWidth={2.5} />;
      case "megaphone":
        return <Megaphone className="w-4 h-4 text-[#FACC15]" strokeWidth={2.5} />;
      case "heart":
        return <Heart className="w-4 h-4 text-[#EF4444]" strokeWidth={2.5} />;
      default:
        return <Code className="w-4 h-4 text-zinc-400" />;
    }
  };

  return (
    <section 
      id="crew" 
      className="w-full bg-[#08080A] text-[#F4F4F5] pt-14 pb-32 sm:pb-24 scroll-mt-16 relative overflow-x-clip xl:overflow-hidden border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-20">

        {/* ================================================================= */}
        {/* 1. TOP ZONE: HERO HEADLINE + LEADERSHIP + TORN CORNER NOTE        */}
        {/* ================================================================= */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start mb-5">
          
          {/* Left Hero Column (Index, Title, Stamp) */}
          <div className="xl:col-span-3 space-y-5 lg:-ml-10">
            {/* Tag */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#84CC16] font-bold">
                04. CREW
              </span>
              <div className="h-[2px] w-12 bg-[#84CC16]" />
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl min-[400px]:text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[0.95] break-words">
              SAME<br />
              PEOPLE.<br />
              <span className="text-[#84CC16]">
                BIGGER<br />
                CURIOSITY.
              </span>
            </h2>

            {/* Monospace Stamp Box */}
            <div className="pt-2">
              <TelemetryStampBox />
            </div>
          </div>

          {/* Center Column: Leadership Polaroids */}
          <div className="xl:col-span-7 space-y-4">
            {/* Leadership Header Bar */}
            <div className="flex items-center gap-4 border-b border-zinc-800/80 pb-3">
              <TapedLabel text="LEADERSHIP" tilt={-1} />
              
              {/* Cursive note with arrow */}
              <div className="hidden sm:flex items-center gap-2 font-caveat text-lg text-zinc-400 select-none pl-2">
                <span>The real energy behind the chaos. :)</span>
                <svg className="w-8 h-4 text-zinc-500" viewBox="0 0 32 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M 2,4 Q 16,14 30,12" strokeLinecap="round" />
                  <path d="M 24,14 L 30,12 L 26,8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* 4 Leadership Polaroids */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 pt-2 justify-items-center">
              {roster.leadership.map((leader, index) => {
                const tilts = [-1, 1, -0.5, 1.5];
                return (
                  <PolaroidCard
                    key={leader.id}
                    member={leader}
                    tiltDeg={tilts[index % tilts.length]}
                  />
                );
              })}
            </div>
          </div>

          {/* Right Column: Torn Parchment Note */}
          <div className="hidden xl:flex xl:col-span-2 justify-center xl:justify-end pt-4 xl:pt-0 xl:translate-x-16">
            <TornParchmentNote />
          </div>

        </div>

        {/* ================================================================= */}
        {/* 2. MIDDLE ZONE: TEAM LEADS                                        */}
        {/* ================================================================= */}
        <div className="space-y-8 pt-6 border-t border-zinc-900">
          
          {/* Section Header */}
          <div className="flex items-center gap-4">
            <TapedLabel text="TEAM LEADS" tilt={-1} />
            <div className="h-[1px] flex-1 bg-zinc-800/80" />
          </div>

          {/* All 5 Pods — Clean Equal Distribution on desktop, responsive grid on smaller screens */}
          <div className="grid grid-cols-1 min-[520px]:grid-cols-2 lg:grid-cols-3 xl:flex xl:items-stretch gap-y-10 xl:gap-y-0 xl:w-[calc(100%+8rem)]">
            {roster.teams.map((pod, index) => (
              <div 
                key={pod.id} 
                className={`space-y-4 px-2 sm:px-3 flex-1 flex flex-col items-center ${
                  index === 0 ? "xl:-ml-28" : ""
                } ${
                  index < roster.teams.length - 1 ? "xl:border-r xl:border-zinc-800/40" : ""
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center justify-center gap-2 pb-1 select-none">
                  {getPodIcon(pod.iconType)}
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-200 whitespace-nowrap">
                    {pod.title}
                  </span>
                </div>

                {/* 2 Polaroids Side by Side */}
                <div className="flex items-start justify-center gap-2.5">
                  {pod.members.map((member, mIdx) => {
                    const tilts = [-0.8, 0.8];
                    return (
                      <PolaroidCard
                        key={member.id}
                        member={member}
                        tiltDeg={tilts[mIdx % tilts.length]}
                        size="sm"
                      />
                    );
                  })}
                </div>

                {/* Batman scribe under Technical */}
                {pod.key === "TECHNICAL" && (
                  <div className="pt-2 pl-2 text-left font-caveat text-sm sm:text-base text-zinc-300 select-none w-full">
                    <div className="flex items-start justify-center sm:justify-start gap-1 ml-4 xl:ml-20">
                      <svg className="w-5 h-8 text-[#84CC16] -rotate-12 mt-0.5 flex-shrink-0" viewBox="0 0 24 32" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M 18,28 Q 6,18 10,4" strokeLinecap="round" />
                        <path d="M 4,10 L 10,4 L 16,10" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div>
                        <p className="leading-tight">Gotham has Batman.</p>
                        <span className="relative inline-block text-white font-bold">
                          We have a Tech Lead.
                          <svg className="absolute -bottom-1 left-0 w-full h-1.5 text-[#84CC16]" viewBox="0 0 100 8" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M 2,4 Q 50,7 98,3" strokeLinecap="round" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

        {/* ================================================================= */}
        {/* 3. BOTTOM ZONE: FACULTY ADVISORS                                  */}
        {/* ================================================================= */}
        <div className="space-y-6 pt-6 border-t border-zinc-900 mb-5">
          
          {/* Section Header */}
          <div className="flex items-center gap-4">
            <TapedLabel text="FACULTY" tilt={-1} />
            <div className="h-[1px] flex-1 bg-zinc-800/80" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Cursive Note */}
            <div className="lg:col-span-2 font-caveat text-xl sm:text-2xl text-zinc-300 leading-tight select-none">
              <span>Same curiosity.</span><br />
              <span className="text-white font-bold">More perspective.</span>
              <svg className="w-10 h-6 text-[#84CC16] mt-1 rotate-45 lg:rotate-0 origin-left transition-transform" viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M 4,6 Q 20,20 36,12" strokeLinecap="round" />
                <path d="M 28,12 L 36,12 L 32,6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* The 2 Wide Faculty Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
              {roster.faculty.map((advisor, index) => {
                const tilts = [-0.5, 0.5];
                return (
                  <FacultyCard
                    key={advisor.id}
                    advisor={advisor}
                    tiltDeg={tilts[index % tilts.length]}
                  />
                );
              })}
            </div>

            {/* Right Cursive Note */}
            <div className="lg:col-span-2 font-caveat text-xl sm:text-2xl text-zinc-300 leading-tight select-none text-left lg:text-right">
              <span>Guides the chaos.</span><br />
              <span className="relative inline-block text-white font-bold">
                Keeps us grounded. :)
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#84CC16]" viewBox="0 0 100 10" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M 4,5 Q 50,9 96,4" strokeLinecap="round" />
                </svg>
              </span>
            </div>

          </div>
        </div>

        {/* ================================================================= */}
        {/* 4. FOOTER & TELEMETRY                                             */}
        {/* ================================================================= */}
        <div className="pt-6 sm:pt-12 space-y-8 sm:space-y-12">
          
          {/* Taped Index Quote Card */}
          <TapedBottomQuote />

          {/* Bottom Telemetry Readout */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-zinc-900 pt-8 font-mono text-xs text-zinc-500 select-none">
            
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-zinc-400 stroke-[1.5]" />
              <div className="space-y-0.5 tracking-wider text-[11px] text-zinc-400">
                <p>REAL DEVICES.</p>
                <p>REAL PEOPLE.</p>
                <p>REAL PROGRESS.</p>
              </div>
            </div>

            <div className="text-center sm:text-right space-y-0.5 text-[11px] tracking-widest text-zinc-500">
              <p>BUILD &bull; LEARN &bull; CONNECT &bull; REPEAT</p>
              <p className="text-zinc-600 font-bold">ZIGBEE.JU</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
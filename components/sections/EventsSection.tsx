"use client";

import React from "react";
import Image from "next/image";
import { upcomingEvents } from "@/data/events";
import { generateGoogleCalendarUrl } from "@/lib/calendar";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  ArrowUpRight, 
  Download, 
  Globe 
} from "lucide-react";

export function EventsSection() {
  const event1 = upcomingEvents[0];
  const event2 = upcomingEvents[1];

  return (
    <section id="events" className="w-full border-t border-[#222226] bg-[#0E0E10] py-[40px] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. SECTION HEADER + TAPED TERMINAL CARD                                   */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 pb-0 lg:-ml-10">
          
          {/* Left: Section Titles */}
          <div className="space-y-4 max-w-2xl">
            {/* Tag Badge */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#84CC16] font-bold">
                03. EVENTS
              </span>
              <div className="h-[2px] w-12 bg-[#84CC16]"></div>
            </div>

            {/* Main Headline */}
            <h2 className="mb-0 text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.05]">
              UPCOMING <br />
              <span className="font-sedgwick text-[#84CC16] tracking-normal lowercase text-5xl sm:text-6xl lg:text-7xl font-normal">
                events.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="font-caveat  text-xs sm:text-sm text-zinc-400 leading-relaxed">
              SOMETHING TELLS ME THIS’LL WORK.
            </p>
          </div>

          {/* Center/Right: Cursive Note & Taped Terminal Card */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 self-end lg:self-start">
            
            {/* Handwritten note: good events better people :) */}
            <div className="font-caveat text-xl sm:text-2xl text-zinc-300 leading-tight -rotate-3 text-center sm:text-right pt-2 select-none">
              <span>good events</span><br />
              <span className="relative inline-block text-white">
                better people. :)
                {/* Green marker stroke */}
                <svg className="absolute -bottom-1.5 left-0 w-full h-2.5 text-[#84CC16]" viewBox="0 0 100 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M 4,6 Q 40,11 75,5 T 98,7" />
                </svg>
              </span>
            </div>

            {/* Photorealistic Taped Terminal Card (Image 2 Asset) */}
            <div className="relative w-[260px] sm:w-[290px] aspect-[276/148] rotate-[1.5deg] hover:rotate-0 transition-transform duration-300 drop-shadow-[0_15px_25px_rgba(0,0,0,0.85)] select-none">
              <Image
                unoptimized
                src="/images/terminal-note.png"
                alt="Ideas People Hardware Terminal Note"
                fill
                className="object-contain pointer-events-none"
                priority
              />

              {/* Handwritten reminder underneath */}
              <div className="absolute -bottom-10 right-0 sm:-right-2 font-caveat text-sm sm:text-base text-zinc-300 leading-tight pointer-events-none whitespace-nowrap select-none">
                <span>
                  mark your calendar.<br />
                  <span className="text-zinc-400 text-xs sm:text-sm">(or don&apos;t. we&apos;ll remind you.)</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. TWO-CARD DOSSIER GRID (CARD 1: CREAM // CARD 2: DARK TACTICAL)          */}
        {/* ========================================================================= */}
        <div className="mt-0 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-stretch">
          
          {/* ----------------------------------------------------------------------- */}
          {/* CARD 01: CREAM TORN PAPER DOSSIER (TALENT-SURGE 2.0 / GREEN THEME)      */}
          {/* ----------------------------------------------------------------------- */}
          {event1 && (
            <div className="relative w-full rounded-none select-none rotate-[-0.5deg] transition-transform duration-500 ease-out hover:scale-[1.018]">
              
              {/* Paper Canvas Backdrop */}
              <div className="absolute inset-0 -z-10 drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)]">
                <Image
                  unoptimized
                  src="/images/event-paper-cream.png"
                  alt="Cream Torn Paper Sheet"
                  fill
                  className="object-fill pointer-events-none"
                  priority
                />
              </div>

              {/* Inner Live Content */}
              <div className="relative p-6 sm:p-9 text-[#18181B] flex flex-col justify-between min-h-[580px] z-10">
                
                {/* Top Row: Tag Badge + Handwritten Board Note */}
                <div className="flex items-start justify-between gap-4">
                  {/* Neon Green Tag */}
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-xs font-black tracking-wider text-black bg-[#84CC16] px-2.5 py-0.5 uppercase shadow-xs">
                      {event1.badgeText || "LOCKED IN //"}
                    </span>
                    <span className="font-mono text-zinc-700 text-xs font-bold">{"///"}</span>
                  </div>

                  {/* Cursive Note */}
                  <div className="font-caveat text-sm sm:text-base text-zinc-900 leading-tight text-right -rotate-2">
                    <span>{event1.handwrittenNote || "Bring your board. We'll figure it out. :)"}</span>
                  </div>
                </div>

                {/* 2-Column Middle Split: Left Details vs Right Tilted Poster */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start my-6">
                  
                  {/* Left Column (Details + Metadata) */}
                  <div className="sm:col-span-7 space-y-4">
                    {/* Title */}
                    <div>
                      <h3 className="font-black text-3xl sm:text-4xl tracking-tight text-[#111114] uppercase leading-[0.95]">
                        TALENT-<br />
                        <span className="font-sedgwick text-[#65A30D] lowercase text-4xl sm:text-5xl font-normal">
                          surge 2.0
                        </span>
                      </h3>
                      {event1.subtitle && (
                        <div className="font-mono text-[10px] sm:text-[11px] font-black tracking-wider text-zinc-800 uppercase mt-2">
                          {event1.subtitle}
                        </div>
                      )}
                    </div>

                    {/* Metadata Telemetry */}
                    <div className="space-y-1.5 font-mono text-xs font-bold text-zinc-800 pt-1">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-[#65A30D]" />
                        <span>{event1.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#65A30D]" />
                        <span>{event1.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#65A30D]" />
                        <span>{event1.venue}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-mono text-[11px] sm:text-xs text-zinc-700 leading-relaxed pt-1">
                      {event1.description}
                    </p>
                  </div>

                  {/* Right Column (Tilted Framed Poster) */}
                  <div className="sm:col-span-5 flex justify-center sm:justify-end">
                    <div className="relative w-[180px] sm:w-[220px] aspect-[3/4] bg-[#0E0E10] border-0 p-1 shadow-2xl rotate-[3deg] hover:rotate-0 transition-transform duration-300">
                      
                      {/* Translucent Scotch Tape on Top */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-5 bg-white/40 border border-white/30 backdrop-blur-xs rotate-[-2deg] z-20 pointer-events-none shadow-xs"></div>
                      
                      {/* Real Poster Image */}
                      <div className="relative w-full h-full overflow-hidden">
                        <Image
                          unoptimized
                          src="/images/talent-surge-poster.png"
                          alt="Talent-Surge 2.0 Poster"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom Row: Action CTAs + Rubber Stamp */}
                <div className="space-y-4 pt-4 border-t border-zinc-700/30">
                  {/* Action Buttons Row */}
                  <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs font-bold">
                    
                    {/* 1. Register Button */}
                    <a
                      href={event1.registrationUrl || "https://instagram.com/zigbee_ju"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-[#84CC16] hover:bg-[#72b312] text-black font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md transition-colors"
                    >
                      <span>REGISTER NOW</span>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
                    </a>

                    {/* 2. Download Brochure */}
                    <a
                      href={event1.brochureUrl || "#"}
                      className="px-3.5 py-2.5 bg-[#18181B] hover:bg-[#222226] text-white border border-zinc-800 uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>DOWNLOAD BROCHURE</span>
                    </a>

                    {/* 3. Add to Google Calendar */}
                    <a
                      href={generateGoogleCalendarUrl(event1)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2.5 bg-[#18181B] hover:bg-[#222226] text-white border border-zinc-800 hover:border-[#84CC16] uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#84CC16]" />
                      <span>+ GOOGLE CALENDAR</span>
                    </a>

                  </div>

                  {/* Ephemera Bottom Line: Solder text + Rubber Stamp */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="font-caveat text-sm sm:text-base text-zinc-800">
                      solder. deploy. repeat. ★
                    </div>

                    {event1.stampText && (
                      <div className="rotate-[-2deg] border-2 border-[#FF5200] text-[#FF5200] px-2.5 py-0.5 font-mono text-[10px] sm:text-xs font-black tracking-wider uppercase bg-[#FF5200]/10 shadow-xs">
                        [ {event1.stampText} ]
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ----------------------------------------------------------------------- */}
          {/* CARD 02: DARK TACTICAL CLIPBOARD DOSSIER (AGENTIC AI / ORANGE THEME)    */}
          {/* ----------------------------------------------------------------------- */}
          {event2 && (
            <div className="relative w-full rounded-none select-none rotate-[0.5deg] transition-transform duration-500 ease-out hover:scale-[1.018]">
              
              {/* Paper Canvas Backdrop */}
              <div className="absolute inset-0 -z-10 drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)]">
                <Image
                  unoptimized
                  src="/images/event-paper-dark.png"
                  alt="Dark Tactical Clipboard Sheet"
                  fill
                  className="object-fill pointer-events-none"
                  priority
                />
              </div>

              {/* Tape on Top-Right Corner */}
              <div className="absolute top-2 right-60 w-16 h-6 bg-white/20 border border-white/20 rotate-[18deg] z-20 pointer-events-none"></div>

              {/* Inner Live Content */}
              <div className="relative p-6 sm:p-9 text-[#F4F4F5] flex flex-col justify-between min-h-[580px] z-10">
                
                {/* Top Row: Tag Badge + Handwritten Note */}
                <div className="flex items-start justify-between gap-4">
                  {/* Rust Orange Tag */}
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-xs font-black tracking-wider text-white bg-[#FF5200] px-2.5 py-0.5 uppercase shadow-xs">
                      {event2.badgeText || "ON DECK //"}
                    </span>
                    <span className="font-mono text-zinc-600 text-xs font-bold">{"///"}</span>
                  </div>

                  {/* Cursive Note */}
                  <div className="font-caveat text-sm sm:text-base text-zinc-300 leading-tight text-right rotate-1">
                    <span>{event2.handwrittenNote || "code. pizza. hardware. what else?"}</span>
                  </div>
                </div>

                {/* 2-Column Middle Split: Left Details vs Right Tilted Poster */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start my-6">
                  
                  {/* Left Column (Details + Metadata) */}
                  <div className="sm:col-span-7 space-y-4">
                    {/* Title */}
                    <div>
                      <h3 className="font-black text-3xl sm:text-4xl tracking-tight text-white uppercase leading-[0.95]">
                        AGENTIC <br />
                        <span className="font-sedgwick text-[#FF5200] lowercase text-4xl sm:text-5xl font-normal">
                          ai.
                        </span>
                      </h3>
                      {event2.subtitle && (
                        <div className="font-mono text-[10px] sm:text-[11px] font-black tracking-wider text-zinc-400 uppercase mt-2">
                          {event2.subtitle}
                        </div>
                      )}
                    </div>

                    {/* Metadata Telemetry */}
                    <div className="space-y-1.5 font-mono text-xs font-bold text-zinc-300 pt-1">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-[#FF5200]" />
                        <span>{event2.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#FF5200]" />
                        <span>{event2.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#FF5200]" />
                        <span>{event2.venue}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-mono text-[11px] sm:text-xs text-zinc-400 leading-relaxed pt-1">
                      {event2.description}
                    </p>
                  </div>

                  {/* Right Column (Tilted Framed Poster) */}
                  <div className="sm:col-span-5 flex justify-center sm:justify-end">
                    <div className="relative w-[180px] sm:w-[220px] aspect-[3/4] bg-[#0E0E10] border-0 p-1 shadow-2xl rotate-[-2.5deg] hover:rotate-0 transition-transform duration-300">
                      
                      {/* Translucent Scotch Tape on Top */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-5 bg-white/40 border border-white/30 backdrop-blur-xs rotate-[2deg] z-20 pointer-events-none shadow-xs"></div>
                      
                      {/* Real Poster Image */}
                      <div className="relative w-full h-full overflow-hidden">
                        <Image
                          unoptimized
                          src="/images/agentic-ai-poster.png"
                          alt="Agentic AI Workshop Poster"
                          fill
                          className="object-cover"
                        />
                      </div>

                    </div>
                  </div>

                </div>

                {/* Bottom Row: Action CTAs */}
                <div className="space-y-4 pt-4 border-t border-zinc-800">
                  <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs font-bold">
                    
                    {/* 1. Register Button */}
                    <a
                      href={event2.registrationUrl || "https://instagram.com/zigbee_ju"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-[#FF5200] hover:bg-[#e04800] text-white font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md transition-colors"
                    >
                      <span>REGISTER NOW</span>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
                    </a>

                    {/* 2. Download Brochure */}
                    <a
                      href={event2.brochureUrl || "#"}
                      className="px-3.5 py-2.5 bg-[#18181B] hover:bg-[#222226] text-white border border-zinc-700 uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>DOWNLOAD BROCHURE</span>
                    </a>

                    {/* 3. Add to Google Calendar */}
                    <a
                      href={generateGoogleCalendarUrl(event2)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2.5 bg-[#18181B] hover:bg-[#222226] text-white border border-zinc-700 hover:border-[#FF5200] uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#FF5200]" />
                      <span>+ GOOGLE CALENDAR</span>
                    </a>

                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* ========================================================================= */}
        {/* 3. ATMOSPHERIC BOTTOM FOOTER STRIP                                        */}
        {/* ========================================================================= */}
        <div className="mt-0 pt-4 flex flex-col md:flex-row items-center justify-between gap-8 lg:-ml-4">
          
          {/* Left: Framed Lab Photo Taped with Masking Tape */}
          <div className="relative w-56 sm:w-54 aspect-[16/10] bg-[#161619] p-2 border border-zinc-700 shadow-xl rotate-[-1.5deg]">
            {/* Top-Left Beige Tape */}
            <div className="absolute -top-2.5 -left-3 w-12 h-4 bg-[#EADFB7]/80 rotate-[-20deg] shadow-xs z-20 pointer-events-none"></div>
            {/* Bottom-Right Beige Tape */}
            <div className="absolute -bottom-2 -right-3 w-12 h-4 bg-[#EADFB7]/80 rotate-[-15deg] shadow-xs z-20 pointer-events-none"></div>
            
            <div className="relative w-full h-full overflow-hidden grayscale contrast-125">
              <Image
                unoptimized
                src="/images/event-lab-footer.jpg"
                alt="Students in JU-FET Lab"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Center: Handwritten Quote */}
          <div className="text-center md:text-left space-y-1 -mt-14">
            <p className="font-caveat text-xl sm:text-2xl text-zinc-300">
              &ldquo;Good things happen outside the simulator.&rdquo;
            </p>
            <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
              — ZIGBEE CREW
            </div>
          </div>

          {/* Right: Telemetry & Wireframe Globe */}
          <div className="flex items-center gap-6 font-mono text-xs text-zinc-400">
            <div className="hidden sm:block text-right space-y-0.5 text-[11px]">
              <div className="text-zinc-300 font-bold">REAL DEVICES.</div>
              <div>REAL PEOPLE.</div>
              <div className="text-zinc-500">REAL PROGRESS.</div>
            </div>

            <div className="flex items-center gap-3 border-l border-zinc-800 pl-6">
              <Globe className="w-8 h-8 text-zinc-500 stroke-[1.5]" />
              <div className="text-[9px] font-bold text-zinc-500 tracking-widest leading-tight">
                BUILD<br />
                LEARN<br />
                CONNECT<br />
                REPEAT<br />
                <span className="text-zinc-400">{"// ZIGBEE.JU"}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
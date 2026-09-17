// File: components/hero/HeroSidebar.tsx
import React from "react";
import { Radio, Cpu, Network, Zap } from "lucide-react";

const PROTOCOLS = [
  { icon: Radio, label: "802.15.4", active: true },
  { icon: Cpu, label: "ESP32" },
  { icon: Network, label: "MESH" },
  { icon: Zap, label: "EDGE AI" },
];

export function HeroSidebar() {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center gap-9 py-6 border-l border-[#222226] pl-6 select-none">
      {PROTOCOLS.map((p, i) => {
        const Icon = p.icon;
        return (
          <div key={i} className="flex flex-col items-center gap-1.5 group cursor-default">
            <Icon className="w-5 h-5 text-[#FF5200] transition-transform duration-200 group-hover:scale-110" />
            <span className="font-mono text-[9.5px] tracking-wider uppercase font-semibold text-zinc-400 group-hover:text-zinc-200">
              {p.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
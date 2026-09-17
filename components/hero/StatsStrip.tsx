// File: components/hero/StatsStrip.tsx
import React from "react";

const STATS = [
  { value: "150+", label: "BUILDERS", sub: "Active club members" },
  { value: "20+", label: "PROTOTYPES", sub: "Hardware vaults deployed" },
  { value: "2.4GHz", label: "MESH SPEED", sub: "Zigbee & 802.15.4" },
  { value: "100%", label: "HANDS-ON", sub: "Lab & circuit workshops" },
];

export function StatsStrip() {
  return (
    <div className="w-full border-y border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
        {STATS.map((stat, i) => (
          <div key={i} className="p-6 md:p-8 flex flex-col justify-center">
            <span className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-black">
              {stat.value}
            </span>
            <span className="font-mono text-xs font-semibold text-zinc-800 tracking-wider mt-1 uppercase">
              {stat.label}
            </span>
            <span className="font-sans text-xs text-zinc-500 mt-0.5">
              {stat.sub}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
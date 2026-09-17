// File: components/graphics/MarqueeTicker.tsx
import React from "react";

const PROTOCOLS = [
  "MESH-A-THON '25",
  "2.4GHz IEEE 802.15.4",
  "HARDWARE HACKATHONS",
  "ESP32 SMART MESH",
  "EDGE AI & TINYML",
  "ZIGBEE 3.0 PROTOCOLS",
  "MQTT & LORAWAN",
  "JU-FET HARDWARE VAULT",
];

export function MarqueeTicker() {
  return (
    <div className="w-full border-y border-dashed border-zinc-300 bg-zinc-50/80 py-2.5 overflow-hidden select-none">
      <div className="flex w-max animate-marquee space-x-8 font-mono text-xs tracking-widest text-zinc-600 uppercase">
        {[...PROTOCOLS, ...PROTOCOLS, ...PROTOCOLS].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <span className="text-orange-500 font-bold">»</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
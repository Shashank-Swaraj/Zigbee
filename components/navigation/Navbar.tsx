
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Radio, Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href.includes("#")) {
      const targetId = href.split("#")[1];
      const el = document.getElementById(targetId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
        }
        setMobileOpen(false);
    }
  };

  return (
    <header className="w-full border-b border-[#222226] bg-[#0E0E10]/95 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="w-10 h-10 relative flex items-center justify-center">
            <Image
              unoptimized
              src="/images/Zigbee_logo.png"
              alt="Zigbee Logo"
              width={24}
              height={24}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-mono font-extrabold text-base tracking-widest text-white">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs font-semibold tracking-widest text-zinc-400 uppercase">
          {navItems.map((item) => (
            <Link
              key={item.index}
              href={item.href}
              onClick={(e) => handleNavClick(item.href, e)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              <span className="text-zinc-600 mr-1">{item.index}.</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Right Status & Action */}
        <div className="hidden sm:flex items-center gap-4 font-mono">
          <div className="flex items-center gap-2 px-3 py-1 bg-[#1A1A1E] border border-[#2B2B30] rounded-full text-[11px] text-zinc-300 uppercase font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{siteConfig.liveStatus}</span>
          </div>

          <a
            href={siteConfig.links.talentSurge || siteConfig.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#84CC16] hover:bg-[#65A30D] text-[#0E0E10] font-mono text-xs uppercase tracking-wider font-extrabold shadow-[0_0_15px_rgba(132,204,22,0.3)] transition-all rounded-none"
          >
            <Radio className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>JOIN THE MESH</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#222226] bg-[#0E0E10] px-4 py-6 space-y-4 font-mono">
          {navItems.map((item) => (
            <Link
              key={item.index}
              href={item.href}
              onClick={(e) => handleNavClick(item.href, e)}
              className="block text-sm font-semibold tracking-wider text-zinc-300 hover:text-white py-2 border-b border-zinc-900"
            >
              <span className="text-zinc-600 mr-2">{item.index}.</span>
              {item.label}
            </Link>
          ))}
          <div className="pt-4">
            <a
              href={siteConfig.links.talentSurge || siteConfig.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#84CC16] text-[#0E0E10] text-xs font-extrabold uppercase tracking-wider"
            >
              <Radio className="w-4 h-4 stroke-[2.5]" />
              <span>JOIN THE MESH</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
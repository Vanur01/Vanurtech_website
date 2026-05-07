"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const TARGET_REGIONS = [
  { id: "usa", name: "USA", x: 265, y: 210 },
  { id: "can", name: "Canada", x: 195, y: 145 },
  { id: "uk", name: "UK", x: 460, y: 148 },
  { id: "ind", name: "India (HQ)", x: 670, y: 258 },
];
const HUB = TARGET_REGIONS.find((r) => r.id === "ind")!;

export function GlobalTargeting() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative w-full bg-[#0A0014] overflow-hidden flex flex-col items-center pt-10 sm:pt-16 pb-0 font-sans border-t border-blue-900/20">
      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl mx-auto mb-6 sm:mb-10">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md mb-8 mx-auto">
            <Sparkles size={16} className="text-blue-400" />
            <span className="text-blue-300 text-xs sm:text-sm font-medium tracking-wide mb-0.5">Global Reach</span>
          </div>
        </motion.div>
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white tracking-tight">
          Powering Finance Operations <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-blue-300 to-blue-500">Across The Globe</span>
        </motion.h3>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Our finance platform serves businesses in India, USA, UK, and Canada with localized GST, tax compliance, and multi-currency support.
        </motion.p>
      </div>

      <div className="relative w-full max-w-[1000px] h-[280px] sm:h-[420px] lg:h-[480px] mx-auto opacity-90 border-t border-white/2">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at center, rgba(255,255,255,0.2) 2px, transparent 2px)", backgroundSize: "8px 8px", maskImage: "url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')", WebkitMaskImage: "url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')", maskSize: "contain", WebkitMaskSize: "contain", maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat", maskPosition: "center", WebkitMaskPosition: "center", clipPath: "polygon(0 0, 100% 0, 100% 82%, 0 82%)" }} />

        <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid meet">
          {mounted && TARGET_REGIONS.filter((r) => r.id !== "ind").map((region, i) => {
            const cx = (HUB.x + region.x) / 2;
            const cy = Math.min(HUB.y, region.y) - 150;
            const d = `M ${HUB.x} ${HUB.y} Q ${cx} ${cy} ${region.x} ${region.y}`;
            return (
              <g key={region.id}>
                <path d={d} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
                <motion.path d={d} fill="none" stroke="url(#gradient-finance)" strokeWidth="2.5" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 2, delay: i * 0.4, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }} />
              </g>
            );
          })}
          <defs>
            <linearGradient id="gradient-finance" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#93c5fd" stopOpacity="1" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
            <filter id="glow-finance">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <circle cx={HUB.x} cy={HUB.y} r="5" fill="#3b82f6" filter="url(#glow-finance)" />
          <motion.circle cx={HUB.x} cy={HUB.y} r="5" fill="none" stroke="#3b82f6" strokeWidth="2" animate={{ r: [5, 20], opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }} />
          {TARGET_REGIONS.filter((r) => r.id !== "ind").map((region) => (
            <g key={region.id}>
              <circle cx={region.x} cy={region.y} r="4" fill="#93c5fd" filter="url(#glow-finance)" />
              <motion.circle cx={region.x} cy={region.y} r="4" fill="none" stroke="#93c5fd" strokeWidth="1.5" animate={{ r: [4, 15], opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }} />
            </g>
          ))}
        </svg>

        {TARGET_REGIONS.map((region) => (
          <div key={region.id} className="absolute transform -translate-x-1/2 -translate-y-full pb-4 pointer-events-none" style={{ left: `${(region.x / 1000) * 100}%`, top: `${(region.y / 500) * 100}%` }}>
            <div className="px-2.5 py-1 bg-[#001A0D]/80 backdrop-blur-md rounded border border-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
              <span className="text-[10px] md:text-xs text-white uppercase tracking-wider font-semibold whitespace-nowrap">{region.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

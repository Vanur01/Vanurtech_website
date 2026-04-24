"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, MapPin } from "lucide-react";

const TARGET_REGIONS = [
  { id: "usa", name: "USA", x: 190, y: 190 },
  { id: "can", name: "Canada", x: 250, y: 110 },
  { id: "uk", name: "UK", x: 480, y: 150 },
  { id: "ind", name: "India (HQ)", x: 700, y: 260 },
];

const HUB = TARGET_REGIONS.find((r) => r.id === "ind")!; 

export function GlobalTargeting() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative w-full bg-[#0A0014] overflow-hidden flex flex-col items-center pt-24 pb-10 font-sans border-t border-purple-900/20">

      {/* Main Centered Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl mx-auto mb-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-8">
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-purple-300 text-xs sm:text-sm font-medium tracking-wide mb-0.5">
              Global Targeting
            </span>
          </div>
        </motion.div>

        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white tracking-tight max-w-4xl mx-auto"
        >
          Delivering Digital Excellence <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">
            Across The Globe
          </span>
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-400 text-lg sm:text-lg max-w-3xl mx-auto leading-relaxed"
        >
          We engineer scalable SaaS solutions and drive growth for ambitious businesses in India, USA, UK, and Canada through our interconnected global delivery framework.
        </motion.p>
      </div>

      {/* Futuristic Dotted World Map Network Area */}
      <div className="relative w-full max-w-[1000px] h-[500px] sm:h-[600px] mx-auto opacity-90 border-t border-white/[0.02]">
        
        {/* Glow behind the map */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

        {/* The Dotted World Map (CSS radial-gradient clipped by an SVG mask of the world) */}
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at center, rgba(255,255,255,0.2) 2px, transparent 2px)",
            backgroundSize: "8px 8px",
            // We use a reliable transparent world map SVG as a mask to shape our grid dots into continents
            maskImage: "url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')",
            WebkitMaskImage: "url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')",
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
            // Crop the bottom mask further (82%) to completely remove any remaining dots of Antarctica
            clipPath: "polygon(0 0, 100% 0, 100% 82%, 0 82%)",
          }}
        />

        {/* Connecting Curved Lines (SVG Data) */}
        <svg 
          viewBox="0 0 1000 500" 
          className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]" 
          preserveAspectRatio="xMidYMid meet"
        >
          {mounted && TARGET_REGIONS.filter((r) => r.id !== "ind").map((region, i) => {
             // Create a quadratic bezier curve from India to the target
             const cx = (HUB.x + region.x) / 2;
             // Push control point up (smaller y) to create an arc
             const cy = Math.min(HUB.y, region.y) - 150; 
             const d = `M ${HUB.x} ${HUB.y} Q ${cx} ${cy} ${region.x} ${region.y}`;

             return (
               <g key={`connection-${region.id}`}>
                 {/* Trailing thin faded line */}
                 <path 
                   d={d}
                   fill="none"
                   stroke="rgba(255,255,255,0.15)"
                   strokeWidth="1.5"
                   strokeDasharray="4 4"
                 />
                 {/* Glowing animated shooting line over the thin line */}
                 <motion.path 
                   d={d}
                   fill="none"
                   stroke="url(#gradient-line)"
                   strokeWidth="2.5"
                   initial={{ pathLength: 0, opacity: 0 }}
                   whileInView={{ pathLength: 1, opacity: 1 }}
                   viewport={{ once: false, amount: 0.1 }}
                   transition={{ duration: 2, delay: i * 0.4, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
                 />
               </g>
             );
          })}
          <defs>
            <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
            
            {/* Glowing dot filter */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Central Hub Node (India) */}
          <circle cx={HUB.x} cy={HUB.y} r="5" fill="#ec4899" filter="url(#glow)" />
          {/* Animated Ping on Hub */}
          <motion.circle 
             cx={HUB.x} cy={HUB.y} r="5" fill="none" stroke="#ec4899" strokeWidth="2"
             animate={{ r: [5, 20], opacity: [1, 0] }}
             transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />

          {/* Target Nodes */}
          {TARGET_REGIONS.filter((r) => r.id !== "ind").map((region) => (
            <g key={`node-${region.id}`}>
              <circle cx={region.x} cy={region.y} r="4" fill="#a855f7" filter="url(#glow)" />
              <motion.circle 
                cx={region.x} cy={region.y} r="4" fill="none" stroke="#a855f7" strokeWidth="1.5"
                animate={{ r: [4, 15], opacity: [1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
              />
            </g>
          ))}
        </svg>

        {/* HTML Labels overlaid matching the viewBox coords approx. */}
        {/* We use percentage overlays relative to the 1000x500 container. */}
        {TARGET_REGIONS.map((region) => {
          const leftPercent = `${(region.x / 1000) * 100}%`;
          const topPercent = `${(region.y / 500) * 100}%`;
          return (
            <div 
              key={`label-${region.id}`}
              className="absolute transform -translate-x-1/2 -translate-y-full pb-4 pointer-events-none"
              style={{ left: leftPercent, top: topPercent }}
            >
              <div className="px-2.5 py-1 bg-[#120524]/80 backdrop-blur-md rounded border border-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                <span className="text-[10px] md:text-xs text-white uppercase tracking-wider font-semibold whitespace-nowrap">
                  {region.name}
                </span>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}

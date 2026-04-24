"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Palette, MousePointer2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroSection({ onConsultClick }: { onConsultClick?: () => void }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0A0012]">
      {/* Background Layer: The "Design Canvas" */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* 1. Liquid Mesh Gradient (Vibrant UI/UX Feel) */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[1200px] h-[1200px] bg-linear-to-br from-purple-600/20 via-pink-500/10 to-transparent blur-[120px] rounded-full opacity-60"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -60, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[1000px] h-[1000px] bg-linear-to-tr from-cyan-600/20 via-blue-500/10 to-transparent blur-[120px] rounded-full opacity-50"
        />

        {/* 2. Abstract Design Elements (Floating Artboards/Layers) */}
        <div className="absolute inset-0">
          {/* Floating Glass Plate 1 */}
          <motion.div
            animate={{ 
              y: [0, -30, 0],
              rotate: [5, 8, 5],
              x: [0, 10, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] left-[10%] w-64 h-80 bg-white/5 border border-white/10 backdrop-blur-xl rounded-4xl shadow-2xl hidden lg:block"
          >
            <div className="p-6 space-y-4">
               <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30" />
               <div className="w-full h-4 bg-white/10 rounded-full" />
               <div className="w-3/4 h-4 bg-white/10 rounded-full" />
               <div className="grid grid-cols-2 gap-3 mt-8">
                 <div className="h-16 bg-white/5 rounded-2xl" />
                 <div className="h-16 bg-white/5 rounded-2xl" />
               </div>
            </div>
          </motion.div>

          {/* Floating Glass Plate 2 */}
          <motion.div
            animate={{ 
              y: [0, 30, 0],
              rotate: [-5, -8, -5],
              x: [0, -10, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[15%] right-[12%] w-72 h-48 bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2.5rem] shadow-2xl hidden lg:block"
          >
             <div className="p-8 flex items-center justify-center h-full">
                <div className="flex gap-4">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-purple-500/30 bg-purple-500/10 flex items-center justify-center">
                       <div className="w-6 h-6 rounded-full bg-purple-400/20" />
                    </div>
                  ))}
                </div>
             </div>
          </motion.div>

          {/* 3. Animated Design Path (Curved SVG) */}
          <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
            <motion.path 
              d="M -100 500 C 200 300, 800 700, 1100 200 S 1600 500, 1800 300" 
              fill="none" 
              stroke="url(#design-gradient)" 
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
            />
            <defs>
              <linearGradient id="design-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* 4. Interactive Spotlight (Simulated) */}
        <div className="absolute inset-0 z-0 bg-radial-gradient(from_50%_50%_at_50%_50%,transparent_0%,#0A0012_80%)" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-8"
          >
            <Palette size={16} className="text-purple-400" />
            <span className="text-purple-300 text-sm font-medium tracking-wide">
              Elite UI/UX Design Studio in India
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-white tracking-tight"
          >
            User Experience & <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">
               Interface Architects
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            We transform complex ideas into intuitive digital interfaces. From high-fidelity prototypes to scalable design systems, we build for the humans of tomorrow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={onConsultClick}
              className="px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 hover:scale-105 rounded-full text-white font-semibold text-lg transition-all duration-300 shadow-lg shadow-purple-500/25 flex items-center gap-2 tracking-wide"
            >
              Start Designing Now
              <ArrowRight size={20} />
            </button>
            <Link
              href="/projects"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 hover:border-white/30 border border-white/10 rounded-full text-white font-semibold text-lg transition-all duration-300 backdrop-blur-sm tracking-wide"
            >
              Our Design Portfolio
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Subtle Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0A0012] to-transparent pointer-events-none" />
    </section>
  );
}

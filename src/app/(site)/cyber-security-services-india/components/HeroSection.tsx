"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ShieldCheck, ArrowRight, Lock, Activity } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection({ onConsultClick }: { onConsultClick?: () => void }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0A0012]">
      {/* Background Layer: Balanced Digital Fortress */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* 1. Perspective Hexagon Grid (Balanced visibility) */}
        <div 
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='104' viewBox='0 0 60 104' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 17.32v34.64L30 69.28 0 51.96V17.32L30 0z' fill='none' stroke='%23A855F7' stroke-width='1.2'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 104px',
            maskImage: 'radial-gradient(ellipse 65% 55% at 50% 50%, #000 0%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 65% 55% at 50% 50%, #000 0%, transparent 100%)',
          }}
        />

        {/* 2. Scanning Radar Line (Subtle Glow) */}
        <motion.div 
          animate={{ 
            top: ["-10%", "110%"],
            opacity: [0, 0.4, 0]
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-purple-500/60 to-transparent blur-[2px] z-10"
        />

        {/* 3. Moving Data Stream (Balanced Particles) */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(16)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0, x: "50%", y: "50%" }}
              animate={{ 
                scale: [0, 1.4], 
                opacity: [0, 0.45, 0],
                x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`]
              }}
              transition={{ 
                duration: 5 + Math.random() * 5, 
                repeat: Infinity, 
                ease: "easeOut" 
              }}
              className="absolute w-2 h-2 rounded-full bg-purple-500/30 blur-[1px]"
            />
          ))}
        </div>

        {/* 4. Large Abstract Shield Geometry (Refined Wireframe) */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-purple-500/5 rounded-full flex items-center justify-center"
        >
           <div className="w-[600px] h-[600px] border border-pink-500/5 rounded-full flex items-center justify-center animate-pulse">
              <div className="w-[400px] h-[400px] border border-purple-500/10 rounded-full" />
           </div>
        </motion.div>

        {/* 5. Floating "Node" Connections (Balanced) */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]">
          <pattern id="node-grid-balanced" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
             <circle cx="2" cy="2" r="1.5" fill="#A855F7" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#node-grid-balanced)" />
        </svg>

        {/* Main Center Glow (Optimized) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/12 blur-[140px] rounded-full" />
      </div>



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-8"
          >
            <ShieldCheck size={16} className="text-purple-400" />
            <span className="text-purple-300 text-sm font-medium tracking-wide">
              Elite Cyber Defense & Threat Intelligence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-white tracking-tight"
          >
            Build An Impenetrable <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">
              Digital Command Center
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            We deploy military-grade security protocols, AI-driven threat detection, and real-time response frameworks to safeguard your enterprise from global cyber risks.
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
              Secure Your Stack
              <Lock size={20} />
            </button>
            <Link
              href="/projects"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 hover:border-white/30 border border-white/10 rounded-full text-white font-semibold text-lg transition-all duration-300 backdrop-blur-sm tracking-wide flex items-center gap-2"
            >
              <Activity size={20} className="text-purple-400" />
              Live Security Metrics
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Subtle Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0A0012] to-transparent pointer-events-none" />
    </section>
  );
}

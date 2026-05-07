"use client";

import React from "react";
import { Sparkles, ArrowRight, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection({ onConsultClick }: { onConsultClick?: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden bg-[#0B0011]">
      {/* Background Layer - Enhanced for Premium Feel */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Pure Dark Base */}
        <div className="absolute inset-0 bg-[#0B0011]" />

        {/* Digital Grid */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] [background-size:40px_40px] opacity-20"
        />

        {/* Radar Pulses (Real Estate Radar) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`pulse-${i}`}
              initial={{ scale: 0.5, opacity: 0.6 }}
              animate={{ scale: 4, opacity: 0 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                delay: i * 3.3,
                ease: "easeOut",
              }}
              className="absolute w-[200px] md:w-[400px] h-[200px] md:h-[400px] border border-purple-500/10 rounded-full"
            />
          ))}
        </div>

        {/* Floating Data Shards */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`shard-${i}`}
              initial={{
                top: "110%",
                left: `${Math.random() * 100}%`,
                scale: Math.random() * 0.5 + 0.2,
                opacity: 0,
                rotate: 45
              }}
              animate={{
                top: "-10%",
                opacity: [0, 0.4, 0.4, 0],
                rotate: 45 + (Math.random() * 180)
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "linear",
              }}
              className="absolute w-3 h-3 bg-purple-500/10 rounded-sm blur-[1px] shadow-[0_0_15px_rgba(168,85,247,0.2)]"
            />
          ))}
        </div>

        {/* Animated Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-15%] left-[-15%] w-[800px] h-[800px] bg-purple-900/20 blur-[160px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-15%] right-[-15%] w-[800px] h-[800px] bg-indigo-600/10 blur-[160px] rounded-full"
        />
        {/* Visible Blue Touch */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 blur-[160px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/5 backdrop-blur-md mb-8 max-w-max mx-auto"
          >
            <Building2 size={16} className="text-violet-400 shrink-0" />
            <span className="text-violet-300 text-xs sm:text-sm font-medium tracking-wide">
              Real Estate Tech Solutions India
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight text-white tracking-tight px-2 sm:px-0"
          >
            Automate Your Property <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 via-indigo-500 to-blue-500">
              Sales & Lead Pipeline
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0 font-light"
          >
            Empower your real estate firm with advanced property tracking, automated lead follow-ups, and AI-driven agent performance dashboards.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0"
          >
            <button
              onClick={onConsultClick}
              className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-violet-600 to-purple-600 hover:scale-105 rounded-full text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Get a Free Demo
              <ArrowRight size={20} />
            </button>
            <button
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 hover:border-white/30 border border-white/10 rounded-full text-white font-bold text-sm sm:text-base transition-all duration-300 backdrop-blur-sm text-center whitespace-nowrap"
            >
              View Case Studies
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

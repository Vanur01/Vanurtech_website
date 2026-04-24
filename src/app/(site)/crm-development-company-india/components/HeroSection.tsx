"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";

export function HeroSection({ onConsultClick }: { onConsultClick?: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0A0012]">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Sharp Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* CRM Radar Pulses */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`pulse-${i}`}
              initial={{ scale: 0.5, opacity: 0.8 }}
              animate={{ scale: 3, opacity: 0 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeOut",
              }}
              className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] border border-purple-500/30 rounded-full shadow-[0_0_30px_rgba(168,85,247,0.2)_inset]"
            />
          ))}
        </div>

        {/* Floating Data Shards */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(24)].map((_, i) => (
            <motion.div
              key={`shard-${i}`}
              initial={{ 
                top: "110%", 
                left: `${Math.random() * 100}%`, 
                scale: Math.random() * 0.8 + 0.2,
                opacity: 0,
                rotate: 45
              }}
              animate={{
                top: "-10%",
                opacity: [0, 0.8, 0.8, 0],
                rotate: 45 + (Math.random() * 180)
              }}
              transition={{
                duration: 12 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 8,
                ease: "linear",
              }}
              className={`absolute w-4 h-4 rounded-sm blur-[0.5px] ${i % 3 === 0 ? 'bg-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.6)]' : i % 3 === 1 ? 'bg-pink-500/20 shadow-[0_0_15px_rgba(236,72,153,0.5)]' : 'bg-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.5)]'}`}
            />
          ))}
        </div>

        {/* Dynamic Glows */}
        <div className="absolute top-0 left-[20%] w-[500px] h-[500px] bg-purple-700/40 blur-[130px] rounded-full animate-pulse" />
        <div className="absolute top-0 right-[20%] w-[500px] h-[500px] bg-pink-700/30 blur-[130px] rounded-full animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-8"
          >
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-purple-300 text-sm font-medium tracking-wide">
              Leading CRM Solutions in India
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-white tracking-tight"
          >
            CRM Development <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">
              Company in India
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            We build SEO-optimized, fast, and high-converting CRMs for businesses. Get custom CRM development services in India for global clients.
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
              Get Started Today
              <ArrowRight size={20} />
            </button>
            <Link
              href="/projects"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 hover:border-white/30 border border-white/10 rounded-full text-white font-semibold text-lg transition-all duration-300 backdrop-blur-sm tracking-wide"
            >
              View Our Portfolio
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

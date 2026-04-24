"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection({ onConsultClick }: { onConsultClick?: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0A0012]">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Sharp Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Animated Beams (Streaks) */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Vertical Streaks */}
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              initial={{ top: "-20%", left: `${Math.random() * 100}%`, opacity: 0 }}
              animate={{
                top: ["-20%", "120%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear",
              }}
              className={`absolute w-px h-32 bg-linear-to-b from-transparent ${i % 3 === 0 ? 'via-purple-500' : i % 3 === 1 ? 'via-cyan-500' : 'via-blue-500'} to-transparent blur-[1px] shadow-[0_0_8px_rgba(168,85,247,0.4)]`}
            />
          ))}
          {/* Horizontal Streaks */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              initial={{ left: "-20%", top: `${Math.random() * 100}%`, opacity: 0 }}
              animate={{
                left: ["-20%", "120%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2.5 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear",
              }}
              className={`absolute h-px w-40 bg-linear-to-r from-transparent ${i % 2 === 0 ? 'via-pink-500' : 'via-indigo-500'} to-transparent blur-[1px] shadow-[0_0_8px_rgba(236,72,153,0.4)]`}
            />
          ))}
        </div>

        {/* Dynamic Glows */}
        <div className="absolute top-0 left-[20%] w-[500px] h-[500px] bg-purple-600/10 blur-[130px] rounded-full animate-pulse" />
        <div className="absolute top-0 right-[20%] w-[500px] h-[500px] bg-pink-600/5 blur-[130px] rounded-full animate-pulse delay-700" />
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
              Results-Driven SEO in India
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-white tracking-tight"
          >
            Top-Rated SEO Agency <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">
              in India for Global Growth
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Scale your organic traffic and skyrocket your ROI with our custom SEO strategies. We help businesses dominate search rankings and capture high-intent leads.
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
              Get Free SEO Audit
              <ArrowRight size={20} />
            </button>
            <Link
              href="/projects"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 hover:border-white/30 border border-white/10 rounded-full text-white font-semibold text-lg transition-all duration-300 backdrop-blur-sm tracking-wide"
            >
              View Case Studies
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

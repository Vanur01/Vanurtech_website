"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection({ onConsultClick }: { onConsultClick?: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0A0012]">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

        {/* Animated Aurora Glows (Vibrant) */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[1000px] h-[1000px] bg-linear-to-br from-purple-600/30 via-cyan-500/20 to-transparent blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -120, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[1000px] h-[1000px] bg-linear-to-tr from-pink-600/30 via-indigo-500/20 to-transparent blur-[120px] rounded-full"
        />

        {/* 3D Perspective Grid */}
        <div className="absolute inset-0 perspective-[1000px] opacity-30">
          <div className="absolute inset-0 [rotateX:60deg] origin-center">
            <div
              className="absolute -inset-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-size-[60px_60px]"
              style={{
                maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
              }}
            />
          </div>
        </div>

        {/* High-Intensity Radar Pulses */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: [0, 0.3, 0],
                scale: [0.5, 2.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: i * 1.2,
                ease: "easeOut",
              }}
              className="absolute w-[800px] h-[800px] border-2 border-purple-400/20 rounded-full shadow-[0_0_50px_rgba(168,85,247,0.2)]"
            />
          ))}
        </div>


      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-8"
          >
            <Smartphone size={16} className="text-purple-400" />
            <span className="text-purple-300 text-sm font-medium tracking-wide">
              Top-Tier Mobile App Development in India
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-white tracking-tight"
          >
            Mobile Application <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">
              Development Experts
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            We build high-performance, user-centric iOS & Android applications. From concept to App Store launch, get end-to-end mobile solutions in India.
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
              Start Your App Journey
              <ArrowRight size={20} />
            </button>
            <Link
              href="/projects"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 hover:border-white/30 border border-white/10 rounded-full text-white font-semibold text-lg transition-all duration-300 backdrop-blur-sm tracking-wide"
            >
              Our App Portfolio
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

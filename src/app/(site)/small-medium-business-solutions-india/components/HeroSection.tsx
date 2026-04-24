"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection({ onConsultClick }: { onConsultClick?: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden bg-[#0B0011]">
      {/* New Background Animation - Fluid Digital Flow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep Gradient Base */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1e1b4b_0%,#0B0011_70%)] opacity-40" />

        {/* Animated Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-violet-600/10 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full"
        />

        {/* Floating Digital Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              scale: 0,
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%"
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
              y: ["0%", "-20%"]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
            className="absolute w-1 h-1 bg-violet-400 rounded-full blur-[1px]"
          />
        ))}

        {/* Moving Grid Lines */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] [background-size:40px_40px]"
          />
          <motion.div
            animate={{ y: [0, 40] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-[linear-gradient(to_bottom,#4f46e50a_1px,transparent_1px)] [background-size:100%_40px]"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/5 backdrop-blur-md mb-8 max-w-max mx-auto"
          >
            <Briefcase size={16} className="text-violet-400 shrink-0" />
            <span className="text-violet-300 text-xs sm:text-sm font-medium tracking-wide">
              Leading SMB Solutions in India
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight text-white tracking-tight px-2 sm:px-0"
          >
            Digital Transformation for{" "}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 via-indigo-500 to-violet-600">
              Small & Medium Businesses
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0"
          >
            Empower your business with custom ERPs, automated billing, and localized digital systems. We help Indian SMEs scale operations with enterprise-grade technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
          >
            <button
              onClick={onConsultClick}
              className="w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-violet-600 to-indigo-600 hover:scale-105 rounded-full text-white font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-violet-500/25 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Get Started Today
              <ArrowRight size={20} />
            </button>
            <Link
              href="/projects"
              className="w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-4 bg-white/5 hover:bg-white/10 hover:border-white/30 border border-white/10 rounded-full text-white font-semibold text-sm sm:text-base transition-all duration-300 backdrop-blur-sm text-center whitespace-nowrap"
            >
              View Our Portfolio
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

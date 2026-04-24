"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection({ onConsultClick }: { onConsultClick?: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden bg-[#0B0011]">
      {/* Solar Energy Background Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep Gradient Base */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e1b4b_0%,#0B0011_80%)] opacity-50" />

        {/* Central Glowing Core */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/10 blur-[150px] rounded-full"
        />

        {/* Energy Rays - Dynamic Lines */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ rotate: i * 30, opacity: 0 }}
            animate={{
              opacity: [0, 0.2, 0],
              scaleX: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "center" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1px] bg-linear-to-r from-transparent via-violet-500/50 to-transparent"
          />
        ))}

        {/* Energy Pulse Rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: [0.5, 2],
              opacity: [0, 0.15, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              delay: i * 4,
              ease: "easeOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-violet-500/30 rounded-full"
          />
        ))}

        {/* Floating Photons (Particles) */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%"
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
              x: [null, (Math.random() - 0.5) * 200 + "px"],
              y: [null, (Math.random() - 0.5) * 200 + "px"]
            }}
            transition={{
              duration: Math.random() * 8 + 7,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 bg-violet-400 rounded-full blur-[0.5px]"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/5 backdrop-blur-md mb-8 max-w-max mx-auto"
          >
            <Sun size={16} className="text-violet-400 shrink-0" />
            <span className="text-violet-300 text-xs sm:text-sm font-medium tracking-wide">
              Smart Solar Management Systems
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight text-white tracking-tight px-2 sm:px-0"
          >
            Powering the Future of{" "}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 via-indigo-500 to-violet-600">
              Renewable Energy in India
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0"
          >
            End-to-end installation tracking, field team reporting, and automated energy calculation tools. We help solar companies digitize workflows for maximum efficiency.
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
              Get Expert Consultation
              <ArrowRight size={20} />
            </button>
            <Link
              href="/projects"
              className="w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-4 bg-white/5 hover:bg-white/10 hover:border-white/30 border border-white/10 rounded-full text-white font-semibold text-sm sm:text-base transition-all duration-300 backdrop-blur-sm text-center whitespace-nowrap"
            >
              See Success Stories
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

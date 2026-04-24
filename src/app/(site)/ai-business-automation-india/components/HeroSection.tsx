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
        
        {/* Fluid AI Aurora & Scanner Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle Cyber Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-size-[60px_60px] mask-[radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />

          {/* Giant Morphing Gradient Orbs (Aurora Effect) */}
          <div className="absolute inset-0 opacity-40">
            <motion.div
              animate={{
                x: ["-10%", "10%", "-5%", "-10%"],
                y: ["-10%", "5%", "15%", "-10%"],
                scale: [1, 1.1, 0.9, 1],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-indigo-600/25 rounded-full blur-[140px] mix-blend-screen"
            />
            <motion.div
              animate={{
                x: ["10%", "-10%", "15%", "10%"],
                y: ["10%", "-15%", "5%", "10%"],
                scale: [0.9, 1.2, 1, 0.9],
              }}
              transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[30%] right-[10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[140px] mix-blend-screen"
            />
            <motion.div
              animate={{
                x: ["0%", "20%", "-15%", "0%"],
                y: ["0%", "15%", "-10%", "0%"],
                scale: [1.1, 0.9, 1.1, 1.1],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[10%] left-[30%] w-[700px] h-[700px] bg-purple-700/25 rounded-full blur-[140px] mix-blend-screen"
            />
          </div>

          {/* AI Scanning System - Wide Sweeping Lasers */}
          <motion.div
            className="absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-purple-400/20 to-transparent shadow-[0_0_15px_rgba(168,85,247,0.2)]"
            animate={{ top: ["-5%", "105%"] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-400/10 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.2)]"
            animate={{ top: ["105%", "-5%"] }}
            transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
          />

          {/* Hexagonal Tech Overlay Pattern (Static) */}
          <div className="absolute inset-0 opacity-[0.01]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'103.92305\' viewBox=\'0 0 60 103.92305\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 103.92305L0 86.60254V51.96152L30 34.64102L60 51.96152V86.60254L30 103.92305ZM30 0L0 17.32051V-17.32051L30 -34.64102L60 -17.32051V17.32051L30 0Z\' fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'1\'/%3E%3C/svg%3E")', backgroundSize: '60px 103.92305px' }} />
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
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-purple-300 text-sm font-medium tracking-wide">
              AI Business Solutions in India
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-white tracking-tight"
          >
            AI-Powered Business <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">
              Automation Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Automate your business with AI-powered software for calling, follow-ups, lead management & marketing insights. Scale faster with intelligent automation.
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

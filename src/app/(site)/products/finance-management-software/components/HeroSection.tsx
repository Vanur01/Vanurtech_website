"use client";

import React from "react";
import { DollarSign, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection({ onConsultClick }: { onConsultClick?: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0A0012]">

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Floating number/currency particles */}
        <div className="absolute inset-0">
          {["₹", "$", "%", "+", "↑", "₹", "$", "↑", "%", "+", "₹", "$", "↑", "%", "+"].map((char, i) => (
            <motion.div
              key={i}
              className="absolute text-blue-400/20 font-mono font-bold select-none"
              style={{
                fontSize: Math.random() * 14 + 10,
                left: `${5 + Math.random() * 90}%`,
                bottom: "-5%",
              }}
              animate={{
                y: [0, -(400 + Math.random() * 300)],
                opacity: [0, 0.6, 0],
                x: [0, (Math.random() - 0.5) * 80],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 8,
                ease: "easeOut",
              }}
            >
              {char}
            </motion.div>
          ))}
        </div>

        {/* Animated bar chart lines */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-3 px-8 opacity-5 pointer-events-none">
          {[40, 65, 45, 80, 55, 90, 60, 75, 50, 85, 70, 95].map((h, i) => (
            <motion.div
              key={i}
              className="bg-blue-400 rounded-t w-6"
              initial={{ height: 0 }}
              animate={{ height: `${h}px` }}
              transition={{ duration: 1, delay: i * 0.1, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
            />
          ))}
        </div>

        {/* Scan line */}
        <motion.div
          className="absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-400/20 to-transparent"
          animate={{ top: ["-5%", "105%"] }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        />

        {/* Pulsing rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-blue-400/15"
              animate={{ scale: [1, 2.8], opacity: [0.3, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: i * 1.6, ease: "easeOut" }}
              style={{ width: 140, height: 140 }}
            />
          ))}
        </div>

        {/* Ambient glows */}
        <div className="absolute top-0 left-[20%] w-[500px] h-[500px] bg-blue-700/15 blur-[140px] rounded-full" />
        <div className="absolute top-0 right-[20%] w-[400px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md mb-8 max-w-max mx-auto"
          >
            <DollarSign size={16} className="text-blue-400 shrink-0" />
            <span className="text-blue-300 text-xs sm:text-sm font-medium tracking-wide">Finance Management Software</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-white tracking-tight"
          >
            Automate Invoicing & Stay <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-blue-300 to-blue-500">
              GST-Compliant Effortlessly
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0"
          >
            Track expenses, automate billing, manage quotations & invoices, and stay fully GST-compliant — all from one powerful finance platform built for Indian businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
          >
            <button
              onClick={onConsultClick}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-blue-500 to-blue-400 hover:scale-105 rounded-full text-white font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 tracking-wide whitespace-nowrap"
            >
              Get a Free Demo
              <ArrowRight size={20} />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

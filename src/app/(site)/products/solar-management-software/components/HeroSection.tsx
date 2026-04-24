"use client";

import React from "react";
import { Sun, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection({ onConsultClick }: { onConsultClick?: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0A0012]">

      {/* ── Background Layer ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* ── Slow rotating sun rays ── */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute w-[700px] h-[700px] opacity-10"
          >
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 origin-bottom"
                style={{
                  width: 2,
                  height: 340,
                  marginLeft: -1,
                  marginTop: -340,
                  transform: `rotate(${i * 30}deg) translateY(-10px)`,
                  background: "linear-gradient(to top, rgba(234,179,8,0.8), transparent)",
                  borderRadius: 4,
                }}
              />
            ))}
          </motion.div>

          {/* Counter-rotating outer rays */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute w-[900px] h-[900px] opacity-5"
          >
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 origin-bottom"
                style={{
                  width: 3,
                  height: 440,
                  marginLeft: -1.5,
                  marginTop: -440,
                  transform: `rotate(${i * 45 + 22}deg)`,
                  background: "linear-gradient(to top, rgba(234,179,8,0.6), transparent)",
                  borderRadius: 4,
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* ── Pulsing sun core glow ── */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-yellow-400/20"
              animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 1.3, ease: "easeOut" }}
              style={{ width: 120, height: 120 }}
            />
          ))}
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-24 h-24 rounded-full bg-yellow-400/10 blur-2xl"
          />
        </div>

        {/* ── Rising energy particles ── */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-yellow-400"
              style={{
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                left: `${10 + Math.random() * 80}%`,
                bottom: "-4%",
                opacity: 0,
              }}
              animate={{
                y: [0, -(300 + Math.random() * 400)],
                opacity: [0, 0.7, 0],
                x: [0, (Math.random() - 0.5) * 60],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 6,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* ── Horizontal scan line ── */}
        <motion.div
          className="absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-yellow-400/20 to-transparent"
          animate={{ top: ["-5%", "105%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Ambient glows */}
        <div className="absolute top-0 left-[20%] w-[500px] h-[500px] bg-yellow-600/15 blur-[140px] rounded-full" />
        <div className="absolute top-0 right-[20%] w-[400px] h-[400px] bg-yellow-500/8 blur-[140px] rounded-full" />
      </div>

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 backdrop-blur-md mb-8 max-w-max mx-auto"
          >
            <Sun size={16} className="text-yellow-400 shrink-0" />
            <span className="text-yellow-300 text-xs sm:text-sm font-medium tracking-wide">
              Solar Management Software
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-white tracking-tight"
          >
            Monitor & Manage Your <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-500">
              Solar Plant Performance
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0"
          >
            Real-time insights, automated alerts, and complete customer & AMC management — all in one powerful solar software platform built for India&apos;s growing solar industry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
          >
            <button
              onClick={onConsultClick}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-yellow-500 to-yellow-400 hover:scale-105 rounded-full text-white font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg shadow-yellow-500/25 flex items-center justify-center gap-2 tracking-wide whitespace-nowrap"
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

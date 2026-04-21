"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, CheckCircle2, Sparkles, Zap, Bot, Cpu } from "lucide-react";

const uspItems = [
  "Automate customer calls & follow-ups",
  "Analyze competitor strategies",
  "Suggest marketing improvements",
  "Improve lead conversion rates",
];

export default function AIUSPSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#0B0011] relative overflow-hidden">
      {/* Intense Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 blur-[140px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/20 blur-[140px] rounded-full pointer-events-none animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-linear-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none" />

      {/* Decorative Grid with higher visibility */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-[0.15] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Side: Content */}
          <div className="w-full lg:w-3/5 text-center lg:text-left flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-6"
            >
              <Sparkles size={16} className="text-purple-400" />
              <span className="text-purple-300 text-xs sm:text-sm font-medium tracking-wide uppercase">
                AI Unique Selling Proposition
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]"
            >
              AI That Works for Your <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-cyan-400">
                Business Growth
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-base sm:text-lg md:text-xl mb-10 max-w-2xl lg:max-w-none leading-relaxed"
            >
              Our AI-powered solutions help businesses streamline operations and achieve exponential growth through intelligent automation.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full max-w-2xl lg:max-w-none">
              {uspItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 group/item p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-purple-500/30 transition-all duration-300 cursor-default backdrop-blur-sm"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center group-hover/item:bg-purple-500/20 group-hover/item:scale-110 group-hover/item:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all">
                    <CheckCircle2 size={18} className="text-purple-400" />
                  </div>
                  <span className="text-gray-200 text-sm sm:text-base md:text-lg font-medium group-hover/item:text-white transition-colors text-left">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Visual Representation */}
          <div className="w-full lg:w-2/5 relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-square max-w-[220px] sm:max-w-[400px] lg:max-w-[500px] mx-auto"
            >
              {/* Central Core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-[150%] h-[150%] bg-purple-600/10 blur-[80px] sm:blur-[100px] rounded-full animate-pulse" />
                <div className="absolute w-48 h-48 sm:w-80 sm:h-80 bg-cyan-500/10 blur-[40px] sm:blur-[60px] rounded-full animate-reverse-spin" />

                <div className="relative z-10 w-14 h-14 sm:w-28 sm:h-28 rounded-xl sm:rounded-3xl bg-linear-to-br from-purple-500 via-pink-500 to-cyan-400 p-[1.5px] sm:p-[2px] shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-500 hover:scale-110">
                  <div className="w-full h-full bg-[#0B0011] rounded-[calc(0.75rem-1.5px)] sm:rounded-[calc(1.5rem-2px)] flex items-center justify-center overflow-hidden relative">
                    <Brain size={24} className="text-white relative z-10 sm:hidden drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
                    <Brain size={44} className="text-white relative z-10 hidden sm:block drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
                    <div className="absolute inset-0 bg-linear-to-t from-purple-500/20 via-transparent to-transparent" />
                  </div>
                </div>
              </div>

              {/* Orbital Icons */}
              {[Sparkles, Zap, Brain, Bot, Cpu].map((Icon, idx) => (
                <motion.div
                  key={idx}
                  className="absolute"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20 + idx * 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                  }}
                >
                  <div
                    className="absolute w-8 h-8 sm:w-14 sm:h-14 rounded-lg sm:rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-125 hover:bg-white/20"
                    style={{
                      left: '50%',
                      top: '10%',
                      transform: 'translateX(-50%)',
                    }}
                  >
                    <Icon size={14} className="text-purple-300 sm:hidden drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                    <Icon size={24} className="text-purple-300 hidden sm:block drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                  </div>
                </motion.div>
              ))}

              {/* Decorative Rings */}
              <div className="absolute inset-6 sm:inset-10 border border-white/5 rounded-full" />
              <div className="absolute inset-12 sm:inset-20 border border-purple-500/10 rounded-full animate-spin-slow" />
              <div className="absolute inset-0 border border-cyan-500/5 rounded-full animate-reverse-spin" />
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        .animate-reverse-spin {
          animation: reverse-spin 45s linear infinite;
        }
      `}</style>
    </section>
  );
}


"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, CheckCircle2, Sparkles, Zap } from "lucide-react";

const uspItems = [
  "Automate customer calls & follow-ups",
  "Analyze competitor strategies",
  "Suggest marketing improvements",
  "Improve lead conversion rates",
];

export default function AIUSPSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#050505] relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Side: Content */}
          <div className="w-full lg:w-3/5 text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-8"
            >
              <Sparkles size={16} className="text-purple-400" />
              <span className="text-purple-300 text-xs sm:text-sm font-medium tracking-wide">
                AI Unique Selling Proposition
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              AI That Works for Your <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-cyan-400">
                Business Growth
              </span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg sm:text-xl mb-10 max-w-4xl leading-relaxed"
            >
              Our AI-powered solutions help businesses streamline operations and achieve exponential growth through intelligent automation.
            </motion.p>

            <div className="space-y-4">
              {uspItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 group/item p-3 rounded-xl hover:bg-white/5 transition-colors cursor-default"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center group-hover/item:bg-purple-500/20 group-hover/item:scale-110 transition-all">
                    <CheckCircle2 size={16} className="text-purple-400" />
                  </div>
                  <span className="text-gray-200 text-lg font-medium group-hover/item:text-white transition-colors">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-16 relative group w-full lg:max-w-4xl"
            >
              {/* Animated Gradient Border */}
              <div className="absolute -inset-px bg-linear-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl blur-xs group-hover:blur-sm transition-all duration-500 opacity-30 group-hover:opacity-60" />
              
              <div className="relative p-8 rounded-3xl bg-[#0E0E0E]/80 backdrop-blur-2xl border border-white/10 overflow-hidden">
                {/* Background Quote Icon */}
                <div className="absolute -top-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Brain size={120} className="text-white" />
                </div>

                <div className="flex gap-4 items-start relative z-10">
                  <div className="mt-1 p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <Zap size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white text-xl md:text-2xl font-semibold leading-tight">
                      "We don&apos;t just build software — we build{" "}
                      <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
                        intelligent systems
                      </span>{" "}
                      that{" "}
                      <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-400">
                        grow your business.
                      </span>"
                    </p>
                  </div>
                </div>

                {/* Subtle scanning light effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              </div>
            </motion.div>
          </div>

          {/* Right Side: Visual Representation */}
          <div className="w-full lg:w-2/5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-square max-w-[500px] mx-auto"
            >
              {/* Central Core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-purple-600/20 blur-[60px] animate-pulse" />
                <div className="relative z-10 w-32 h-32 rounded-3xl bg-linear-to-br from-purple-600 to-cyan-600 p-[2px]">
                  <div className="w-full h-full bg-[#0E0E0E] rounded-[calc(1.5rem-2px)] flex items-center justify-center overflow-hidden relative">
                    <Brain size={48} className="text-white relative z-10" />
                    <div className="absolute inset-0 bg-linear-to-t from-white/10 to-transparent" />
                  </div>
                </div>
              </div>

              {/* Orbital Icons */}
              {[Sparkles, Zap, Brain, Sparkles].map((Icon, idx) => (
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
                    className="absolute w-12 h-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center"
                    style={{
                      left: '50%',
                      top: '10%',
                      transform: 'translateX(-50%)',
                    }}
                  >
                    <Icon size={20} className="text-purple-400" />
                  </div>
                </motion.div>
              ))}

              {/* Decorative Rings */}
              <div className="absolute inset-10 border border-white/5 rounded-full" />
              <div className="absolute inset-20 border border-purple-500/10 rounded-full animate-spin-slow" />
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


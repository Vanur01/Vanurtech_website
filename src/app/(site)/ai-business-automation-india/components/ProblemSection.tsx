"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, XCircle, ArrowRight } from "lucide-react";

export function ProblemSection({ onConsultClick }: { onConsultClick?: () => void }) {
  const problems = [
    "Manual calling and missed follow-ups",
    "No clear visibility of leads and sales",
    "Inefficient marketing strategies",
    "Lack of automation in daily operations"
  ];

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "#0B0011" }}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div>
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-8">
                <Sparkles size={16} className="text-purple-400" />
                <span className="text-purple-300 text-xs sm:text-sm font-medium tracking-wide">
                  The AI Evolution
                </span>
              </div>
            </motion.div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white tracking-tight">
              Struggling to Manage <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">Operations and Follow-Ups?</span>
            </h3>
            <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Our AI-powered solutions eliminate these problems by automating key business processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Struggling Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-10 rounded-[2.5rem] bg-white/2 border border-red-500/10 backdrop-blur-sm relative overflow-hidden group hover:bg-white/5 transition-colors"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl rounded-full" />

              <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                  <XCircle size={22} className="text-red-500" />
                </div>
                Many businesses face challenges like:
              </h4>

              <ul className="space-y-6">
                {problems.map((problem, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 text-gray-400 text-lg group/item transition-colors hover:text-gray-300"
                  >
                    <span className="mt-2.5 w-2 h-2 rounded-full bg-red-500/30 shrink-0 group-hover/item:scale-125 transition-transform" />
                    {problem}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Solution Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group lg:mt-6"
            >
              <div className="absolute -inset-[2px] bg-linear-to-r from-purple-600 via-pink-500 to-purple-600 rounded-[2.6rem] opacity-30 group-hover:opacity-100 blur-[2px] transition-opacity duration-500 animate-pulse" />

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative h-full p-10 rounded-[2.5rem] bg-linear-to-br from-[#12001A] to-[#0B0011] border border-purple-500/20 backdrop-blur-xl overflow-hidden shadow-2xl shadow-purple-500/20 flex flex-col justify-center"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/20 blur-[80px] rounded-full animate-pulse" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-600/10 blur-[80px] rounded-full animate-pulse" />

                <h4 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                    <CheckCircle2 size={24} className="text-purple-400" />
                  </div>
                  The AI Solution:
                </h4>

                <p className="text-gray-200 text-xl leading-relaxed">
                  Our <span className="font-bold text-purple-400">AI-powered systems</span> streamline your operations, providing automated follow-ups, advanced analytics, and strategic insights—saving time and multiplying your revenue.
                </p>
                <div className="mt-8">
                  <button onClick={onConsultClick} className="flex items-center gap-2 px-6 py-3 bg-purple-500/20 border border-purple-500/30 rounded-xl text-purple-300 font-medium hover:bg-purple-500 hover:text-white transition-all duration-300">
                    Discover Automation <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

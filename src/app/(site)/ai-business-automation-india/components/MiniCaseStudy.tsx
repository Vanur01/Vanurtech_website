"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Rocket, Zap } from "lucide-react";

export function MiniCaseStudy() {
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden bg-[#0A0012]">
      {/* Dynamic Glows */}
      <div className="absolute top-0 right-1/3 w-[400px] h-[400px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none animate-pulse" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-5 sm:p-8 md:p-10 rounded-[2.5rem] border border-purple-500/20 bg-[#120524] backdrop-blur-xl relative overflow-hidden shadow-2xl"
        >
          {/* subtle grid background inside the card */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none" />

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-center relative z-10">
            {/* Left Info */}
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-8">
                <Sparkles size={16} className="text-purple-400" />
                <span className="text-purple-300 text-xs sm:text-sm font-medium tracking-wide">
                  Mini Case Study
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                AI Calling & <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-500">CRM Automation</span>
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                We developed a custom AI-powered system for a dynamic business that required scalable logic and automated assistance to handle growth.
              </p>

              <ul className="space-y-4 mb-0">
                {[
                  "Automated customer calls and follow-ups",
                  "Provided real-time sales insights",
                  "Suggested marketing improvements"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i + 0.3 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="p-1.5 rounded-full bg-purple-500/20 text-purple-400">
                      <Zap size={16} />
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right Results */}
            <div className="lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-4 sm:p-6 rounded-3xl bg-linear-to-br from-purple-900/30 to-black/50 border border-purple-500/30 w-full relative"
              >
                <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
                  <Rocket className="text-pink-400" /> The Result
                </h4>

                <div className="flex flex-col gap-2">
                  {[
                    { label: "Lead Conversion", value: "+35%", color: "text-emerald-400", extra: null },
                    { label: "Manual Workload", value: "↓ Less", color: "text-pink-400", extra: null },
                    { label: "Decision-Making", value: "↑ Fast", color: "text-purple-400", extra: null },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="flex items-center justify-between bg-white/5 px-3 py-3 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <span className="text-gray-400 text-xs font-medium leading-tight max-w-[55%]">{stat.label}</span>
                      <span className={`text-base font-bold ${stat.color} flex items-center gap-1 shrink-0`}>
                        {stat.extra}{stat.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, XCircle, ArrowRight } from "lucide-react";

const comparisons = [
  {
    problem: "No visibility into plant performance or energy output",
    solution: "Real-Time Plant Monitoring & Energy Dashboard",
  },
  {
    problem: "Faults go undetected until costly breakdowns occur",
    solution: "Automated Fault Detection & Instant Alerts",
  },
  {
    problem: "Manual AMC tracking leads to missed service visits",
    solution: "Smart AMC & Customer Management System",
  },
  {
    problem: "No clear picture of revenue, ROI, or billing status",
    solution: "Revenue, ROI & Billing Reports at a Glance",
  },
];

export function ProblemSection() {
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden" style={{ backgroundColor: "#0B0011" }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 backdrop-blur-md mb-8 mx-auto lg:mx-0">
              <Sparkles size={16} className="text-yellow-400" />
              <span className="text-yellow-300 text-xs sm:text-sm font-medium tracking-wide">The Solar Evolution</span>
            </div>
          </motion.div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white tracking-tight">
            From <span className="text-gray-500 underline decoration-red-500/30 underline-offset-2">Blind Spots</span> <br className="md:hidden" /> to{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-500">Full Visibility</span>
          </h3>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Stop losing revenue to undetected faults and missed service visits. Our solar software keeps your plants running at peak performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Pain Points */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-10 rounded-[2.5rem] bg-white/2 border border-red-500/10 backdrop-blur-sm relative overflow-hidden hover:bg-white/5 transition-colors"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl rounded-full" />
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-5 sm:mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                <XCircle size={22} className="text-red-500" />
              </div>
              The Pain Points:
            </h4>
            <ul className="space-y-4 sm:space-y-6">
              {comparisons.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 sm:gap-4 text-gray-400 text-base sm:text-lg hover:text-gray-300 transition-colors"
                >
                  <span className="mt-2.5 w-2 h-2 rounded-full bg-red-500/30 shrink-0" />
                  {item.problem}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group mt-0"
          >
            <div className="absolute -inset-[2px] bg-linear-to-r from-yellow-500 via-yellow-400 to-yellow-500 rounded-[2.6rem] opacity-30 group-hover:opacity-100 blur-[2px] transition-opacity duration-500 animate-pulse" />
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative p-6 sm:p-10 rounded-[2.5rem] bg-linear-to-br from-[#12001A] to-[#0B0011] border border-yellow-500/20 backdrop-blur-xl overflow-hidden shadow-2xl shadow-yellow-500/20"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-600/20 blur-[80px] rounded-full animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-500/10 blur-[80px] rounded-full animate-pulse" />
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-5 sm:mb-8 flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-yellow-500/20 flex items-center justify-center border border-yellow-500/40 shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                  <CheckCircle2 size={24} className="text-yellow-400" />
                </div>
                Your Solar Advantage:
              </h4>
              <ul className="space-y-4 sm:space-y-6">
                {comparisons.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + 0.1 * idx }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 sm:gap-4 text-gray-100 text-base sm:text-lg group/item"
                  >
                    <div className="p-2 rounded-xl bg-yellow-500/10 border border-yellow-500/20 group-hover/item:bg-yellow-500/30 group-hover/item:scale-110 group-hover/item:border-yellow-400 transition-all duration-300">
                      <ArrowRight size={18} className="text-yellow-400 group-hover/item:translate-x-1 transition-transform" />
                    </div>
                    <span className="font-bold tracking-tight text-white group-hover/item:text-yellow-300 transition-colors">
                      {item.solution}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

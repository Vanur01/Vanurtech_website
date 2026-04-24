"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, BrainCircuit } from "lucide-react";

export function DifferentiatorSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0B0011]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-10 md:p-14 rounded-[3rem] bg-linear-to-br from-purple-900/40 to-[#0B0011] border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.15)] relative overflow-hidden"
        >
          {/* Inner Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-600/20 blur-[80px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 blur-[80px] rounded-full" />

          <div className="mb-6 inline-flex p-4 rounded-2xl bg-purple-500/20 border border-purple-500/30 text-purple-400">
            <BrainCircuit size={40} />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Why Our AI Solutions Are <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-500">Different</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed mb-6">
            Unlike generic tools, our AI systems are fully customized based on your business workflows and goals.
          </p>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            We don&apos;t just integrate AI — we build intelligent systems that <span className="text-purple-300 font-semibold">understand your business</span> and continuously improve performance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

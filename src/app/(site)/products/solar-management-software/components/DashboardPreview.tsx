"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export function DashboardPreview() {
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden bg-[#0B0011]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-yellow-500/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 backdrop-blur-md mb-4 mx-auto">
            <Sparkles size={14} className="text-yellow-400" />
            <span className="text-yellow-300 text-xs sm:text-sm font-medium tracking-wide">Live Product Preview</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
            See the Dashboard <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-500">
              in Action
            </span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl text-sm sm:text-base">
            A clean, intuitive interface giving you full control over your solar plants, leads, and team — all from one screen.
          </p>
        </motion.div>

        {/* Dashboard image card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          {/* Outer glow ring */}
          <div className="absolute -inset-px rounded-2xl bg-linear-to-r from-yellow-500/30 via-yellow-300/20 to-yellow-500/30 blur-sm pointer-events-none" />

          {/* Browser chrome */}
          <div className="relative rounded-2xl overflow-hidden border border-yellow-500/20 shadow-2xl shadow-yellow-500/10">
            {/* Top bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#161616] border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 flex justify-center overflow-hidden">
                <div className="bg-white/5 border border-white/8 rounded-md px-3 sm:px-4 py-1 text-[9px] sm:text-[11px] text-gray-500 w-auto max-w-[160px] sm:max-w-xs truncate text-center">
                  app.solarsoftware.in/dashboard
                </div>
              </div>
            </div>

            {/* Screenshot */}
            <Image
              src="/images/product/WhatsApp Image 2026-04-21 at 5.21.51 PM.jpeg"
              alt="Solar Management Software — Head Office Dashboard"
              width={1200}
              height={675}
              className="w-full h-auto block"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

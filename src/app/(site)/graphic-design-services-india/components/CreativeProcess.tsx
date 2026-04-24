"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Palette, Rocket, Sparkles } from "lucide-react";

const steps = [
  {
    title: "Discovery & Strategy",
    desc: "We dive deep into your brand's mission, audience, and market positioning.",
    icon: Search,
    color: "text-blue-400",
  },
  {
    title: "Conceptualization",
    desc: "Our creative team brainstorms and develops unique visual concepts tailored to you.",
    icon: PenTool,
    color: "text-purple-400",
  },
  {
    title: "Design & Refinement",
    desc: "We craft pixel-perfect designs and iterate based on your valuable feedback.",
    icon: Palette,
    color: "text-pink-400",
  },
  {
    title: "Launch & Delivery",
    desc: "Final assets delivered in all necessary formats for both digital and print use.",
    icon: Rocket,
    color: "text-emerald-400",
  }
];

export function CreativeProcess() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0014]">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-8">
              <Sparkles size={16} className="text-purple-400" />
              <span className="text-purple-300 text-xs sm:text-sm font-medium tracking-wide mb-0.5">
                Our Workflow
              </span>
            </div>
          </motion.div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">Creative Process</span>
          </h3>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            We follow a structured, collaborative approach to ensure every design project achieves maximum impact and aligns perfectly with your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group text-center"
            >
              {/* Connector line (Desktop - Centered Dashed) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-px z-0 pointer-events-none">
                  <div className="mx-14 w-[calc(100%-7rem)] border-t border-dashed border-purple-500/40" />
                </div>
              )}

              {/* Connector line (Tablet - 2 col grid) */}
              {idx % 2 === 0 && idx < steps.length - 1 && (
                <div className="hidden md:block lg:hidden absolute top-10 left-1/2 w-full h-px z-0 pointer-events-none">
                   <div className="mx-14 w-[calc(100%-7rem)] border-t border-dashed border-purple-500/40" />
                </div>
              )}
              
              <div className="relative z-10 flex flex-col items-center">
                <div className={`w-20 h-20 rounded-4xl bg-[#0A0014] border border-white/10 flex items-center justify-center mb-8 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]`}>
                  <step.icon size={32} className={`${step.color} group-hover:scale-110 transition-transform duration-500`} />
                </div>
                
                <div className="mb-6 flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold ring-4 ring-[#0A0014]">
                  {idx + 1}
                </div>
                
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors tracking-tight">{step.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[240px] mx-auto group-hover:text-gray-300 transition-colors">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Award, 
  Rocket, 
  Zap, 
  HeartHandshake, 
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export default function WhyChooseUs({ onConsultClick }: { onConsultClick?: () => void }) {
  const points = [
    {
      title: "10+ Years Experience",
      desc: "A decade of mastery in delivering robust digital ecosystems.",
      icon: Award,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      borderColor: "group-hover:border-purple-500/50"
    },
    {
      title: "Custom-Built Solutions",
      desc: "No templates. Every line of code is written for your logic.",
      icon: Rocket,
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      borderColor: "group-hover:border-pink-500/50"
    },
    {
      title: "AI Automation",
      desc: "Integrating next-gen AI to eliminate manual overhead.",
      icon: Zap,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      borderColor: "group-hover:border-amber-500/50"
    },
    {
      title: "Dedicated Support",
      desc: "Continuous consultation and strategic technical partnership.",
      icon: HeartHandshake,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      borderColor: "group-hover:border-emerald-500/50"
    },
    {
      title: "Proven Track Record",
      desc: "Reliable execution across diverse global industries.",
      icon: ShieldCheck,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      borderColor: "group-hover:border-blue-500/50"
    }
  ];

  return (
    <section className="py-12 bg-[#0B0011] relative overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-600/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-600/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mb-7 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm mb-6"
          >
            <Sparkles size={14} className="text-purple-400" />
            <span className="text-purple-300 text-xs font-medium tracking-wide">The Vanurtech Edge</span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
            >
              Why Businesses <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-500">Choose Our Expertise</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-base md:text-lg max-w-xl font-light"
            >
              We focus on precision, scalability, and solving real-world business problems through intelligent engineering.
            </motion.p>
          </div>
        </div>

        {/* Scaled-down Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className={`group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 overflow-hidden ${point.borderColor} hover:bg-white/8 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]`}
            >
              {/* Inner Glow Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className={`relative z-10 w-12 h-12 rounded-2xl ${point.bg} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                <point.icon size={24} className={`${point.color} group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]`} />
              </div>

              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors">{point.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{point.desc}</p>
              </div>

              {/* Bottom Accent Beam */}
              <div className="absolute bottom-0 left-4 right-4 h-px bg-linear-to-r from-transparent via-white/20 to-transparent group-hover:via-purple-500/50 transition-all duration-500" />
            </motion.div>
          ))}

          {/* Compact CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="group relative p-6 rounded-2xl border border-purple-500/30 bg-linear-to-br from-purple-600/20 to-transparent backdrop-blur-xl flex flex-col justify-between overflow-hidden"
          >
            {/* Animated Background Shine */}
            <motion.div 
               animate={{ 
                 x: ["-100%", "100%"],
                 opacity: [0, 1, 0]
               }}
               transition={{ 
                 duration: 3, 
                 repeat: Infinity, 
                 ease: "linear" 
               }}
               className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
            />

            <div className="relative z-10">
              <div className="flex items-center gap-2 text-purple-300 text-xs font-bold uppercase tracking-widest mb-3">
                <CheckCircle2 size={14} className="text-purple-400 animate-pulse" />
                <span>Ready to scale</span>
              </div>
              <p className="text-white text-base font-semibold leading-snug">
                Let&apos;s build a solution tailored for your business success.
              </p>
            </div>
            
            <button
              onClick={onConsultClick}
              className="relative z-10 mt-6 w-full py-3 bg-white text-black font-bold rounded-xl text-sm hover:bg-purple-500 hover:text-white transition-all active:scale-95 shadow-lg group-hover:shadow-purple-500/20"
            >
              Partner With Us
            </button>
          </motion.div>
        </div>

        {/* Refined Footer Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-gray-400 text-sm italic text-center md:text-left opacity-60">
            "We don&apos;t just build software we build solutions that solve real business problems."
          </p>
          <div className="flex gap-6 opacity-20 select-none grayscale hover:grayscale-0 hover:opacity-50 transition-all duration-700">
            {[Award, Rocket, Zap].map((Icon, i) => <Icon key={i} size={22} className="text-white" />)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

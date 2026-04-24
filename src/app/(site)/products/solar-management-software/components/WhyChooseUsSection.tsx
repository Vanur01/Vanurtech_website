"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Trophy, Star, Flame, Coffee, Users, CheckCircle2 } from "lucide-react";

const points = [
  {
    title: "Built for Solar Industry",
    desc: "Purpose-built for solar installers, EPC companies, and O&M service providers in India.",
    icon: Trophy,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    borderColor: "group-hover:border-yellow-500/50",
  },
  {
    title: "Real-Time Data & Alerts",
    desc: "Live plant monitoring with instant fault alerts so your team responds before customers notice.",
    icon: Star,
    color: "text-yellow-300",
    bg: "bg-yellow-400/10",
    borderColor: "group-hover:border-yellow-400/50",
  },
  {
    title: "GST & Compliance Ready",
    desc: "Invoicing and billing built to Indian GST standards with automated tax calculations.",
    icon: Flame,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    borderColor: "group-hover:border-amber-500/50",
  },
  {
    title: "Fully Customizable",
    desc: "Tailored to your workflow — from lead capture to installation to long-term AMC management.",
    icon: Coffee,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    borderColor: "group-hover:border-emerald-500/50",
  },
  {
    title: "Dedicated Support Team",
    desc: "Ongoing technical support and product updates to keep your operations running smoothly.",
    icon: Users,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    borderColor: "group-hover:border-blue-500/50",
  },
];

export function WhyChooseUsSection({ onConsultClick }: { onConsultClick?: () => void }) {
  return (
    <section className="py-12 sm:py-20 bg-[#0A0014] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-yellow-600/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-500/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-14 text-center lg:text-left">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/5 backdrop-blur-sm mb-6 mx-auto lg:mx-0">
            <Trophy size={14} className="text-yellow-400" />
            <span className="text-yellow-300 text-sm font-medium tracking-wide">Why Choose Us</span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 text-center lg:text-left">
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              The Solar Software <br className="md:hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-yellow-300">Built to Last</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-gray-400 text-base md:text-lg max-w-xl font-light leading-relaxed mx-auto lg:mx-0">
              We combine deep solar industry knowledge with modern software engineering to deliver a platform that grows with your business.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className={`group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 overflow-hidden ${point.borderColor} hover:bg-white/10 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)]`}
            >
              <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className={`relative z-10 w-12 h-12 rounded-2xl ${point.bg} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                <point.icon size={24} className={`${point.color} group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]`} />
              </div>
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-2">{point.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{point.desc}</p>
              </div>
              <div className="absolute bottom-0 left-4 right-4 h-px bg-linear-to-r from-transparent via-white/20 to-transparent group-hover:via-yellow-500/50 transition-all duration-500" />
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="group relative p-6 rounded-2xl border border-yellow-500/30 bg-linear-to-br from-yellow-600/20 to-transparent backdrop-blur-xl flex flex-col justify-between overflow-hidden"
          >
            <motion.div animate={{ x: ["-100%", "100%"], opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-yellow-300 text-xs font-bold uppercase tracking-widest mb-3">
                <CheckCircle2 size={14} className="text-yellow-400 animate-pulse" />
                <span>Ready to deploy</span>
              </div>
              <p className="text-white text-base font-semibold leading-snug">
                Let&apos;s set up your solar management platform and get your plants online.
              </p>
            </div>
            <button
              onClick={onConsultClick}
              className="relative z-10 mt-6 w-full py-3 bg-white text-black font-bold rounded-xl text-sm hover:bg-yellow-500 hover:text-white transition-all active:scale-95 shadow-lg group-hover:shadow-yellow-500/20"
            >
              Get a Free Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

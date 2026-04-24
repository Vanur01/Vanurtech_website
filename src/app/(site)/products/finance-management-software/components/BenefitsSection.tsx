"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Clock, DollarSign, BarChart2, Sparkles } from "lucide-react";

const benefits = [
  { title: "Get Paid Faster with Auto Reminders", icon: <DollarSign className="w-6 h-6" /> },
  { title: "Zero GST Errors & Penalties", icon: <ShieldCheck className="w-6 h-6" /> },
  { title: "Save Hours on Manual Bookkeeping", icon: <Clock className="w-6 h-6" /> },
  { title: "Real-Time Profit & Loss Visibility", icon: <BarChart2 className="w-6 h-6" /> },
  { title: "Scale Without Hiring More Accountants", icon: <TrendingUp className="w-6 h-6" /> },
];

export function BenefitsSection() {
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden bg-[#0A0014]">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">

          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md mb-8 mx-auto lg:mx-0">
              <Sparkles size={16} className="text-blue-400" />
              <span className="text-blue-300 text-xs sm:text-sm font-medium tracking-wide mb-0.5">Business Benefits</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-8 text-white leading-[1.1] tracking-tight">
              How Our Software <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-blue-300 to-blue-500">Grows Your Business</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-10 max-w-xl">
              Built for Indian businesses — from small traders to growing enterprises who need clean books, fast billing, and zero compliance headaches.
            </p>
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-6 border-t border-blue-500/10">
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.4)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-sm">
                <p className="text-white font-semibold text-base">Trusted by 200+ Businesses</p>
                <p className="text-gray-400">Rated 5/5 for measurable growth</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 relative">
            <div className="absolute left-[27px] top-8 bottom-8 w-[2px] bg-linear-to-b from-blue-500/0 via-blue-500/20 to-blue-500/0 hidden sm:block" />
            <div className="space-y-4 sm:space-y-6">
              {benefits.map((benefit, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.5 }} className="relative group sm:pl-16 cursor-default">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#00102A] border border-blue-500/20 text-blue-400 hidden sm:flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 group-hover:scale-110 z-10">
                    <motion.div className="absolute inset-0 rounded-full bg-blue-500 z-0" animate={{ opacity: [0, 1, 0], scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.4 }} />
                    <motion.span animate={{ color: ["#93c5fd", "#ffffff", "#93c5fd"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.4 }} className="relative z-10">{benefit.icon}</motion.span>
                  </div>

                  <div className="flex items-center p-5 sm:p-6 rounded-4xl border border-blue-500/10 bg-white/2 hover:bg-white/5 backdrop-blur-xl group-hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden">
                    <motion.div className="absolute inset-0 bg-linear-to-r from-blue-600/0 via-blue-600/15 to-blue-600/0 blur-xl pointer-events-none" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.4 }} />
                    <motion.div className="absolute inset-0 border border-blue-500/40 rounded-4xl pointer-events-none" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.4 }} />
                    <div className="flex items-center gap-5 sm:gap-0 relative z-10">
                      <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 border border-blue-500/20 sm:hidden relative overflow-hidden flex items-center justify-center">
                        <motion.div className="absolute inset-0 bg-blue-500 z-0" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.4 }} />
                        <motion.span animate={{ color: ["#93c5fd", "#ffffff", "#93c5fd"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.4 }} className="relative z-10">{benefit.icon}</motion.span>
                      </div>
                      <motion.span animate={{ color: ["#d1d5db", "#ffffff", "#d1d5db"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.4 }} className="text-gray-300 text-lg font-semibold group-hover:text-white transition-colors tracking-wide">
                        {benefit.title}
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

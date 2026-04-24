"use client";

import { motion } from "framer-motion";
import { Sparkles, Trophy, Star, Flame, Coffee, Users, CheckCircle2 } from "lucide-react";

const points = [
  {
    title: "Official WhatsApp Business API",
    desc: "Built on the official Meta-approved WhatsApp Business API — reliable, secure, and compliant.",
    icon: Trophy,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    borderColor: "group-hover:border-purple-500/50",
  },
  {
    title: "AI Trained on Your Business",
    desc: "The chatbot learns your products, FAQs, and tone — so it sounds like your brand, not a generic bot.",
    icon: Star,
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    borderColor: "group-hover:border-pink-400/50",
  },
  {
    title: "Multi-Language Support",
    desc: "Communicate with customers in Hindi, English, and regional languages for maximum reach.",
    icon: Flame,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    borderColor: "group-hover:border-amber-500/50",
  },
  {
    title: "CRM & Tool Integrations",
    desc: "Connects with your existing CRM, Sheets, Zapier, and more — no data silos.",
    icon: Coffee,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    borderColor: "group-hover:border-emerald-500/50",
  },
  {
    title: "Dedicated Onboarding & Support",
    desc: "We set up, train, and maintain your chatbot — with ongoing support as your business grows.",
    icon: Users,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    borderColor: "group-hover:border-blue-500/50",
  },
];

export function WhyChooseUsSection({ onConsultClick }: { onConsultClick?: () => void }) {
  return (
    <section className="py-12 sm:py-20 bg-[#0A0014] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-600/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-14 text-center lg:text-left">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm mb-6 mx-auto lg:mx-0">
            <Trophy size={14} className="text-purple-400" />
            <span className="text-purple-300 text-sm font-medium tracking-wide">Why Choose Us</span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 text-center lg:text-left">
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              The AI Chatbot <br className="md:hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">Built to Convert</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-gray-400 text-base md:text-lg max-w-xl font-light leading-relaxed mx-auto lg:mx-0">
              We combine deep AI expertise with WhatsApp&apos;s reach to deliver a chatbot that actually drives results for your business.
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
              className={`group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 overflow-hidden ${point.borderColor} hover:bg-white/10 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]`}
            >
              <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className={`relative z-10 w-12 h-12 rounded-2xl ${point.bg} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                <point.icon size={24} className={`${point.color} group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]`} />
              </div>
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-2">{point.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{point.desc}</p>
              </div>
              <div className="absolute bottom-0 left-4 right-4 h-px bg-linear-to-r from-transparent via-white/20 to-transparent group-hover:via-purple-500/50 transition-all duration-500" />
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="group relative p-6 rounded-2xl border border-purple-500/30 bg-linear-to-br from-purple-600/20 to-transparent backdrop-blur-xl flex flex-col justify-between overflow-hidden"
          >
            <motion.div animate={{ x: ["-100%", "100%"], opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-purple-300 text-xs font-bold uppercase tracking-widest mb-3">
                <CheckCircle2 size={14} className="text-purple-400 animate-pulse" />
                <span>Ready to deploy</span>
              </div>
              <p className="text-white text-base font-semibold leading-snug">
                Let&apos;s set up your WhatsApp AI chatbot and start converting conversations into customers.
              </p>
            </div>
            <button
              onClick={onConsultClick}
              className="relative z-10 mt-6 w-full py-3 bg-white text-black font-bold rounded-xl text-sm hover:bg-purple-500 hover:text-white transition-all active:scale-95 shadow-lg group-hover:shadow-purple-500/20"
            >
              Get a Free Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

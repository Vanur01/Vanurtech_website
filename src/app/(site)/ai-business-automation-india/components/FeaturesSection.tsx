"use client";

import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, Target, TrendingUp, Search, BarChart, Layers, Sparkles } from "lucide-react";

const features = [
  {
    title: "AI Calling & Follow-up Automation",
    description: "Intelligent systems that handle outbound calls, follow-ups, and customer inquiries 24/7 without human intervention.",
    icon: <PhoneCall className="w-6 h-6" />
  },
  {
    title: "Lead Prioritization & Smart Suggestions",
    description: "AI analyzes and ranks leads based on conversion probability, guiding your sales team on who to contact first.",
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "Sales & Performance Analytics",
    description: "Real-time dashboards that monitor KPIs, track sales activities, and predict future revenue trends with high accuracy.",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: "Competitor Analysis & Insights",
    description: "Automated tracking of competitor pricing, features, and market positioning to help you stay ahead of the curve.",
    icon: <Search className="w-6 h-6" />
  },
  {
    title: "Marketing & SEO Recommendations",
    description: "AI-driven insights that suggest content strategies, keyword opportunities, and campaign optimizations for maximum ROI.",
    icon: <BarChart className="w-6 h-6" />
  },
  {
    title: "Workflow Automation & Task Management",
    description: "Streamline daily operations by automating repetitive tasks, emails, and data entry, freeing up your team's valuable time.",
    icon: <Layers className="w-6 h-6" />
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0014]">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-8">
              <Sparkles size={16} className="text-purple-400" />
              <span className="text-purple-300 text-xs sm:text-sm font-medium tracking-wide mb-0.5">
                Core Features
              </span>
            </div>
          </motion.div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white tracking-tight max-w-4xl mx-auto">
            Our AI Business <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">
              Automation Solutions Include
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-linear-to-br from-purple-600/20 to-pink-500/20 rounded-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

              <div className="relative h-full p-8 rounded-4xl bg-white/2 hover:bg-white/5 border border-purple-500/10 group-hover:border-purple-500/30 backdrop-blur-xl transition-all duration-500 overflow-hidden text-left flex flex-col justify-start">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-600/10 blur-[50px] rounded-full group-hover:bg-purple-600/20 transition-all duration-500" />

                <div className="mb-8 inline-flex self-start p-4 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:-translate-y-2 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.1)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                  {feature.icon}
                </div>

                <h4 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h4>

                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

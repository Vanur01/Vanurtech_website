"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Home, 
  Users, 
  BarChart3, 
  MessageSquare, 
  ShieldCheck, 
  Smartphone,
  Sparkles
} from "lucide-react";

const features = [
  {
    title: "Property Tracking",
    description: "Real-time inventory management for units, plots, and commercial spaces with status updates.",
    icon: <Home className="w-6 h-6 text-violet-400" />,
  },
  {
    title: "Lead Automation",
    description: "Capture leads from social media and portals automatically with instant agent assignment.",
    icon: <Users className="w-6 h-6 text-indigo-400" />,
  },
  {
    title: "Performance Dashboards",
    description: "Track agent conversion rates, follow-up times, and sales performance in real-time.",
    icon: <BarChart3 className="w-6 h-6 text-violet-400" />,
  },
  {
    title: "Automated Follow-ups",
    description: "AI-driven WhatsApp and Email sequences to nurture leads until they are ready to visit.",
    icon: <MessageSquare className="w-6 h-6 text-indigo-400" />,
  },
  {
    title: "Document Vault",
    description: "Secure storage for KYC, property deeds, and agreement templates with e-sign support.",
    icon: <ShieldCheck className="w-6 h-6 text-violet-400" />,
  },
  {
    title: "Field Agent App",
    description: "Enable your on-site team to log site visits, capture client feedback, and update lead status.",
    icon: <Smartphone className="w-6 h-6 text-indigo-400" />,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-12 sm:py-20 relative overflow-hidden bg-[#0B0011]">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/5 backdrop-blur-md mb-6">
            <Sparkles size={16} className="text-violet-400" />
            <span className="text-violet-300 text-xs sm:text-sm font-medium tracking-wide">
              Advanced Real Estate Capabilities
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Tech-First <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 via-indigo-500 to-violet-600">Property Management</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Everything you need to scale your real estate business in the digital-first Indian market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="h-full p-6 sm:p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:border-violet-500/30">
                <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
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

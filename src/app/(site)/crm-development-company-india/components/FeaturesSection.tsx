"use client";

import React from "react";
import { motion } from "framer-motion";
import { Settings, Globe, Zap, Smartphone, Database, Layers, Sparkles } from "lucide-react";

const features = [
  {
    title: "Custom CRM Development",
    description: "Fully tailored CRM systems built around your sales pipeline, lead management, and customer engagement workflows.",
    icon: <Database className="w-6 h-6" />
  },
  {
    title: "Lead & Contact Management",
    description: "Capture, track, and nurture every lead with smart segmentation, follow-up reminders, and deal stage tracking.",
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "Sales Automation",
    description: "Automate repetitive sales tasks — follow-ups, email sequences, and pipeline updates — so your team closes more deals.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Mobile CRM Access",
    description: "Fully responsive CRM interface so your sales team can manage leads and deals from anywhere, on any device.",
    icon: <Smartphone className="w-6 h-6" />
  },
  {
    title: "Analytics & Reporting",
    description: "Real-time dashboards with sales performance metrics, conversion rates, and revenue forecasting at a glance.",
    icon: <Settings className="w-6 h-6" />
  },
  {
    title: "Third-Party Integrations",
    description: "Seamlessly connect your CRM with email, WhatsApp, payment gateways, and marketing tools you already use.",
    icon: <Layers className="w-6 h-6" />
  }
];

export function FeaturesSection() {
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden bg-[#0A0014]">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-6">
              <Sparkles size={16} className="text-purple-400" />
              <span className="text-purple-300 text-xs sm:text-sm font-medium tracking-wide">
                Premium Capabilities
              </span>
            </div>
          </motion.div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-white tracking-tight max-w-4xl mx-auto">
            Engineered for{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">
              Growth & Performance
            </span>
          </h3>

          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            We don't just build CRMs — we engineer powerful customer relationship platforms that help you capture more leads, close more deals, and retain more customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-linear-to-br from-purple-600/20 to-pink-500/20 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

              <div className="relative h-full p-5 sm:p-7 rounded-[2rem] bg-white/2 hover:bg-white/5 border border-purple-500/10 group-hover:border-purple-500/30 backdrop-blur-xl transition-all duration-500 overflow-hidden text-left flex flex-col justify-start">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-600/10 blur-[50px] rounded-full group-hover:bg-purple-600/20 transition-all duration-500" />

                <div className="mb-4 sm:mb-6 inline-flex self-start p-3 sm:p-4 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:-translate-y-2 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500 border border-purple-500/20">
                  {feature.icon}
                </div>

                <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 tracking-tight group-hover:text-purple-300 transition-colors">
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

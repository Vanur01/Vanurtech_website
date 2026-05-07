"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sun, Zap, Users, BarChart2, Bell, FileText, Sparkles } from "lucide-react";

const features = [
  {
    title: "Plant Performance Monitoring",
    description: "Track energy generation, system efficiency, and output metrics across all your solar plants in real time from a single dashboard.",
    icon: <Sun className="w-6 h-6" />,
  },
  {
    title: "Fault Detection & Alerts",
    description: "Instantly detect inverter faults, panel underperformance, and grid issues with automated alerts sent to your team.",
    icon: <Bell className="w-6 h-6" />,
  },
  {
    title: "Revenue & ROI Reports",
    description: "Generate detailed financial reports showing energy savings, revenue earned, and return on investment for each plant.",
    icon: <BarChart2 className="w-6 h-6" />,
  },
  {
    title: "Customer & AMC Management",
    description: "Manage all your customers, service contracts, and AMC schedules in one place with automated renewal reminders.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Automated Billing & Invoicing",
    description: "Generate GST-compliant invoices, track payments, and automate billing cycles for your solar service customers.",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: "Field Team & Installation Tracking",
    description: "Assign installation jobs, track field engineers in real time, and manage the full project lifecycle from lead to commissioning.",
    icon: <Zap className="w-6 h-6" />,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden bg-[#0A0014]">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-14">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 backdrop-blur-md mb-8 mx-auto">
              <Sparkles size={16} className="text-yellow-400" />
              <span className="text-yellow-300 text-xs sm:text-sm font-medium tracking-wide mb-0.5">Premium Capabilities</span>
            </div>
          </motion.div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white tracking-tight max-w-4xl mx-auto">
            Engineered for <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-500">
              Solar Excellence
            </span>
          </h3>
          <p className="text-gray-400 text-lg sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Every feature is purpose-built for solar businesses — from rooftop installers to large-scale plant operators managing hundreds of sites.
          </p>
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
              <div className="absolute inset-0 bg-linear-to-br from-yellow-600/20 to-yellow-400/10 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <div className="relative h-full p-8 rounded-[2rem] bg-white/2 hover:bg-white/5 border border-yellow-500/10 group-hover:border-yellow-500/30 backdrop-blur-xl transition-all duration-500 overflow-hidden text-left flex flex-col justify-start">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-600/10 blur-[50px] rounded-full group-hover:bg-yellow-600/20 transition-all duration-500" />
                <div className="mb-5 sm:mb-8 inline-flex self-start p-4 rounded-2xl bg-yellow-500/10 text-yellow-400 group-hover:-translate-y-2 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-500 border border-yellow-500/20 shadow-[0_0_15px_rgba(234,179,8,0.1)] group-hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-yellow-300 transition-colors">
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

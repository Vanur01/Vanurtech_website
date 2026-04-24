"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Users, Trophy, HeartHandshake, Sparkles, ArrowRight } from "lucide-react";

const reasons = [
  {
    label: "SOLAR TECH",
    title: "Domain Expertise",
    description: "Built by experts who understand the nuances of the solar installation and energy sector.",
    icon: <Rocket className="w-8 h-8 text-violet-400" />,
    gradient: "from-violet-500/20 to-transparent"
  },
  {
    label: "OPERATIONS",
    title: "Efficiency First",
    description: "Our platform is designed to cut down site-to-commissioning time by up to 30%.",
    icon: <Users className="w-8 h-8 text-indigo-400" />,
    gradient: "from-indigo-500/20 to-transparent"
  },
  {
    label: "IMPACT",
    title: "Sustainable Scaling",
    description: "Manage thousands of sites effortlessly with our cloud-native scalable architecture.",
    icon: <Trophy className="w-8 h-8 text-violet-400" />,
    gradient: "from-violet-500/20 to-transparent"
  },
  {
    label: "RELIABILITY",
    title: "24/7 Monitoring",
    description: "Enterprise-grade reliability for your field operations and customer data management.",
    icon: <HeartHandshake className="w-8 h-8 text-indigo-400" />,
    gradient: "from-indigo-500/20 to-transparent"
  }
];

export function WhyChooseUsSection({ onConsultClick }: { onConsultClick?: () => void }) {
  return (
    <section className="py-12 sm:py-20 relative overflow-hidden bg-[#0B0011]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/5 backdrop-blur-md mb-6">
            <Sparkles size={16} className="text-violet-400" />
            <span className="text-violet-300 text-xs sm:text-sm font-medium tracking-wide">The Solar Advantage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            Why Energy Firms <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 via-indigo-500 to-violet-600">Choose Us</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            We provide the digital backbone for modern solar installers and renewable energy enterprises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center text-center transition-all duration-500 hover:border-violet-500/30 hover:bg-white/10">
                {/* Icon Circle Container */}
                <div className="relative mb-8">
                  {/* Triangle Arrow */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-violet-500 transition-transform group-hover:scale-125" />

                  <div className="w-24 h-24 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:border-violet-500/50 group-hover:scale-110">
                    <div className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-50`} />
                    <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
                      {item.icon}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-10">
                  {item.description}
                </p>

                {/* Ribbon Badge at Bottom */}
                <div className="mt-auto relative w-full flex justify-center">
                  <div className="relative">
                    {/* Ribbon Wings */}
                    <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-20 h-8 bg-violet-600 skew-x-[20deg] z-0 rounded-sm opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-20 h-8 bg-violet-600 -skew-x-[20deg] z-0 rounded-sm opacity-50 group-hover:opacity-100 transition-opacity" />

                    {/* Main Ribbon Center */}
                    <div className="relative z-10 px-8 py-1.5 bg-violet-500 text-white font-bold text-[10px] tracking-widest rounded shadow-lg transition-transform group-hover:scale-110">
                      {item.label}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 flex justify-center">
          <button
            onClick={onConsultClick}
            className="group relative px-8 py-4 sm:px-12 sm:py-5 bg-linear-to-r from-violet-600 to-indigo-600 text-white font-bold rounded-full text-sm sm:text-base transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] active:scale-95 flex items-center gap-3 whitespace-nowrap"
          >
            Power Your Business
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

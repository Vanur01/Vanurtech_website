"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Figma, Layout, Lightbulb, Target, Zap, Sparkles } from "lucide-react";

const features = [
  {
    title: "User Research & Discovery",
    description: "Deep-diving into user behavior and business goals to build a winning strategy and clear roadmap.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Wireframing & Prototyping",
    description: "Low and high-fidelity blueprints and interactive mockups that bring your initial concepts to life.",
    icon: <Layout className="w-6 h-6" />
  },
  {
    title: "UI & Visual Design",
    description: "Aesthetically elite interfaces crafted in Figma with pixel-perfect precision and modern aesthetics.",
    icon: <Figma className="w-6 h-6" />
  },
  {
    title: "Interaction Design",
    description: "Micro-interactions and animations that make using your product a delight and improve engagement.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Design Systems",
    description: "Scalable component libraries and style guides that ensure consistency across all platforms and apps.",
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "Usability Testing",
    description: "Real-world testing and feedback loops to refine flows and maximize overall user satisfaction.",
    icon: <Lightbulb className="w-6 h-6" />
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
                Premium Design Capabilities
              </span>
            </div>
          </motion.div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white tracking-tight max-w-4xl mx-auto">
            Designing for <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">
              Maximum Impact
            </span>
          </h3>
          <p className="text-gray-400 text-lg sm:text-lg max-w-3xl mx-auto leading-relaxed">
            From initial research to polished visual components, our end-to-end design process ensures your product is both beautiful and functional.
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
              <div className="absolute inset-0 bg-linear-to-br from-purple-600/20 to-pink-500/20 rounded-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

              <div className="relative h-full p-8 rounded-4xl bg-white/2 hover:bg-white/5 border border-purple-500/10 group-hover:border-purple-500/30 backdrop-blur-xl transition-all duration-500 overflow-hidden text-left flex flex-col justify-start">
                {/* Decorative gradient blob inside card */}
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

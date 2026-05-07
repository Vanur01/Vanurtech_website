"use client";

import React from "react";
import { motion } from "framer-motion";
import { Settings, Globe, Zap, Smartphone, ShoppingCart, Database, Layers, Sparkles } from "lucide-react";

const features = [
  {
    title: "Custom Architecture",
    description: "Built strictly to your specific business requirements with tailored codebase, ensuring total scalability and flexibility.",
    icon: <Database className="w-6 h-6" />
  },
  {
    title: "SEO-First Structure",
    description: "Built-in technical SEO optimizations that put your SaaS at the top of Google search results right from day one.",
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "Lightning Fast Speed",
    description: "Optimized for Core SaaS Vitals and lightning speed, ensuring your users never wait and your bounce rate drops.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Mobile Optimization",
    description: "Pixel-perfect and fully responsive designs to capture and engage the majority of your mobile audience flawlessly.",
    icon: <Smartphone className="w-6 h-6" />
  },
  {
    title: "E-Commerce Ready",
    description: "Secure, high-converting checkout flows and intelligent product pages designed to multiply your online sales.",
    icon: <ShoppingCart className="w-6 h-6" />
  },
  {
    title: "CMS & Maintenance",
    description: "Easy-to-use content management systems paired with ongoing support so you can effortlessly manage your digital asset.",
    icon: <Layers className="w-6 h-6" />
  }
];

export function FeaturesSection() {
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden bg-[#0A0014]">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-8">
              <Sparkles size={16} className="text-purple-400" />
              <span className="text-purple-300 text-xs sm:text-sm font-medium tracking-wide mb-0.5">
                Premium Capabilities
              </span>
            </div>
          </motion.div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white tracking-tight max-w-4xl mx-auto">
            Engineered for <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">
              Growth & Performance
            </span>
          </h3>
          <p className="text-gray-400 text-lg sm:text-lg max-w-3xl mx-auto leading-relaxed">
            We don't just build SaaSs; we engineer powerful digital assets equipped with everything you need to scale your traffic and capture more revenue.
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
              <div className="absolute inset-0 bg-linear-to-br from-purple-600/20 to-pink-500/20 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

              <div className="relative h-full p-8 rounded-[2rem] bg-white/2 hover:bg-white/5 border border-purple-500/10 group-hover:border-purple-500/30 backdrop-blur-xl transition-all duration-500 overflow-hidden text-left flex flex-col justify-start">
                {/* Decorative gradient blob inside card */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-600/10 blur-[50px] rounded-full group-hover:bg-purple-600/20 transition-all duration-500" />

                <div className="mb-5 sm:mb-8 inline-flex self-start p-4 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:-translate-y-2 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.1)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
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

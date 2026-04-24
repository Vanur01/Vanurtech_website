"use client";

import React from "react";
import {
  Building2,
  Sun,
  GraduationCap,
  Briefcase,
  Activity,
  MapPin,
  Factory,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";


const solutions = [
  {
    title: "Small & Medium Businesses (SMEs)",
    description: "Custom ERP, automated billing systems, and localized digital ecosystems built for rapid growth and efficiency.",
    icon: Briefcase,
    color: "from-emerald-500 to-teal-500",
    tag: "Growth Ready",
    link: "/crm-development-company-india"
  },
  {
    title: "Real Estate & Lead Management",
    description: "Advanced property tracking, automated lead follow-ups, and agent performance dashboards for high-volume firms.",
    icon: Building2,
    color: "from-blue-500 to-cyan-500",
    tag: "Revenue Max",
    link: "/crm-development-company-india"
  },
  {
    title: "Solar & Renewable Energy",
    description: "End-to-end installation tracking, field team reporting, and automated energy calculation tools for solar installers.",
    icon: Sun,
    color: "from-yellow-400 to-orange-500",
    tag: "Green Scale",
    link: "/crm-development-company-india"
  },
  {
    title: "Education & Institutes",
    description: "Automated student enrollment, high-performance learning portals, and integrated fee management systems.",
    icon: GraduationCap,
    color: "from-purple-500 to-pink-500",
    tag: "Elite Learning",
    link: "/crm-development-company-india"
  },
  {
    title: "Healthcare & Clinics",
    description: "Scalable patient scheduling, electronic health records (EHR), and automated patient follow-up systems.",
    icon: Activity,
    color: "from-red-500 to-rose-600",
    tag: "Care Flow",
    link: "/crm-development-company-india"
  },
  {
    title: "Travel & Hospitality",
    description: "Custom booking engines, dynamic itinerary management, and AI-driven personalized travel experiences.",
    icon: MapPin,
    color: "from-orange-500 to-amber-600",
    tag: "Global Reach",
    link: "/crm-development-company-india"
  }
];

export default function IndustrySolutions() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "#0B0011" }}>
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-pink-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-6"
          >
            <Factory size={16} className="text-purple-400" />
            <span className="text-purple-300 text-xs sm:text-sm font-medium tracking-wide">
              Industry Verticals
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.2]"
          >
            Custom Software Solutions for <span className="inline-block text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600 italic py-1 pr-6">Every Industry</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed"
          >
            We build tailored solutions for industries that need automation and scalability.
            Our systems are fully customizable based on your unique business workflow.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {solutions.map((item, index) => (
            <Link key={index} href={item.link} className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2rem)] flex">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{
                  y: -8,
                  rotateX: 3,
                  rotateY: -3,
                  transition: { duration: 0.4 }
                }}
                className="group p-8 rounded-[2rem] border border-white/10 bg-[#0B0011]/90 backdrop-blur-2xl transition-all duration-500 relative flex flex-col w-full min-h-[400px] overflow-hidden perspective-1000 active:scale-95"
              >
                {/* Dynamic Hover Glow */}
                <div className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-15 blur-[100px] transition-opacity duration-700 pointer-events-none`} />

                {/* Icon Container */}
                <div className="relative mb-10 z-10 w-fit">
                  <div className={`absolute -inset-6 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-40 blur-3xl transition-all duration-700 scale-50 group-hover:scale-110`} />
                  <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${item.color} p-[1.5px] relative overflow-hidden group-hover:rotate-12 transition-transform duration-700 shadow-2xl`}>
                    <div className="w-full h-full rounded-[15px] bg-[#0B0011] flex items-center justify-center relative z-10">
                      <item.icon size={30} className="text-white group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    {/* Orbiting Comet */}
                    <div className="absolute top-0 left-0 w-full h-full animate-spin-slow opacity-0 group-hover:opacity-100 scale-125">
                      <div className="w-2.5 h-2.5 rounded-full bg-white blur-[1.5px] absolute top-0 left-1/2 -ml-1 border border-white/50 shadow-[0_0_10px_white]" />
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 leading-tight relative z-10 group-hover:text-purple-400 transition-colors">
                  {item.title}
                  <div className={`h-[3px] w-0 group-hover:w-full bg-linear-to-r ${item.color} transition-all duration-500 mt-2 rounded-full shadow-[0_0_10px_${item.color.split(' ')[1]}]`} />
                </h3>

                <p className="text-gray-400 leading-relaxed mb-10 grow relative z-10 text-sm md:text-base group-hover:text-gray-200 transition-colors">
                  {item.description}
                </p>

                <div className="flex items-center gap-3 text-purple-400 font-bold group-hover:text-purple-300 group-hover:gap-6 transition-all uppercase tracking-widest text-[11px] relative z-10">
                  <Sparkles size={16} className="fill-purple-400/30 group-hover:rotate-90 transition-transform duration-700" />
                  <span className="drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">{item.tag}</span>
                </div>

                {/* Ghost icon bg */}
                <div className="absolute right-[-30px] bottom-[-30px] opacity-0 group-hover:opacity-15 transition-opacity duration-1000 scale-[2] rotate-[-20deg] pointer-events-none">
                  <item.icon size={120} className="text-white" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

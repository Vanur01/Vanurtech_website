"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Activity, 
  Clipboard, 
  Calendar, 
  Users, 
  Database, 
  ShieldCheck, 
  Sparkles 
} from "lucide-react";

const features = [
  {
    title: "EHR Management",
    description: "Secure and scalable Electronic Health Records for maintaining patient history and reports.",
    icon: <Database className="w-6 h-6" />
  },
  {
    title: "Smart Scheduling",
    description: "Automated appointment booking and queue management for clinics and hospitals.",
    icon: <Calendar className="w-6 h-6" />
  },
  {
    title: "Patient Monitoring",
    description: "Real-time health tracking and alert systems for critical patient care.",
    icon: <Activity className="w-6 h-6" />
  },
  {
    title: "Automated Billing",
    description: "Seamless invoicing, insurance claims, and pharmacy inventory management.",
    icon: <Clipboard className="w-6 h-6" />
  },
  {
    title: "Telemedicine Support",
    description: "Integrated video consultation and digital prescription delivery tools.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "HIPAA Compliance",
    description: "Enterprise-grade security and data privacy standards for all medical data.",
    icon: <ShieldCheck className="w-6 h-6" />
  }
];

export function FeaturesSection() {
  return (
    <section className="py-12 sm:py-20 relative overflow-hidden bg-[#0B0011]">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/5 backdrop-blur-md mb-6">
              <Sparkles size={16} className="text-violet-400" />
              <span className="text-violet-300 text-xs sm:text-sm font-medium tracking-wide">
                Specialized Health Tech
              </span>
            </div>
          </motion.div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-white tracking-tight max-w-4xl mx-auto">
            Digitizing the{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 via-indigo-500 to-violet-600">
              Future of Care
            </span>
          </h3>

          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Our healthcare management platform provides the tools you need to streamline operations and deliver superior patient outcomes.
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
              <div className="absolute inset-0 bg-linear-to-br from-violet-600/20 to-indigo-500/20 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

              <div className="relative h-full p-5 sm:p-7 rounded-[2rem] bg-white/2 hover:bg-white/5 border border-violet-500/10 group-hover:border-violet-500/30 backdrop-blur-xl transition-all duration-500 overflow-hidden text-left flex flex-col justify-start">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-violet-600/10 blur-[50px] rounded-full group-hover:bg-violet-600/20 transition-all duration-500" />

                <div className="mb-4 sm:mb-6 inline-flex self-start p-3 sm:p-4 rounded-2xl bg-violet-500/10 text-violet-400 group-hover:-translate-y-2 group-hover:bg-violet-500 group-hover:text-white transition-all duration-500 border border-violet-500/20">
                  {feature.icon}
                </div>

                <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 tracking-tight group-hover:text-violet-300 transition-colors">
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

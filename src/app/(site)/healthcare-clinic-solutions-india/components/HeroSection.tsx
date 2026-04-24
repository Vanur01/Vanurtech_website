"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Activity } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection({ onConsultClick }: { onConsultClick?: () => void }) {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden bg-[#0B0011]">
      {/* Healthcare Pulse Background Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep Gradient Base */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e1b4b_0%,#0B0011_80%)] opacity-50" />

        {/* Vital Pulse Lines */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-10">
          <svg
            viewBox="0 0 1440 400"
            className="absolute w-full h-full"
            preserveAspectRatio="none"
          >
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 1],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              d="M0,200 L400,200 L420,150 L440,250 L460,200 L800,200 L820,100 L840,300 L860,200 L1440,200"
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Expanding Life Orbs */}
        {isMounted && [...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [0.8, 1.5, 0.8],
              opacity: [0, 0.2, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2.5,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-violet-500/30 rounded-full"
          />
        ))}

        {/* Floating Health Particles */}
        {isMounted && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%"
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [0, 1.2, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
            className="absolute w-1.5 h-1.5 bg-indigo-400 rounded-full blur-[1px]"
          />
        ))}

        {/* Ambient Glows */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/10 blur-[150px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/5 backdrop-blur-md mb-8 max-w-max mx-auto"
          >
            <Activity size={16} className="text-violet-400 shrink-0" />
            <span className="text-violet-300 text-xs sm:text-sm font-medium tracking-wide">
              Advanced Healthcare Technology
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight text-white tracking-tight px-2 sm:px-0"
          >
            Transforming Patient Care with{" "}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 via-indigo-500 to-violet-600">
              Scalable Health-Tech Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0"
          >
            Electronic Health Records (EHR), smart patient scheduling, and automated clinic workflows designed to improve efficiency and care quality in Indian hospitals and clinics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
          >
            <button
              onClick={onConsultClick}
              className="w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-violet-600 to-indigo-600 hover:scale-105 rounded-full text-white font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-violet-500/25 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Get Expert Consultation
              <ArrowRight size={20} />
            </button>
            <Link
              href="/projects"
              className="w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-4 bg-white/5 hover:bg-white/10 hover:border-white/30 border border-white/10 rounded-full text-white font-semibold text-sm sm:text-base transition-all duration-300 backdrop-blur-sm text-center whitespace-nowrap"
            >
              See Success Stories
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

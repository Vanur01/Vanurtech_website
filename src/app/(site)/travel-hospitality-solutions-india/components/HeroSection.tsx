"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection({ onConsultClick }: { onConsultClick?: () => void }) {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden bg-[#0B0011]">
      {/* Travel & Hospitality Background Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep Gradient Base */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e1b4b_0%,#0B0011_80%)] opacity-50" />

        {/* Dynamic Global Lines */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-30">
          <svg
            viewBox="0 0 800 800"
            className="absolute w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            {[...Array(6)].map((_, i) => (
              <motion.circle
                key={i}
                cx="400"
                cy="400"
                r={100 + i * 50}
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="1"
                strokeOpacity={0.2}
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20 + i * 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
            {/* Travel Path Lines */}
            <motion.path
              d="M 200,400 Q 400,100 600,400 T 800,400"
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="2"
              strokeDasharray="10 10"
              animate={{ strokeDashoffset: [0, -100] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="opacity-40"
            />
          </svg>
        </div>

        {/* Floating Destination Points */}
        {isMounted && [...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%"
            }}
            animate={{
              opacity: [0, 0.4, 0],
              scale: [0, 1.2, 0],
              y: [null, (Math.random() - 0.5) * 200 + "px"]
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
            className="absolute flex flex-col items-center gap-1"
          >
             <div className="w-1.5 h-1.5 bg-violet-400 rounded-full shadow-[0_0_8px_#a78bfa]" />
             <div className="w-[1px] h-4 bg-linear-to-b from-violet-400 to-transparent" />
          </motion.div>
        ))}

        {/* Ambient Glows */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-violet-600/10 blur-[100px] rounded-full"
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
            <MapPin size={16} className="text-violet-400 shrink-0" />
            <span className="text-violet-300 text-xs sm:text-sm font-medium tracking-wide">
              Elite Travel Technology
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight text-white tracking-tight px-2 sm:px-0"
          >
            Digitalizing the Journey with{" "}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 via-indigo-500 to-violet-600">
               Next-Gen Hospitality Portals
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0"
          >
            Custom booking engines, dynamic itinerary management, and AI-driven personalized travel experiences. We help travel agencies and hotels automate operations for global growth.
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

"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection({ onConsultClick }: { onConsultClick?: () => void }) {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden bg-[#0B0011]">
      {/* Education & Knowledge Background Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep Gradient Base */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e1b4b_0%,#0B0011_80%)] opacity-50" />

        {/* Animated Digital Waves */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-30">
          <svg
            viewBox="0 0 1440 400"
            className="absolute w-[200%] h-full min-w-[1440px] top-1/2 -translate-y-1/2"
            preserveAspectRatio="none"
          >
            {[...Array(3)].map((_, i) => (
              <motion.path
                key={i}
                initial={{ x: i * -200 }}
                animate={{
                  x: [0, -720, 0],
                }}
                transition={{
                  duration: 15 + i * 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                d="M0,160 C320,300 420,0 720,160 C1020,320 1120,20 1440,160 V400 H0 Z"
                fill="none"
                stroke="url(#wave-grad)"
                strokeWidth="1.5"
                strokeOpacity={0.3 - i * 0.1}
              />
            ))}
            <defs>
              <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Secondary Sine Wave Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-20">
          <svg viewBox="0 0 1440 120" className="w-[200%] h-[200px]" preserveAspectRatio="none">
            <motion.path
              animate={{
                x: [-1440, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 V120 H0 Z"
              fill="url(#wave-fill)"
            />
            <defs>
              <linearGradient id="wave-fill" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating Knowledge Particles (Sparks) */}
        {isMounted && [...Array(25)].map((_, i) => (
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
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 bg-violet-400 rounded-full blur-[0.5px]"
          />
        ))}

        {/* Ambient Glows */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-violet-600/10 blur-[120px] rounded-full"
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
            <GraduationCap size={16} className="text-violet-400 shrink-0" />
            <span className="text-violet-300 text-xs sm:text-sm font-medium tracking-wide">
              Smart Education Ecosystems
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight text-white tracking-tight px-2 sm:px-0"
          >
            Empowering Institutes with{" "}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 via-indigo-500 to-violet-600">
              Next-Gen Management ERPs
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0"
          >
            Automated student enrollment, fee management, high-performance learning portals, and teacher-parent communication systems built for modern institutes in India.
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

"use client";

import { Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection({ onConsultClick }: { onConsultClick?: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0A0012]">

      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Floating stat bubbles */}
        {[
          { x: "12%", y: "28%", delay: 0, text: "GPS: Live Tracking" },
          { x: "78%", y: "22%", delay: 1.2, text: "Attendance Marked ✓" },
          { x: "8%", y: "62%", delay: 2.4, text: "Payroll Processed" },
          { x: "82%", y: "58%", delay: 0.8, text: "Field Agent Online" },
        ].map((bubble, i) => (
          <motion.div
            key={i}
            className="absolute hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-blue-500/20 backdrop-blur-sm"
            style={{ left: bubble.x, top: bubble.y }}
            animate={{ y: [0, -10, 0], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, delay: bubble.delay, ease: "easeInOut" }}
          >
            <div className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="text-[11px] text-gray-300 whitespace-nowrap">{bubble.text}</span>
          </motion.div>
        ))}

        {/* Pulsing glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-blue-400/20"
              animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 1.3, ease: "easeOut" }}
              style={{ width: 120, height: 120 }}
            />
          ))}
        </div>

        {/* Rising particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-400"
              style={{
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                left: `${10 + Math.random() * 80}%`,
                bottom: "-4%",
                opacity: 0,
              }}
              animate={{
                y: [0, -(300 + Math.random() * 400)],
                opacity: [0, 0.7, 0],
                x: [0, (Math.random() - 0.5) * 60],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 6,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        <motion.div
          className="absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-400/20 to-transparent"
          animate={{ top: ["-5%", "105%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        <div className="absolute top-0 left-[20%] w-[500px] h-[500px] bg-blue-600/15 blur-[140px] rounded-full" />
        <div className="absolute top-0 right-[20%] w-[400px] h-[400px] bg-cyan-500/8 blur-[140px] rounded-full" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md mb-8 max-w-max mx-auto"
          >
            <Users size={16} className="text-blue-400 shrink-0" />
            <span className="text-blue-300 text-xs sm:text-sm font-medium tracking-wide">
              HRMS & Field Tracking Software
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-white tracking-tight"
          >
            Manage Your Workforce & <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-blue-500">
              Track Field Agents in Real-Time
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0"
          >
            GPS-powered attendance, live field agent tracking, automated payroll, and complete HR operations — all in one platform built for India&apos;s growing workforce.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
          >
            <button
              onClick={onConsultClick}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-blue-500 to-cyan-500 hover:scale-105 rounded-full text-white font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 tracking-wide whitespace-nowrap"
            >
              Get a Free Demo
              <ArrowRight size={20} />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

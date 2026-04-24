"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Rocket, Zap, Target } from 'lucide-react';

const PuzzleAssembly = ({ images, color = "purple" }: { images: string[], color?: "purple" | "blue" }) => {
  const colorClasses = color === "purple" 
    ? "from-purple-600/40 to-pink-600/40 border-purple-500/30 shadow-purple-500/10" 
    : "from-blue-600/40 to-emerald-600/40 border-blue-500/30 shadow-blue-500/10";
    
  return (
    <div className="relative w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] flex items-center justify-center">
      {/* Background Atmosphere Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-${color === "purple" ? "purple" : "blue"}-500/[0.05] blur-[120px] -z-10`} />

      <div className="relative w-full h-full">
        {/* Piece 1: Main Center Top */}
        <motion.div
          initial={{ x: -100, y: -100, opacity: 0, rotate: -20, scale: 0.5 }}
          whileInView={{ x: 0, y: 0, opacity: 1, rotate: 45, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 40, damping: 10, delay: 0.1 }}
          className="absolute top-[10%] left-[25%] w-1/2 h-1/2 rotate-45 overflow-hidden border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 rounded-2xl"
        >
          <motion.img 
            animate={{ scale: [1.5, 1.6, 1.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            src={images[0]} 
            alt="Main Puzzle Image" 
            className="-rotate-45 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-linear-to-tr from-purple-500/10 to-transparent pointer-events-none" />
        </motion.div>

        {/* Piece 2: Left Wing */}
        <motion.div
          initial={{ x: -150, y: 50, opacity: 0, rotate: -40 }}
          whileInView={{ x: 0, y: 0, opacity: 1, rotate: 45 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 40, damping: 12, delay: 0.3 }}
          className="absolute top-[40%] left-[5%] w-[35%] h-[35%] rotate-45 overflow-hidden border border-white/10 shadow-3xl z-10 rounded-xl bg-slate-900"
        >
          <img src={images[1]} alt="Side Puzzle 1" className="-rotate-45 scale-[1.7] w-full h-full object-cover grayscale opacity-60 hover:opacity-100 transition-opacity" />
        </motion.div>

        {/* Piece 3: Right Wing */}
        <motion.div
          initial={{ x: 150, y: -50, opacity: 0, rotate: 40 }}
          whileInView={{ x: 0, y: 0, opacity: 1, rotate: 45 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 40, damping: 12, delay: 0.5 }}
          className="absolute top-[15%] right-[5%] w-[35%] h-[35%] rotate-45 overflow-hidden border border-white/10 shadow-3xl z-10 rounded-xl bg-slate-900"
        >
          <img src={images[2]} alt="Side Puzzle 2" className="-rotate-45 scale-[1.7] w-full h-full object-cover grayscale opacity-60 hover:opacity-100 transition-opacity" />
        </motion.div>

        {/* Piece 4: Integrated Technical Accent */}
        <motion.div
          initial={{ x: 100, y: 150, opacity: 0, scale: 0.5 }}
          whileInView={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 45 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 40, damping: 12, delay: 0.7 }}
          className={`absolute bottom-[10%] right-[20%] w-[28%] h-[28%] rotate-45 border border-white/20 bg-linear-to-br ${colorClasses} backdrop-blur-xl z-30 flex items-center justify-center rounded-lg shadow-[0_0_30px_rgba(168,85,247,0.3)]`}
        >
          <div className="-rotate-45">
             <motion.div
               animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
               transition={{ duration: 3, repeat: Infinity }}
             >
                {color === "purple" ? <Zap size={24} className="text-white" /> : <Target size={24} className="text-white" />}
             </motion.div>
          </div>
        </motion.div>

        {/* Central Snap-Point Decoration */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1.2, type: "spring" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rotate-45 border-2 border-white/30 bg-[#0A0012] z-40 flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.2)]"
        >
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
        </motion.div>
      </div>
    </div>
  );
};

export default function MissionSection() {
  const missionImages = [
    "/images/mission_vision/m1.png",
    "/images/mission_vision/m2.png",
    "/images/mission_vision/m3.png",
  ];
  
  const visionImages = [
    "/images/mission_vision/v1.png",
    "/images/mission_vision/v2.png",
    "/images/mission_vision/v3.png",
  ];

  return (
    <div className="py-24 sm:py-32 md:py-48 flex flex-col items-center justify-center px-4 md:px-8 relative overflow-hidden" style={{ backgroundColor: '#0A0012' }}>
      
      <div className="max-w-7xl w-full relative z-10 space-y-40 md:space-y-64">
        
        {/* Mission Row: Content Untouched, Graphics Repetitive Trigger */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-8"
            >
              <Sparkles size={16} className="text-purple-400" />
              <span className="text-purple-300 text-xs sm:text-sm font-medium tracking-wide">Our Mission</span>
            </motion.div>
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                Our Mission – Simplifying Business Through <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">Technology</span>
              </h2>
              <div className="space-y-6 text-gray-400 text-lg md:text-xl leading-relaxed font-light">
                <p>Our mission is to <span className="text-white font-medium">empower businesses</span> with smart, scalable, and easy-to-use software solutions that simplify operations and drive growth.</p>
                <p>We aim to <span className="text-white font-medium">bridge the gap</span> between business challenges and technology by creating solutions that are powerful, practical, and user-friendly.</p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
             <PuzzleAssembly images={missionImages} color="purple" />
          </div>
        </div>

        {/* Vision Row: Content Untouched, Graphics Repetitive Trigger */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 flex justify-center lg:justify-start order-2 lg:order-1">
             <PuzzleAssembly images={visionImages} color="purple" />
          </div>
          <div className="flex-1 text-center lg:text-left order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-8"
            >
              <Target size={16} className="text-purple-400" />
              <span className="text-purple-300 text-xs sm:text-sm font-medium tracking-wide">Our Vision</span>
            </motion.div>
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                Our Vision – Becoming a <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">Global AI Solution Provider</span>
              </h2>
              <div className="space-y-6 text-gray-400 text-lg md:text-xl leading-relaxed font-light">
                <p>We envision becoming a <span className="text-white font-medium">global leader</span> in AI-powered business solutions, helping organizations across <span className="text-white">India, USA, UK, and Canada</span> transform their operations through innovation and technology.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

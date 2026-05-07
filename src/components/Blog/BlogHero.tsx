"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SparklesCore } from '@/components/ui/sparkles';

export default function BlogHero() {
  return (
    <div className="relative w-full py-6 sm:py-8 md:py-10 overflow-hidden" style={{ backgroundColor: '#0A0012' }}>
      {/* Sparkles Background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-purple-900/20 via-transparent to-[#0A0012]"></div>
      <div className="absolute inset-0 bg-linear-to-t from-[#0A0012] via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center mt-16 sm:mt-20 px-4 sm:px-6 md:px-8 py-4">
        <div className="text-center max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
              <span className="text-white">Blog & Insights</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-xs sm:text-base md:text-xl mb-5 sm:mb-6 md:mb-8 max-w-2xl mx-auto px-2 sm:px-4"
          >
            Discover the latest trends, tips, and insights in digital innovation
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-0.5 w-20 sm:w-24 md:w-32 mx-auto bg-linear-to-r from-purple-500 to-pink-500"
          ></motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-[#0A0012] to-transparent"></div>
    </div>
  );
}

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SparklesCore } from '@/components/ui/sparkles';
import { Sparkles, Briefcase, Palette, Cpu, Zap } from 'lucide-react';

export default function HeroServices() {
  const services = [
    {
      id: 1,
      title: 'Consulting',
      icon: Briefcase
    },
    {
      id: 2,
      title: 'Design',
      icon: Palette
    },
    {
      id: 3,
      title: 'Development',
      icon: Cpu
    },
    {
      id: 4,
      title: 'Optimization',
      icon: Zap
    }
  ];

  return (
    <div className="relative pt-24 pb-12 w-full overflow-hidden" style={{ backgroundColor: '#0A0012' }}>
      {/* Sparkles Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
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

      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-8"
          >
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-purple-300 text-xs sm:text-sm font-medium tracking-wide">
              Strategic Service Ecosystem
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight tracking-tight text-white"
          >
            One team. <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">
              Infinite capabilities.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-base md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            From vision to execution — Vanutech Media crafts bold digital experiences through strategy, design, code, and beyond.
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100px' }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-linear-to-r from-purple-500 to-transparent rounded-full mx-auto"
          />
        </div>

        {/* Services Grid - Restoring original solid style */}
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="group relative"
              >
                <div className="text-center">
                  {/* Service Title */}
                  <h3 className="text-white text-lg sm:text-xl font-bold mb-6 sm:mb-8 transition-colors group-hover:text-purple-400">
                    {service.title}
                  </h3>

                  {/* Icon Container */}
                  <div className="relative inline-block">
                    {/* Glow Effect */}
                    <div 
                      className="absolute inset-0 rounded-2xl sm:rounded-3xl blur-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-purple-600 to-indigo-600"
                    ></div>

                    {/* Icon Box */}
                    <div 
                      className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 cursor-pointer bg-linear-to-br from-purple-600 to-indigo-600 shadow-2xl shadow-purple-500/20"
                    >
                      <service.icon 
                        size={32} 
                        className="text-white sm:w-12 sm:h-12"
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0A0012] to-transparent pointer-events-none" />
    </div>
  );
}
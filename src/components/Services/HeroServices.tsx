"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SparklesCore } from '@/components/ui/sparkles';
import { MessageSquare, Box, Code, TrendingUp } from 'lucide-react';

export default function HeroServices() {
  const services = [
    {
      id: 1,
      title: 'Consulting',
      icon: MessageSquare
    },
    {
      id: 2,
      title: 'Design',
      icon: Box
    },
    {
      id: 3,
      title: 'Development',
      icon: Code
    },
    {
      id: 4,
      title: 'Optimization',
      icon: TrendingUp
    }
  ];

  return (
    <div className="relative py-10 w-full overflow-hidden" style={{ backgroundColor: '#0A0012' }}>
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
      <div className="relative z-10 flex flex-col items-center justify-center my-20 px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-white">One team.</span>
              <br />
              <span className="text-white">Infinite capabilities.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto"
          >
            From vision to execution — Vanutech Media crafts bold digital experiences through strategy, design, code, and beyond.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-0.5 w-20 sm:w-24 md:w-32 mx-auto bg-linear-to-r from-purple-500 to-pink-500"
          ></motion.div>
        </div>

        {/* Services Grid */}
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className="group relative"
              >
                <div className="text-center">
                  {/* Service Title */}
                  <h3 className="text-white text-xs sm:text-xl font-semibold mb-6 sm:mb-8">
                    {service.title}
                  </h3>

                  {/* Icon Container */}
                  <div className="relative inline-block">
                    {/* Glow Effect */}
                    <div 
                      className="absolute inset-0 rounded-xl sm:rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-purple-600 to-indigo-600"
                    ></div>

                    {/* Icon Box */}
                    <div 
                      className="relative w-15 h-15 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 cursor-pointer bg-linear-to-br from-purple-600 to-indigo-600"
                    >
                      <service.icon 
                        size={30} 
                        className="text-white sm:w-12 sm:h-12"
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none -z-10"
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-linear-to-t from-[#0A0012] to-transparent"></div>
    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function OurBeginning() {
  return (
    <div className="py-24 sm:py-32 md:py-40 flex items-center justify-center px-4 md:px-8 relative overflow-hidden" style={{ backgroundColor: '#0A0012' }}>
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-purple-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Large 2021 Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative shrink-0"
          >
            {/* Pulsating background glow */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -inset-10 bg-purple-600/10 blur-[80px] rounded-full -z-10"
            />

            <motion.div
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-[100px] sm:text-[140px] md:text-[180px] lg:text-[230px] font-black leading-none select-none tracking-tighter cursor-default"
              style={{
                WebkitTextStroke: '1.5px transparent',
                backgroundImage: 'linear-gradient(to right, #A855F7, #EC4899, #A855F7)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                opacity: 0.4
              }}
            >
              2016
            </motion.div>

            {/* Sharp stroke overlay for extra definition */}
            <div
              className="absolute inset-0 text-[100px] sm:text-[140px] md:text-[180px] lg:text-[230px] font-black leading-none select-none tracking-tighter pointer-events-none"
              style={{
                WebkitTextStroke: '1px rgba(168, 85, 247, 0.3)',
                color: 'transparent',
              }}
            >
              2016
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-8"
            >
              <Sparkles size={16} className="text-purple-400" />
              <span className="text-purple-300 text-xs sm:text-sm font-medium tracking-wide">
                Our Story
              </span>
            </motion.div>

            <div className="space-y-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight"
              >
                Our Journey – From Curiosity to Creating <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">Impact</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6 text-gray-400 text-lg md:text-xl leading-relaxed font-light max-w-3xl mx-auto lg:mx-0"
              >
                <p>
                  We started with a singular vision — to bridge the gap between complex business challenges and intelligent technological solutions.
                </p>
                <p>
                  What began as a passionate initiative in 2016 has transformed into a high-impact software powerhouse, empowering <span className="text-white font-medium">200+ global brands</span>. From stealth-mode startups to industrial giants, we refine operations and amplify growth through data-driven precision.
                </p>
                <p>
                  Today, Vanurtech stands at the forefront of the AI revolution, driven by an unwavering commitment to excellence and business transformation.
                </p>
              </motion.div>

              {/* Decorative line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100px' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-1 bg-linear-to-r from-purple-500 to-transparent rounded-full hidden lg:block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

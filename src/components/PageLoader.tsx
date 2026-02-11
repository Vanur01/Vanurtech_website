"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [particlePositions, setParticlePositions] = useState<{x: number, y: number}[]>([]);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    // Only run on client
    if (typeof window !== "undefined") {
      const positions = Array.from({ length: 20 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }));
      setParticlePositions(positions);
    } else {
      // SSR fallback: center positions
      setParticlePositions(Array.from({ length: 20 }, () => ({ x: 0, y: 0 })));
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-9999 flex items-center justify-center"
          style={{ backgroundColor: '#0A0012' }}
        >
          {/* Animated Background Gradients */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"
            />
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Container with Pulse Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 1
              }}
              className="relative mb-8"
            >
              {/* Outer Rotating Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 -m-6"
              >
                <div className="w-full h-full border-2 border-transparent border-t-purple-500 border-r-purple-600 rounded-full" />
              </motion.div>

              {/* Middle Rotating Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 -m-4"
              >
                <div className="w-full h-full border-2 border-transparent border-b-purple-400 border-l-purple-600 rounded-full" />
              </motion.div>

              {/* Logo with Glow Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-32 h-32 flex items-center justify-center"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-purple-600 rounded-full blur-xl opacity-50" />
                
                {/* Logo Image */}
                <div className="relative w-24 h-24 z-10">
                  <Image
                    src="/images/logo-1.png"
                    alt="VanurTech Media"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Company Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-8"
            >
              {/* <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-wider">
                VanurTech Media
              </h1> */}
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="w-64 sm:w-80"
            >
              {/* Progress Bar Background */}
              <div className="relative h-1 bg-purple-900/30 rounded-full overflow-hidden">
                {/* Animated Gradient Background */}
                <motion.div
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-linear-to-r from-transparent via-purple-500/50 to-transparent"
                />
                
                {/* Actual Progress */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full bg-linear-to-r from-purple-600 via-purple-600 to-purple-600 rounded-full"
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                  />
                </motion.div>
              </div>

              {/* Progress Percentage */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-center"
              >
                <span className="text-purple-400 text-sm font-medium">
                  {progress}%
                </span>
              </motion.div>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-6 flex items-center gap-2"
            >
              <span className="text-gray-400 text-sm">Loading</span>
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="flex gap-1"
              >
                <span className="text-gray-400">.</span>
                <span className="text-gray-400">.</span>
                <span className="text-gray-400">.</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Particles Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particlePositions.map((pos, i) => (
              <motion.div
                key={i}
                initial={{
                  x: pos.x,
                  y: pos.y,
                }}
                animate={{
                  y: [pos.y, -100],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                className="absolute w-1 h-1 bg-purple-500 rounded-full"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Trophy, Users, Clock, Smile } from 'lucide-react';

export default function AboutStatsSection() {
  const [counts, setCounts] = useState({
    years: 0,
    results: 0,
    projects: 0,
    hours: 0
  });

  useEffect(() => {
    // Animate counters
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        years: Math.floor(10 * progress),
        results: Math.floor(99 * progress),
        projects: Math.floor(300 * progress),
        hours: Math.floor(50000 * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts({
          years: 10,
          results: 99,
          projects: 300,
          hours: 50000
        });
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: <Clock size={24} />, value: `${counts.years}+`, label: 'Years of Experience' },
    { icon: <Trophy size={24} />, value: `${counts.projects}+`, label: 'Successful Projects' },
    { icon: <Clock size={24} />, value: `${counts.hours.toLocaleString()}+`, label: 'Hours of Dev' },
    { icon: <Smile size={24} />, value: `${counts.results}%`, label: 'Satisfaction Rate' }
  ];

  return (
    <div className="py-24 sm:py-32 flex items-center justify-center px-4 sm:px-6 md:px-8 relative overflow-hidden" style={{ backgroundColor: '#07000D' }}>
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full relative z-10">
        {/* Stats Grid - Top Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 mb-32 border-b border-white/5 pb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`text-center px-4 ${index !== stats.length - 1 ? 'lg:border-r border-white/10' : ''}`}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white via-white to-purple-400">
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs md:text-sm uppercase tracking-widest font-bold opacity-70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Who We Are - Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side - Premium Image Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-px bg-linear-to-r from-purple-500 via-pink-500 to-purple-500 rounded-[2.5rem] opacity-100 transition-opacity duration-700 blur-[1px]" />

            <div className="relative rounded-[2.4rem] overflow-hidden bg-[#0A0012]">
              <img
                src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=1000&h=800&auto=format&fit=crop"
                alt="AI Development"
                className="w-full h-[350px] md:h-[550px] object-cover transition-all duration-1000 hover:scale-110 shadow-2xl"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0A0012] via-transparent to-transparent opacity-80" />

              {/* Floating Excellence Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center gap-5"
              >
                <div className="relative">
                  <div className="h-14 w-14 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 p-2 flex items-center justify-center">
                    <img
                      src="/images/logo-1.png"
                      alt="Vanurtech Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-white font-bold tracking-tight text-sm sm:text-base">Software Excellence & AI Innovation</div>
                  <div className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-black">
                    Vanurtech Media
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Description Text */}
          <div className="space-y-10">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md"
              >
                <Sparkles size={16} className="text-purple-400" />
                <span className="text-purple-300 text-xs sm:text-sm font-medium tracking-wide">
                  About Vanurtech
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight"
              >
                Who We Are – <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">
                  AI-Powered Business Solutions
                </span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed font-light"
            >
              <p>
                Vanurtech Media is not just another development agency — we are your <span className="text-white font-medium">Strategic Growth Partner</span>. Based in the heart of India’s tech landscape, we empower businesses to leapfrog competition through AI-driven intelligence.
              </p>
              <p>
                From custom CRM ecosystems that close deals faster to SaaS platforms that redefine industries, we build software that <span className="text-purple-400 font-medium italic">actually works</span> for your bottom line.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="p-4 rounded-xl bg-white/2 border border-white/5 hover:border-purple-500/30 transition-colors">
                  <div className="text-purple-400 font-bold mb-1">AI Driven</div>
                  <div className="text-xs text-gray-500">Intelligent workflows that scale operations automatically.</div>
                </div>
                <div className="p-4 rounded-xl bg-white/2 border border-white/5 hover:border-purple-500/30 transition-colors">
                  <div className="text-pink-400 font-bold mb-1">Impact Focused</div>
                  <div className="text-xs text-gray-500">Measurable results that drive revenue and efficiency.</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}



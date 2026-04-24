import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, XCircle, ArrowRight, PhoneCall, MessageCircle, Zap } from "lucide-react";

export default function ImpactStats({ onConsultClick }: { onConsultClick?: () => void }) {
  const comparisons = [
    {
      problem: "Poor lead management",
      solution: (
        <>
          Custom{" "}
          <Link
            href="/crm-development-company-india"
            className="hover:text-purple-400 underline decoration-purple-500/30 underline-offset-4"
          >
            CRM
          </Link>{" "}
          for Lead & Sales Management
        </>
      ),
    },
    {
      problem: "Manual follow-ups & missed opportunities",
      solution: (
        <>
          <Link
            href="/ai-business-automation-india"
            className="hover:text-purple-400 underline decoration-purple-500/30 underline-offset-4"
          >
            AI
          </Link>{" "}
          Calling & Follow-up Automation
        </>
      ),
    },
    {
      problem: "Lack of automation in sales & operations",
      solution: (
        <>
          Custom Business Software &{" "}
          <Link
            href="/saas-development-company-india"
            className="hover:text-purple-400 underline decoration-purple-500/30 underline-offset-4"
          >
            SaaS
          </Link>{" "}
          Solutions
        </>
      ),
    },
    {
      problem: "No clear visibility of business performance",
      solution: "Real-Time Digital Product Analytics",
    },
  ];

  return (
    <section className="py-10 sm:py-14 md:py-16 relative overflow-hidden" style={{ backgroundColor: "#0B0011" }}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 sm:mb-14 md:mb-16">
          {/* Left Side - Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm">
              <Sparkles size={14} className="text-purple-500 shrink-0" />
              <span className="text-purple-300 text-xs sm:text-sm font-medium tracking-tight">
                Built for Business Growth. Powered by AI & Experience.
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Helping Businesses Solve <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">Real Operational Challenges</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
              With over 10+ years of experience, we specialize in building intelligent software solutions that solve real-world business challenges from lead management to operations automation.
            </p>

            {/* Replacement Contact Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button
                onClick={onConsultClick}
                className="group flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-linear-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] active:scale-95 text-sm sm:text-base"
              >
                <PhoneCall size={16} className="group-hover:rotate-12 transition-transform shrink-0" />
                Get a Quick Call Back
              </button>
              <Link
                href="https://wa.me/7978874959?text=Hi%20Vanurmedia!%20I'm%20interested%20in%20your%20services.%20Could%20you%20share%20more%20details?"
                target="_blank"
                className="group flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-semibold transition-all hover:bg-white/10 active:scale-95 text-sm sm:text-base"
              >
                <MessageCircle size={16} className="shrink-0" />
                Chat on WhatsApp
              </Link>
            </div>
          </div>

          {/* Right Side - Visual Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="group p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/5 bg-white/2 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2 group-hover:scale-110 transition-transform origin-left">300+</h3>
              <p className="text-purple-300 text-sm sm:text-lg">Projects Delivered</p>
            </div>

            <div className="group p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/5 bg-white/2 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 sm:mt-12">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2 group-hover:scale-110 transition-transform origin-left">50k+</h3>
              <p className="text-purple-300 text-sm sm:text-lg">Hours of Development</p>
            </div>

            <div className="group p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/5 bg-white/2 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2 group-hover:scale-110 transition-transform origin-left">99%</h3>
              <p className="text-purple-300 text-sm sm:text-lg">Client Satisfaction</p>
            </div>

            <div className="group p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/5 bg-white/2 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 sm:mt-12">
              <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-1 sm:mb-2 group-hover:scale-110 transition-transform origin-left">AI-Driven</h3>
              <p className="text-purple-300 text-sm sm:text-lg">Business Solutions</p>
            </div>
          </div>
        </div>

        {/* Problem -> Solution Section Reverted to Two Boxes */}
        <div className="mt-12 border-t border-white/5 pt-12">
          <div className="text-center mb-12 space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm mb-6 w-fit mx-auto">
                <Zap size={14} className="text-purple-400 fill-purple-400" />
                <span className="text-purple-400 text-xs font-bold tracking-wide">
                  The Business Evolution
                </span>
              </div>
            </motion.div>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Bridge the Gap: <br className="md:hidden" />
              From <span className="text-gray-500 underline decoration-red-500/30 underline-offset-4 md:underline-offset-8">Chaos</span> to{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">Precision</span>
            </h3>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Stop fighting manual processes. We automate your operational hurdles so you can focus on scaling your vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Struggling Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-white/2 border border-red-500/10 backdrop-blur-sm relative overflow-hidden group hover:bg-white/5 transition-colors"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl rounded-full" />

              <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20 shrink-0">
                  <XCircle size={20} className="text-red-500" />
                </div>
                The Operational Pain:
              </h4>

              <ul className="space-y-4 sm:space-y-6">
                {comparisons.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 sm:gap-4 text-gray-400 text-base sm:text-lg group/item transition-colors hover:text-gray-300"
                  >
                    <span className="mt-2.5 w-2 h-2 rounded-full bg-red-500/30 shrink-0 group-hover/item:scale-125 transition-transform" />
                    {item.problem}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Solution Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group lg:mt-6"
            >
              {/* Animated Glow Border (Beam Effect) */}
              <div className="absolute -inset-[2px] bg-linear-to-r from-purple-600 via-pink-500 to-purple-600 rounded-[2.6rem] opacity-30 group-hover:opacity-100 blur-[2px] transition-opacity duration-500 animate-pulse" />

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-linear-to-br from-[#12001A] to-[#0B0011] border border-purple-500/20 backdrop-blur-xl overflow-hidden shadow-2xl shadow-purple-500/20"
              >
                {/* Floating Glow Orbs */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/20 blur-[80px] rounded-full animate-pulse" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-600/10 blur-[80px] rounded-full animate-pulse" />

                <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.3)] shrink-0">
                    <CheckCircle2 size={22} className="text-purple-400" />
                  </div>
                  Your Custom Solution:
                </h4>

                <ul className="space-y-4 sm:space-y-6">
                  {comparisons.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (0.1 * idx) }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 sm:gap-4 text-gray-100 text-base sm:text-lg group/item"
                    >
                      <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 group-hover/item:bg-purple-500/30 group-hover/item:scale-110 group-hover/item:border-purple-400 transition-all duration-300">
                        <ArrowRight size={18} className="text-purple-400 group-hover/item:translate-x-1 transition-transform" />
                      </div>
                      <span className="font-bold tracking-tight text-white group-hover/item:text-purple-300 transition-colors">
                        {item.solution}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

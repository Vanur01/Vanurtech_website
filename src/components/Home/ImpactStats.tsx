import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, PhoneCall, MessageCircle } from "lucide-react";

export default function ImpactStats({
  onConsultClick,
}: {
  onConsultClick?: () => void;
}) {
  return (
    <section
      className="py-10 sm:py-14 md:py-16 relative overflow-hidden"
      style={{ backgroundColor: "#0B0011" }}
    >
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
              Helping Businesses Solve{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">
                Real Operational Challenges
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
              With over 10+ years of experience, we specialize in building
              intelligent software solutions that solve real-world business
              challenges from lead management to operations automation.
            </p>

            {/* Replacement Contact Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button
                onClick={onConsultClick}
                className="group flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-linear-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] active:scale-95 text-sm sm:text-base"
              >
                <PhoneCall
                  size={16}
                  className="group-hover:rotate-12 transition-transform shrink-0"
                />
                Get a Quick Call Back
              </button>
              <Link
                href="https://wa.me/919114667215?text=Hi%20Vanurmedia!%20I'm%20interested%20in%20your%20services.%20Could%20you%20share%20more%20details?"
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
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2 group-hover:scale-110 transition-transform origin-left">
                300+
              </h3>
              <p className="text-purple-300 text-sm sm:text-lg">
                Projects Delivered
              </p>
            </div>

            <div className="group p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/5 bg-white/2 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 sm:mt-12">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2 group-hover:scale-110 transition-transform origin-left">
                50k+
              </h3>
              <p className="text-purple-300 text-sm sm:text-lg">
                Hours of Development
              </p>
            </div>

            <div className="group p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/5 bg-white/2 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2 group-hover:scale-110 transition-transform origin-left">
                99%
              </h3>
              <p className="text-purple-300 text-sm sm:text-lg">
                Client Satisfaction
              </p>
            </div>

            <div className="group p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/5 bg-white/2 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 sm:mt-12">
              <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-1 sm:mb-2 group-hover:scale-110 transition-transform origin-left">
                AI-Driven
              </h3>
              <p className="text-purple-300 text-sm sm:text-lg">
                Business Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Sparkles } from "lucide-react";

export default function ImpactStats() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-8"
      style={{ backgroundColor: "#0A0012" }}
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Side - Text */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-purple-500 mb-6 sm:mb-8">
            <Sparkles
              size={14}
              className="text-purple-500 sm:w-4 sm:h-4"
              fill="currentColor"
            />
            <span className="text-purple-400 italic text-xs sm:text-sm">Our Impact</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-white">Built for </span>
            <span className="text-purple-500 italic">Impact</span>
            <span className="text-white">,</span>
            <br className="hidden sm:block" />
            <span className="text-white">Backed by </span>
            <span className="text-purple-500 italic">Data</span>
          </h1>
        </div>

        {/* Right Side - Stats Grid */}
        <div className="space-y-4 sm:space-y-6">
          {/* First Row: Logo and Projects Delivered */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="w-full sm:w-[30%]">
              <div
                className="rounded-full p-1 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #ffffff 50%, #ffffff 100%)",
                }}
              >
                <div className="rounded-full p-4 sm:p-6 md:p-8 text-center relative overflow-hidden flex items-center justify-center bg-white/30">
                  <img
                    src="/images/logo-1.png"
                    alt="Logo"
                    className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16"
                  />
                </div>
              </div>
            </div>
            <div className="w-full sm:flex-1">
              <div
                className="rounded-full p-1 sm:p-1.5 relative overflow-hidden"
                style={{
                  background: "linear-gradient(90deg, #7B00E1 0%, #0F0520 50%, #0F0520 100%)",
                }}
              >
                <div
                  className="rounded-full p-4 sm:p-6 md:p-8 text-center relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, #1F0A3C 0%, #0F0520 100%)",
                  }}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white italic mb-1 sm:mb-2">
                    317+
                  </div>
                  <div className="text-purple-300 text-xs sm:text-sm md:text-base">Projects Delivered</div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row: Hours of Support and Client Growth */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="w-full sm:flex-1">
              <div
                className="rounded-full p-1 sm:p-1.5 relative overflow-hidden"
                style={{
                  background: "linear-gradient(90deg, #0F0520 0%, #0F0520 50%, #7B00E1 100%)",
                }}
              >
                <div
                  className="rounded-full p-4 sm:p-6 md:p-8 text-center relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, #1F0A3C 0%, #0F0520 100%)",
                  }}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white italic mb-1 sm:mb-2">
                    50k
                  </div>
                  <div className="text-purple-300 text-xs sm:text-sm md:text-base">Hours of Support</div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-[40%]">
              <div
                className="rounded-full p-1 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #7B00E1 0%, #7B00E1 50%, #7B00E1 100%)",
                }}
              >
                <div
                  className="rounded-full p-4 sm:p-6 md:p-8 text-center relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, #1F0A3C 0%, #0F0520 100%)",
                  }}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white italic mb-1 sm:mb-2">
                    75%
                  </div>
                  <div className="text-purple-300 text-xs sm:text-sm md:text-base">Client Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

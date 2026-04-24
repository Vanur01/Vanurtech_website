"use client";

import React from "react";
import { Sparkles, Building2, Store, Cog, Megaphone, TrendingUp } from "lucide-react";
import { CometCard } from "@/components/ui/comet-card";

const useCases = [
  {
    title: "Sales & Revenue Ops",
    description: "Automate follow-ups and instantly qualify inbound leads using intelligent AI agents that never sleep.",
    icon: TrendingUp,
  },
  {
    title: "Real Estate",
    description: "Deploy virtual property assistants that capture buyer preferences and answer queries instantly, 24/7.",
    icon: Building2,
  },
  {
    title: "Service Businesses",
    description: "Streamline daily operations, manage appointments, and handle customer queries efficiently.",
    icon: Cog,
  },
  {
    title: "Marketing Teams",
    description: "Generate personalized campaigns at scale and analyze customer behavior deeply.",
    icon: Megaphone,
  }
];

export function AIUseCases() {
  return (
    <div className="py-12 sm:py-16 bg-[#0A0012] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-8">
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-purple-300 text-xs sm:text-sm font-medium tracking-wide">
              Where Our AI Solutions Make Impact
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight tracking-tight">
            AI Built for{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">
              Modern Workflows
            </span>
          </h2>

          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl leading-relaxed">
            From seamless customer support to intelligent lead generation, our AI agents adapt to your industry and drive measurable results.
          </p>
        </div>

        {/* Feature Grid - Using CometCard for consistency */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 items-stretch">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;

            return (
              <CometCard key={index} className="h-full [&>div]:h-full">
                <div className="p-5 sm:p-8 rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 hover:border-purple-600 transition-all duration-500 h-full relative group overflow-hidden flex flex-col">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-purple-500/10">
                      <Icon size={20} className="text-purple-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-bold text-lg sm:text-xl mb-2 sm:mb-3 leading-tight group-hover:text-purple-300 transition-colors">
                        {useCase.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                  {/* Subtle Neon Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
              </CometCard>
            );
          })}
        </div>

      </div>
    </div>
  );
}

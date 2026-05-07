"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
export default function WorkflowSection() {
  const data = [
    {
      title: "We Listen, Learn & Strategize",
      icon: (
        <Image
          src="/images/logo-1.png"
          alt="Logo"
          width={20}
          height={20}
          className="h-5 w-5 object-contain"
        />
      ),
      content: (
        <div>
          <div className="mb-6 sm:mb-8 rounded-xl sm:rounded-2xl border border-purple-900/30 bg-linear-to-br from-purple-950/20 to-transparent p-4 sm:p-6">
            <p className="text-sm text-gray-300 md:text-base leading-relaxed">
              Every project begins with deep research. Understanding your specific goals, audience, and market challenges comes first. We listen to your vision and learn about your industry to build a rock-solid strategic roadmap that ensures long-term efficiency and success.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
            <Image
              src="/images/home/WhatsApp Image 2026-04-08 at 3.56.00 PM.webp"
              alt="Understand & Strategize"
              width={800}
              height={400}
              className="h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96 w-full rounded-2xl sm:rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "We Design Experiences That Work",
      icon: (
        <Image
          src="/images/logo-1.png"
          alt="Logo"
          width={20}
          height={20}
          className="h-5 w-5 object-contain"
        />
      ),
      content: (
        <div>
          <div className="mb-6 sm:mb-8 rounded-xl sm:rounded-2xl border border-purple-900/30 bg-linear-to-br from-purple-950/20 to-transparent p-4 sm:p-6">
            <p className="text-sm text-gray-300 md:text-base leading-relaxed">
              We craft clean UI, intuitive UX, and brand-aligned visuals that don't just look stunning but are engineered for performance. Our focus is on creating seamless user journeys that drive measurable engagement and align with your brand's digital identity.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
            <Image
              src="/images/home/WhatsApp Image 2026-04-08 at 3.56.02 PM.webp"
              alt="Design Experiences"
              width={800}
              height={400}
              className="h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96 w-full rounded-2xl sm:rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "We Build, Test & Launch",
      icon: (
        <Image
          src="/images/logo-1.png"
          alt="Logo"
          width={20}
          height={20}
          className="h-5 w-5 object-contain"
        />
      ),
      content: (
        <div>
          <div className="mb-6 sm:mb-8 rounded-xl sm:rounded-2xl border border-purple-900/30 bg-linear-to-br from-purple-950/20 to-transparent p-4 sm:p-6">
            <p className="mb-3 sm:mb-4 text-sm text-gray-300 md:text-base leading-relaxed">
              Robust development using cutting-edge technologies. We build scalable architectures that grow with your business, followed by rigorous testing and deployment strategies to ensure zero-friction performance.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-purple-500 shadow-[0_0_5px_rgba(168,85,247,0.5)]"></div>
                <span>Development with elite technologies (Next.js, AI, Cloud)</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-pink-500 shadow-[0_0_5px_rgba(236,72,153,0.5)]"></div>
                <span>Comprehensive device & browser stress testing</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.5)]"></div>
                <span>Strategic launch and continuous optimization support</span>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
            <Image
              src="/images/home/WhatsApp Image 2026-04-08 at 3.56.04 PM.webp"
              alt="Build, Test & Launch"
              width={800}
              height={400}
              className="h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96 w-full rounded-2xl sm:rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-[#0B0011]">
      {/* Header Section */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:px-8 lg:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-8"
        >
          <Sparkles size={16} className="text-purple-400" />
          <span className="text-purple-300 text-xs sm:text-sm font-medium tracking-wide">
            Our Workflow
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-6 max-w-4xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
        >
          We Make It <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">
            Happen Every Day
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl text-sm sm:text-base md:text-xl text-gray-300 leading-relaxed font-sans"
        >
          Our proven transformation process bridges the gap between complex business challenges and scalable automation. From first audit to global launch, we ensure precision engineering and absolute clarity at every single milestone.
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="pb-12">
        <Timeline data={data} />
      </div>
    </div>
  );
}

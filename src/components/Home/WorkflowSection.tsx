"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Megaphone, Palette, Rocket } from "lucide-react";
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
            <p className="text-sm text-gray-300 md:text-base">
              Understanding your goals, audience, and market comes first.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Team collaboration"
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
            <p className="text-sm text-gray-300 md:text-base">
             Clean UI, intuitive UX, and brand-aligned visuals
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1565687999932-cf35bd872e77?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Design process"
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
            <p className="mb-3 sm:mb-4 text-sm text-gray-300 md:text-base">
              Robust development, testing, and optimization for performance
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-purple-500"></div>
                <span>Development with cutting-edge technologies</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-pink-500"></div>
                <span>Comprehensive testing across all devices</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-500"></div>
                <span>Smooth deployment and post-launch support</span>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Development and launch"
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
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:pt-16 md:px-8 md:pt-20 lg:pt-10">
        <div className="mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-3 sm:px-4 py-2">
          <span className="text-xs sm:text-sm font-medium text-purple-400">
            Our Workflow
          </span>
        </div>
        <h2 className="mb-4 sm:mb-6 max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          We Make It Happen
        </h2>
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-gray-300">
          Our proven process ensures clarity, speed, and measurable results
        </p>
      </div>

      {/* Timeline */}
      <Timeline data={data} />
    </div>
  );
}

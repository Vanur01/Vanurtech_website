"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export default function TrustedBrands() {
  const clientImages = [
    // "/images/clients/1.png",
    "/images/clients/2.webp",
    "/images/clients/3.webp",
    "/images/clients/4.webp",
    "/images/clients/5.webp",
    "/images/clients/6.webp",
    "/images/clients/7.webp",
    "/images/clients/8.webp",
    "/images/clients/9.webp",
    "/images/clients/10.webp",
    "/images/clients/11.webp",
    "/images/clients/12.webp",
  ];

  const shuffleArray = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const images = isMounted ? shuffleArray(clientImages) : clientImages;
  const firstRow = images.slice(0, 6);
  const secondRow = images.slice(6, 12);

  return (
    <div
      className="flex flex-col items-center justify-center py-4"
      style={{ backgroundColor: "#0A0012" }}
    >
      {/* Plain <style> instead of <style jsx> no hydration mismatch */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 10s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 10s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-scroll-left { animation-duration: 15s; }
          .animate-scroll-right { animation-duration: 15s; }
        }
        .animate-scroll-left:hover,
        .animate-scroll-right:hover,
        .pause-on-hover:hover .animate-scroll-left,
        .pause-on-hover:hover .animate-scroll-right {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-full w-full">
        {/* Header Text */}
        <div className="text-center mx-4 sm:mx-5 mb-8 sm:mb-10 space-y-4 sm:space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm self-center"
          >
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            <span className="text-xs md:text-sm font-medium text-purple-300 tracking-wide">
              Trusted by 200+ Businesses Worldwide
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight lg:leading-[1.1]"
          >
            Build AI-Powered{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">
              Custom Software, CRM & SaaS Solutions
            </span>{" "}
            That Solve Real Business Problems
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light"
          >
            We design & build high-performance websites, mobile apps, and digital platforms that help businesses grow faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto text-left md:px-10"
          >
            {[
              { label: "Custom CRM for Lead & Sales Management", href: "/crm-development-company-india" },
              { label: "AI Calling & Follow-up Automation", href: "/ai-business-automation-india" },
              { label: "SaaS Platforms for Business Growth", href: "/saas-development-company-india" },
              { label: "Mobile & Web Apps for End-to-End Operations", href: "/website-development-company-india" },
            ].map((item, index) => (
              <Link key={index} href={item.href} className="flex items-center gap-3 group/link">
                <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 group-hover/link:scale-110 transition-transform" />
                <span className="text-gray-300 text-base md:text-lg hover:text-purple-400 transition-colors">
                  {item.label}
                </span>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Logo Scrolling Rows */}
      <div className="space-y-3 sm:space-y-4 overflow-hidden py-4 sm:py-6">
        {/* First Row - Scroll Right to Left */}
        <div className="relative flex max-w-[100vw] overflow-hidden group">
          <div className="flex animate-scroll-left w-max">
            {[...Array(4)].map((_, chunkIndex) => (
              <div key={chunkIndex} className="flex gap-3 sm:gap-4 pr-3 sm:pr-4">
                {firstRow.map((logo, index) => (
                  <div
                    key={index}
                    className="rounded-full border border-gray-200 bg-white p-2 sm:p-4 md:p-6 flex items-center justify-center hover:border-purple-400 hover:shadow-lg transition-all duration-300 cursor-pointer shrink-0 w-24 h-14 sm:w-40 sm:h-[60px] md:w-48 md:h-[72px]"
                  >
                    <div className="flex items-center justify-center w-full h-full relative group">
                      <Image
                        src={logo}
                        alt={`Client logo left`}
                        width={100}
                        height={50}
                        className="object-contain hover:scale-110 transition-transform duration-300 max-w-full max-h-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Scroll Left to Right */}
        <div className="relative flex max-w-[100vw] overflow-hidden group mt-3 sm:mt-4">
          <div className="flex animate-scroll-right w-max">
            {[...Array(4)].map((_, chunkIndex) => (
              <div key={chunkIndex} className="flex gap-3 sm:gap-4 pr-3 sm:pr-4">
                {secondRow.map((logo, index) => (
                  <div
                    key={index}
                    className="rounded-full border border-gray-200 bg-white p-2 sm:p-4 md:p-6 flex items-center justify-center hover:border-purple-400 hover:shadow-lg transition-all duration-300 cursor-pointer shrink-0 w-24 h-14 sm:w-40 sm:h-[60px] md:w-48 md:h-[72px]"
                  >
                    <div className="flex items-center justify-center w-full h-full relative group">
                      <Image
                        src={logo}
                        alt={`Client logo right`}
                        width={100}
                        height={50}
                        className="object-contain hover:scale-110 transition-transform duration-300 max-w-full max-h-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
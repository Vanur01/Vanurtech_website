"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Partners() {
  const clientImages = [
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
  const secondRow = images.slice(6, 11);

  return (
    <div
      className="flex items-center justify-center py-4"
      style={{ backgroundColor: "#0A0012" }}
    >
      <div className="max-w-full w-full">
        {/* Header Text */}
        <div className="text-center mx-5 mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-4 sm:mb-6 leading-tight">
            <span className="text-white">Partners </span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg">
            <span className="text-purple-400">✦</span> Trusted by{" "}
            <span className="text-white font-semibold">200+ innovators</span>{" "}
            worldwide. <span className="text-purple-400">✦</span>
          </p>
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
      </div>
    </div>
  );
}

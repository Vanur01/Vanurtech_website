"use client";

import React from "react";
import Image from "next/image";


export default function Partners() {
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

  // Shuffle array function
  const shuffleArray = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Split logos into two rows with random order
  const shuffledImages = shuffleArray(clientImages);
  const firstRow = shuffledImages.slice(0, 6);
  const secondRow = shuffledImages.slice(6, 12);

  return (
    <div
      className="flex items-center justify-center py-8"
      style={{ backgroundColor: "#0A0012" }}
    >
      <div className="max-w-full w-full">
        {/* Header Text */}
        <div className="text-center mx-5 mb-16">
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
        <div className="space-y-4 overflow-hidden">
          {/* First Row - Scroll Right to Left */}
          <div className="relative">
            <div className="flex animate-scroll-left gap-4">
              {[...firstRow, ...firstRow, ...firstRow].map((logo, index) => (
                <div
                  key={index}
                  className="rounded-full border border-gray-200 bg-white p-3 sm:p-4 md:p-6 flex items-center justify-center hover:border-purple-400 hover:shadow-lg transition-all duration-300 cursor-pointer group shrink-0 min-w-32 sm:min-w-40 md:min-w-48 min-h-12 md:min-h-[60px]"
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <Image
                      src={logo}
                      alt={`Client logo ${index + 1}`}
                      width={120}
                      height={60}
                      className="object-contain group-hover:scale-110 transition-transform duration-300 max-w-full max-h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Scroll Left to Right */}
          <div className="relative">
            <div className="flex animate-scroll-right gap-4">
              {[...secondRow, ...secondRow, ...secondRow].map((logo, index) => (
                <div
                  key={index}
                  className="rounded-full border border-gray-200 bg-white p-3 sm:p-4 md:p-6 flex items-center justify-center hover:border-purple-400 hover:shadow-lg transition-all duration-300 cursor-pointer group shrink-0 min-w-32 sm:min-w-40 md:min-w-48 min-h-12 md:min-h-[60px]"
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <Image
                      src={logo}
                      alt={`Client logo ${index + 7}`}
                      width={120}
                      height={60}
                      className="object-contain group-hover:scale-110 transition-transform duration-300 max-w-full max-h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }

          @keyframes scroll-right {
            0% {
              transform: translateX(-33.333%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .animate-scroll-left {
            animation: scroll-left 20s linear infinite;
          }

          .animate-scroll-right {
            animation: scroll-right 20s linear infinite;
          }

          /* Slower animation on small screens for better readability */
          @media (max-width: 640px) {
            .animate-scroll-left {
              animation-duration: 30s;
            }
            .animate-scroll-right {
              animation-duration: 30s;
            }
          }

          .animate-scroll-left:hover,
          .animate-scroll-right:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </div>
  );
}

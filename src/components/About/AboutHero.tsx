"use client";

import React from "react";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { Sparkles } from "lucide-react";

export default function AboutHero() {
  const images = [
    "/images/prjtImages/prj1.png",
    // "https://assets.aceternity.com/animated-modal.png",
    "/images/prjtImages/prj2.png",
    "https://assets.aceternity.com/github-globe.png",
    "https://assets.aceternity.com/layout-grid.png",
    "https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?q=80&w=1624&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
    "https://images.unsplash.com/photo-1623479322729-28b25c16b011?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1639755507638-e34150b56db2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1719253481072-5579e62d0a3f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://images.unsplash.com/photo-1556742419-3d4480213f85?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1640&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1572509018340-1fc13b5df491?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://assets.aceternity.com/vortex.png",
    "https://assets.aceternity.com/wobble-card.png",
    "https://assets.aceternity.com/world-map.webp",
  ];

  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl px-4 sm:px-6 py-24 sm:py-0">
      <div className="relative z-20 text-start max-w-5xl w-full">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-5 sm:mb-6">
          <Sparkles size={14} className="text-purple-400" />
          <span className="text-purple-300 text-xs sm:text-sm font-medium tracking-wide">
            About Vanurtech Media
          </span>
        </div>
        <h1 className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Build Intelligent Digital Solutions That Solve <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">Real Business Problems</span>
        </h1>
        <p className="mt-5 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed font-light">
          At Vanurtech Media, we help businesses transform their operations, sales, and growth 
          using AI-powered custom software, CRM systems, and scalable digital solutions.
        </p>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />

      {/* 3D Marquee Background */}
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
    </div>
  );
}

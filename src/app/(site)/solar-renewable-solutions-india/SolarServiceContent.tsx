"use client";

import React, { useState } from "react";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import Partners from "@/components/Partners";
import { CTAModal } from "@/components/CTAModal";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { WhyChooseUsSection } from "./components/WhyChooseUsSection";

export default function SolarServiceContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onConsultClick = () => setIsModalOpen(true);

  return (
    <div className="bg-[#0B0011] text-white min-h-screen">
      <HeroSection onConsultClick={onConsultClick} />
      <FeaturesSection />
      <WhyChooseUsSection onConsultClick={onConsultClick} />

      <div className="pt-4 sm:pt-8 pb-12 sm:pb-20 bg-white/2">
        <Partners />
      </div>

      {/* SEO Internal Links */}
      <section className="py-12 sm:py-20 relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-zinc-400 text-sm md:text-base">
          <p>
            Looking for more specialized solutions? Explore our{" "}
            <Link
              href="/small-medium-business-solutions-india"
              className="text-[#D3B4FF] hover:text-white transition-colors duration-300 underline underline-offset-4"
            >
              SMB Solutions
            </Link>,{" "}
            <Link
              href="/real-estate-solutions-india"
              className="text-[#D3B4FF] hover:text-white transition-colors duration-300 underline underline-offset-4"
            >
              Real Estate Tech
            </Link>{" "}
            and{" "}
            <Link
              href="/ai-business-automation-india"
              className="text-[#D3B4FF] hover:text-white transition-colors duration-300 underline underline-offset-4"
            >
              AI Automation
            </Link>{" "}
            for your business.
          </p>
        </div>
      </section>

      <CTASection />

      <CTAModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Footer Space Fix */}
      <div className="h-20 bg-[#0B0011]" />
    </div>
  );
}

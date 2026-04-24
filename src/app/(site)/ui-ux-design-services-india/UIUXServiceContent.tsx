"use client";

import React, { useState } from "react";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import Partners from "@/components/Partners";
import { CTAModal } from "@/components/CTAModal";
import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { GlobalTargeting } from "./components/GlobalTargeting";
import { WhyChooseUsSection } from "./components/WhyChooseUsSection";

export default function UIUXServiceContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onConsultClick = () => setIsModalOpen(true);

  return (
    <div className="bg-[#0B0011] text-white min-h-screen">
      <HeroSection onConsultClick={onConsultClick} />
      <ProblemSection />
      <FeaturesSection />
      <BenefitsSection />
      <GlobalTargeting />
      <WhyChooseUsSection />

      <div className="py-24 bg-white/2">
        <Partners />
      </div>

      {/* SEO Internal Links */}
      <section className="py-16 relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-zinc-400 text-sm md:text-base">
          <p>
            Looking for more solutions? Explore our{" "}
            <Link 
              href="/website-development-company-india" 
              className="text-[#D3B4FF] hover:text-white transition-colors duration-300 underline underline-offset-4"
            >
              Website Development
            </Link>,{" "}
            <Link 
              href="/crm-development-company-india" 
              className="text-[#D3B4FF] hover:text-white transition-colors duration-300 underline underline-offset-4"
            >
              CRM Systems
            </Link>{" "}
            and{" "}
            <Link 
              href="/ai-business-automation-india" 
              className="text-[#D3B4FF] hover:text-white transition-colors duration-300 underline underline-offset-4"
            >
              AI Automation
            </Link>{" "}
            for comprehensive business growth.
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



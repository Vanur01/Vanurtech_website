"use client";

import { useState } from "react";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import Partners from "@/components/Partners";
import { CTAModal } from "@/components/CTAModal";
import { HeroSection } from "./components/HeroSection";
import { DashboardPreview } from "./components/DashboardPreview";
import { ProblemSection } from "./components/ProblemSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { GlobalTargeting } from "./components/GlobalTargeting";
import { WhyChooseUsSection } from "./components/WhyChooseUsSection";

export default function HRMSContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onConsultClick = () => setIsModalOpen(true);

  return (
    <div className="bg-[#0B0011] text-white min-h-screen">
      <HeroSection onConsultClick={onConsultClick} />
      <DashboardPreview />
      <ProblemSection />
      <FeaturesSection />
      <BenefitsSection />
      <GlobalTargeting />
      <WhyChooseUsSection onConsultClick={onConsultClick} />

      <div className="py-12 bg-white/2">
        <Partners />
      </div>

      <section className="py-16 relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-zinc-400 text-sm md:text-base">
          <p>
            Looking for more solutions? Explore our{" "}
            <Link href="/products/solar-management-software" className="text-[#60a5fa] hover:text-white transition-colors duration-300 underline underline-offset-4">
              Solar Management Software
            </Link>
            ,{" "}
            <Link href="/products/finance-management-software" className="text-[#60a5fa] hover:text-white transition-colors duration-300 underline underline-offset-4">
              Finance Management Software
            </Link>{" "}
            and{" "}
            <Link href="/products/whatsapp-ai-chatbot" className="text-[#60a5fa] hover:text-white transition-colors duration-300 underline underline-offset-4">
              WhatsApp AI Chatbot
            </Link>{" "}
            for complete business growth.
          </p>
        </div>
      </section>

      <CTASection />
      <CTAModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="h-20 bg-[#0B0011]" />
    </div>
  );
}

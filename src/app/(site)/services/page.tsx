import type { Metadata } from "next";
import React from "react";
import HeroServices from "@/components/Services/HeroServices";
import CTASection from "@/components/CTASection";
import Partners from "@/components/Partners";
import ServicesList from "@/components/Services/ServicesList";
import AIUSPSection from "@/components/Services/AIUSPSection";

export const metadata: Metadata = {
  title: "Our Services | Custom Software, CRM, SaaS & AI Development - Vanurtech Media",
  description: "Explore Vanurtech Media's services: custom software development, CRM, SaaS, mobile apps, AI automation, UI/UX design & SEO — built for Indian SMEs.",
  alternates: {
    canonical: "https://vanurmedia.com/services",
  },
};

const page = () => {
  return (
    <div>
      <HeroServices />
      <ServicesList />
      <AIUSPSection />
      <CTASection />
      <Partners />
    </div>
  );
};

export default page;

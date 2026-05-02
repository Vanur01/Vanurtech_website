"use client";
import React from "react";
import HeroServices from "@/components/Services/HeroServices";
import CTASection from "@/components/CTASection";
import Partners from "@/components/Partners";
import ServicesList from "@/components/Services/ServicesList";
import AIUSPSection from "@/components/Services/AIUSPSection";

const ServicesClient = () => {
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

export default ServicesClient;

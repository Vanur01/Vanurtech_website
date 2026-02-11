"use client";
import React from "react";
import HeroServices from "@/components/Services/HeroServices";
import CTASection from "@/components/CTASection";
import Partners from "@/components/Partners";
import ServicesList from "@/components/Services/ServicesList";

const page = () => {
  return (
    <div>
      <HeroServices />
      <ServicesList />
      <CTASection />
      <Partners />
    </div>
  );
};

export default page;

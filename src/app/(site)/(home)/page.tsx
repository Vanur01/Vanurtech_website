"use client";

import React from 'react';
import TrustedBrands from '@/components/Home/TrustedBrands';
import ImpactStats from '@/components/Home/ImpactStats';
import ServicesSection from '@/components/Home/ServicesSection';
import WorkflowSection from '@/components/Home/WorkflowSection';
import TestimonialsSection from '@/components/Home/TestimonialsSection';
import CTASection from '@/components/CTASection';
import { HeroSection } from '@/components/Home/HeroSection';
import FeaturedProjects from '@/components/Home/FeaturedProjects';
import PageLoader from '@/components/PageLoader';

const Home = () => {
  return (
    <>
      <PageLoader />
      <div className="bg-[#0B0011]">
        <HeroSection />
        <TrustedBrands />
        <ImpactStats />
        <FeaturedProjects />
        <ServicesSection />
        <WorkflowSection />
        <TestimonialsSection />
        <CTASection />
      </div>
    </>
  );
};

export default Home;
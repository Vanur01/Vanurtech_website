"use client";
import React from 'react';
import AboutHero from '@/components/About/AboutHero';
import CTASection from '@/components/CTASection';
import OurBeginning from '@/components/About/OurBeginning';
import AboutStatsSection from '@/components/About/AboutStatsSection';
import Partners from '@/components/Partners';

const AboutPage = () => {
  return (
    <div className="bg-[#0B0011]">
      <AboutHero />
      <OurBeginning />
      <AboutStatsSection />
      <CTASection /> 
      <Partners />
    </div>
  );
};

export default AboutPage;
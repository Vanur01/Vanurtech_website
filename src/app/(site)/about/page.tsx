"use client";
import React from 'react';
import AboutHero from '@/components/About/AboutHero';
import CTASection from '@/components/CTASection';
import OurBeginning from '@/components/About/OurBeginning';
import AboutStatsSection from '@/components/About/AboutStatsSection';
import MissionSection from '@/components/About/MissionSection';
import Partners from '@/components/Partners';

const AboutPage = () => {
  return (
    <div className="bg-[#0B0011]">
      <AboutHero />
      <OurBeginning />
      <MissionSection />
      <AboutStatsSection />
      <CTASection />
      <Partners />
    </div>
  );
};

export default AboutPage;
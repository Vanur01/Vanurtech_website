"use client";
import React from 'react';
import WorkHero from '@/components/Work/WorkHero';
import ProjectsGrid from '@/components/Work/ProjectsGrid';
import Partners from '@/components/Partners';
import CTASection from '@/components/CTASection';

const WorkPage = () => {
  return (
    <div className="bg-[#0B0011]">
      <WorkHero />
      <ProjectsGrid />
      <CTASection/>
      <Partners/>
    </div>
  );
};

export default WorkPage;
"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/Home/HeroSection';
import TrustedBrands from '@/components/Home/TrustedBrands';
import PageLoader from '@/components/PageLoader';
import CTASection from '@/components/CTASection';
import { CTAModal } from '@/components/CTAModal';

const ImpactStats = dynamic(() => import('@/components/Home/ImpactStats'), { ssr: true });
const ServicesSection = dynamic(() => import('@/components/Home/ServicesSection'), { ssr: true });
const WorkflowSection = dynamic(() => import('@/components/Home/WorkflowSection'), { ssr: true });
const TestimonialsSection = dynamic(() => import('@/components/Home/TestimonialsSection'), { ssr: true });
const WhyChooseUs = dynamic(() => import('@/components/Home/WhyChooseUs'), { ssr: true });
const FeaturedProjects = dynamic(() => import('@/components/Home/FeaturedProjects'), { ssr: true });
const IndustrySolutions = dynamic(() => import('@/components/Home/IndustrySolutions'), { ssr: true });

const Home = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <PageLoader />
      <div className="bg-[#0B0011]">
        <HeroSection onConsultClick={() => setIsModalOpen(true)} />
        <TrustedBrands />
        <ImpactStats onConsultClick={() => setIsModalOpen(true)} />
        <FeaturedProjects />
        <ServicesSection onConsultClick={() => setIsModalOpen(true)} />
        <IndustrySolutions />
        <WorkflowSection />
        <TestimonialsSection />
        <WhyChooseUs onConsultClick={() => setIsModalOpen(true)} />
        <CTASection />
        <CTAModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </>
  );
};

export default Home;
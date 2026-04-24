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

const PageContent = React.memo(({ onConsultClick }: { onConsultClick: () => void }) => {
  return (
    <>
      <HeroSection onConsultClick={onConsultClick} />
      <TrustedBrands />
      <ImpactStats onConsultClick={onConsultClick} />
      <FeaturedProjects />
      <ServicesSection onConsultClick={onConsultClick} />
      <IndustrySolutions />
      <WorkflowSection />
      <TestimonialsSection />
      <WhyChooseUs onConsultClick={onConsultClick} />
      <CTASection />
    </>
  );
});
PageContent.displayName = 'PageContent';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleConsultClick = React.useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = React.useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <PageLoader />
      <div className="bg-[#0B0011]">
        <PageContent onConsultClick={handleConsultClick} />
        <CTAModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </>
  );
};

export default Home;
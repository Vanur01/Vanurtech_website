"use client";

import React from 'react';
import BlogHero from '@/components/Blog/BlogHero';
import BlogGrid from '@/components/Blog/BlogGrid';
import CTASection from '@/components/CTASection';
import Partners from '@/components/Partners';

const BlogPage = () => {
  return (
    <div className="bg-[#0B0011]">
      <BlogHero />
      <BlogGrid />
      <CTASection />
      <Partners />
    </div>
  );
};

export default BlogPage;

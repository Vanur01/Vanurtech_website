import type { Metadata } from "next";
import React from 'react';
import BlogHero from '@/components/Blog/BlogHero';
import BlogGrid from '@/components/Blog/BlogGrid';
import CTASection from '@/components/CTASection';
import Partners from '@/components/Partners';

export const metadata: Metadata = {
  title: "Blog | AI, Software & Digital Growth Insights - Vanurtech Media Pvt. Ltd.",
  description: "Read Vanurtech Media Pvt. Ltd.'s blog for expert insights on AI automation, custom software development, CRM, SaaS, and digital growth strategies for Indian businesses.",
  alternates: {
    canonical: "https://vanurmedia.com/blog",
  },
};

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

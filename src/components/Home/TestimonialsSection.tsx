"use client";

import React, { useState, useEffect } from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { testimonialApi, Testimonial } from "@/api";

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch testimonials from API
  useEffect(() => {
    const fetchTestimonials = async () => {
      setIsLoading(true);
      setError('');
      
      try {
        const response = await testimonialApi.getAllTestimonials();
        
        if (response.success && response.result) {
          // Transform API data to match AnimatedTestimonials format
          const formattedTestimonials = response.result.map((testimonial: Testimonial) => ({
            quote: testimonial.description,
            name: testimonial.company,
            designation: testimonial.position,
            src: testimonial.coverImage,
          }));
          setTestimonials(formattedTestimonials);
        }
      } catch (err: any) {
        console.error('Failed to fetch testimonials:', err);
        setError(err.message || 'Failed to fetch testimonials');
        // Fallback to default testimonials
        setTestimonials(defaultTestimonials);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const defaultTestimonials = [
    {
      quote:
        "Vanurtech Media Pvt. Ltd. delivered my website in just a few days with exceptional customization, seamless SEO optimization, and a stunning custom brochure—truly unmatched in quality and service!",
      name: "Jagannatha Design & Constructions",
      designation: "Construction & Design Company",
      src: "/images/test/test-1.webp",
    },
    {
      quote:
        "Vanurtech Media Pvt. Ltd. provided me with the perfect digital marketing solution. They have helped my business grow exponentially, and the increased web traffic speaks volumes about their expertise. I would recommend them to anyone looking for serious growth!",
      name: "Running Notations",
      designation: "Digital Marketing Client",
      src: "/images/test/test-2.webp",
    },
    {
      quote:
        "Vanurtech did a brilliant job with my website design, delivering it in just a few days with outstanding customization and SEO optimization—their dedication to work is truly impressive!",
      name: "Happy Client",
      designation: "Software Services",
      src: "/images/test/test-3.webp",
    },
  ];

  // Show loading state
  if (isLoading) {
    return (
      <div className="w-full bg-[#0B0011] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
            </div>
            <p className="text-gray-400 mt-6 text-lg">Loading testimonials...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#0B0011]">
      {/* Header Section */}
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 sm:pt-16 md:px-8 md:pt-20 lg:px-10">
        <div className="mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-3 sm:px-4 py-2">
          <span className="text-xs sm:text-sm font-medium text-purple-400">Testimonials</span>
        </div>
        <h2 className="mb-4 sm:mb-6 max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Still Not Convinced?
        </h2>
        <div className="max-w-2xl text-gray-300">
  <p className="text-sm sm:text-base md:text-lg mb-6">
    Explore our case studies, results, and client success stories to see how we
    help brands grow digitally.
  </p>

  <ul className="space-y-3">
    <li className="flex items-center gap-3">
      <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
      <span>View Case Studies</span>
    </li>

    <li className="flex items-center gap-3">
      <span className="w-2.5 h-2.5 rounded-full bg-pink-500"></span>
      <span>Talk to an Expert</span>
    </li>
  </ul>
</div>

      </div>

      {/* Animated Testimonials */}
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </div>
  );
}

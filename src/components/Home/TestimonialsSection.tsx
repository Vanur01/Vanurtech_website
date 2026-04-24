"use client";

import React, { useState, useEffect } from "react";
import { testimonialApi, Testimonial } from "@/api";
import { Sparkles, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [active, setActive] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const defaultTestimonials = [
    {
      quote: "Vanurtech Media Pvt. Ltd. delivered our website in a few days with exceptional customization, seamless SEO optimization, and a stunning custom brochure—truly unmatched level of quality and service!",
      name: "Jagannatha Constructions",
      designation: "Construction & Design Company",
      src: "/images/test/test-1.webp",
    },
    {
      quote: "The data-driven approach changed everything for our digital marketing. Seeing how our systems actually affected operations made it easy to scale further. I've found a level of efficiency I thought was gone.",
      name: "Running Notations",
      designation: "Software & Digital Partner",
      src: "/images/test/test-2.webp",
    },
    {
      quote: "Vanurtech did a brilliant job with our design, delivering it with outstanding customization and SEO optimization. Their dedicated approach to every single detail is truly impressive!",
      name: "Happy Client",
      designation: "Digital Business Services",
      src: "/images/test/test-3.webp",
    },
  ];

  // Fetch testimonials from API
  useEffect(() => {
    const fetchTestimonials = async () => {
      setIsLoading(true);
      try {
        const response = await testimonialApi.getAllTestimonials();
        if (response.success && response.result) {
          const formattedTestimonials = response.result.map((testimonial: Testimonial) => ({
            quote: testimonial.description,
            name: testimonial.company,
            designation: testimonial.position,
            src: testimonial.coverImage,
          }));
          setTestimonials(formattedTestimonials);
        } else {
          setTestimonials(defaultTestimonials);
        }
      } catch (err) {
        setTestimonials(defaultTestimonials);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  // Automatic Paging Logic
  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [testimonials.length]);

  if (isLoading) {
    return (
      <div className="w-full bg-[#0B0011] py-40 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  const getVisibleTestimonials = () => {
    if (testimonials.length === 0) return [];
    const visible = [];
    for (let i = 0; i < 3; i++) {
        visible.push(testimonials[(active + i) % testimonials.length]);
    }
    return visible;
  };

  const visibleItems = getVisibleTestimonials();

  return (
    <section className="w-full bg-[#0B0011] pt-24 md:pt-32 pb-12 md:pb-16 border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Header - Matching FeaturedProjects Style */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-8"
          >
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-purple-300 text-xs sm:text-sm font-medium tracking-wide">
              Success Insights
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight"
          >
            <span className="text-white">Real Success.</span>
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">
              {" "}Real Impact.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Hear directly from the visionaries we've partnered with to automate operations, 
            scale platforms, and solve critical business challenges through intelligent software.
          </motion.p>
        </div>

        {/* SWAP CAROUSEL - Smooth Position Swapping */}
        <div className="relative mt-24">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 min-h-[400px]">
              <AnimatePresence mode="popLayout" initial={false}>
                 {visibleItems.map((item, idx) => (
                    <motion.div
                      key={item.name}
                      layout
                      initial={{ opacity: 0, x: 50, scale: 0.9 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0, 
                        scale: 1,
                        filter: idx === 1 ? "blur(0px)" : "blur(0.5px)",
                      }}
                      exit={{ opacity: 0, x: -50, scale: 0.9 }}
                      transition={{ 
                        duration: 0.6, 
                        ease: [0.32, 0.72, 0, 1] 
                      }}
                      className="group"
                    >
                       <div className={`relative p-8 rounded-[2.5rem] flex flex-col justify-between h-full border transition-all duration-300 ${
                         idx === 1 
                         ? "bg-white/10 border-purple-500/40 shadow-2xl shadow-purple-500/10 scale-105 z-10" 
                         : "bg-white/5 border-white/10 opacity-60 z-0"
                       }`}>
                          <div className="relative z-10">
                             <div className="flex gap-1 mb-6">
                                {[1, 2, 3, 4, 5].map((star) => (
                                   <Star key={star} size={12} fill="#EAB308" className="text-yellow-500" />
                                ))}
                             </div>
                             <p className="text-gray-200 text-base leading-relaxed mb-10 font-medium line-clamp-6">
                                &ldquo;{item.quote}&rdquo;
                             </p>
                          </div>

                          <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-white/10 mt-auto">
                             <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-purple-500/30">
                                <img src={item.src} alt={item.name} className="w-full h-full object-cover" />
                             </div>
                             <div>
                                <div className="font-bold tracking-tight text-sm text-white">{item.name}</div>
                                <div className="text-[10px] font-semibold uppercase tracking-wider text-purple-400">{item.designation}</div>
                             </div>
                          </div>
                          {idx === 1 && (
                            <div className="absolute inset-x-0 bottom-0 top-1/2 bg-linear-to-t from-purple-600/10 to-transparent z-0 rounded-[2rem]" />
                          )}
                       </div>
                    </motion.div>
                 ))}
              </AnimatePresence>
           </div>
           
           <div className="flex justify-center flex-wrap gap-2 mt-16 max-w-2xl mx-auto">
              {testimonials.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${active === i ? "w-8 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" : "w-2 bg-white/20 hover:bg-white/40"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}

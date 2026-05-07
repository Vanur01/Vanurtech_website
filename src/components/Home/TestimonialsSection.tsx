"use client";

import React, { useState, useEffect } from "react";
import { testimonialApi, Testimonial } from "@/api";
import { Sparkles, Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [active, setActive] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const defaultTestimonials = [
    {
      id: "def-1",
      quote: "Vanurtech Media Pvt. Ltd. delivered our website in a few days with exceptional customization, seamless SEO optimization, and a stunning custom brochure truly unmatched level of quality and service!",
      name: "Jagannatha Constructions",
      designation: "Construction & Design Company",
      src: "/images/test/test-1.webp",
    },
    {
      id: "def-2",
      quote: "The data-driven approach changed everything for our digital marketing. Seeing how our systems actually affected operations made it easy to scale further. I've found a level of efficiency I thought was gone.",
      name: "Running Notations",
      designation: "Software & Digital Partner",
      src: "/images/test/test-2.webp",
    },
    {
      id: "def-3",
      quote: "Vanurtech Media Pvt. Ltd. did a brilliant job with our design, delivering it with outstanding customization and SEO optimization. Their dedicated approach to every single detail is truly impressive!",
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
          const formattedTestimonials = response.result.map((testimonial: any, idx: number) => ({
            id: testimonial._id || `api-${idx}`,
            quote: testimonial.description ? testimonial.description.replace(/—/g, ' ').replace(/–/g, ' ') : "",
            name: testimonial.company,
            designation: testimonial.position,
            src: testimonial.coverImage
              ? testimonial.coverImage.startsWith('http')
                ? testimonial.coverImage
                : `https://vanurtech-backend-admin-2-8vsl.onrender.com${testimonial.coverImage}`
              : defaultTestimonials[0].src,
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
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (testimonials.length > 0 && !isPaused) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [testimonials.length, isPaused]);

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

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      // swipe left (next)
      setActive((prev) => (prev + 1) % testimonials.length);
    } else if (info.offset.x > threshold) {
      // swipe right (prev)
      setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  return (
    <section className="w-full bg-[#0B0011] pt-14 md:pt-20 pb-8 md:pb-10 border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">

        {/* Header - Matching FeaturedProjects Style */}
        <div className="text-center mb-8 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-5"
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
        <motion.div
          className="relative mt-6 sm:mt-10 md:mt-14 cursor-grab active:cursor-grabbing"
          onPointerDown={() => setIsPaused(true)}
          onPointerUp={() => setIsPaused(false)}
          onPointerCancel={() => setIsPaused(false)}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleItems.map((item, idx) => (
                <motion.div
                  key={item.id || `${item.name}-${idx}`}
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
                  className={`group h-full ${idx !== 0 ? "hidden md:block" : ""}`}
                >
                  <div className={`relative h-full p-6 sm:p-8 lg:p-10 rounded-[2rem] flex flex-col justify-between border backdrop-blur-sm transition-all duration-500 overflow-hidden
                    ${idx === 1
                      ? "md:bg-[#1a0b2e]/80 md:border-purple-500/40 md:shadow-[0_0_40px_-15px_rgba(168,85,247,0.5)] md:scale-105 md:z-10 md:opacity-100"
                      : "md:bg-white/5 md:border-white/10 md:opacity-40 md:z-0 md:scale-95 hover:md:opacity-60"
                    }
                    ${idx === 0
                      ? "max-md:bg-[#1a0b2e]/80 max-md:border-purple-500/40 max-md:shadow-[0_0_40px_-15px_rgba(168,85,247,0.5)] max-md:z-10 max-md:opacity-100"
                      : ""
                    }
                    `}>
                    
                    {/* Background Decorative Elements */}
                    <div className="absolute -top-6 -right-6 text-purple-500/10 rotate-12 transform group-hover:scale-110 transition-transform duration-500">
                      <Quote size={140} fill="currentColor" />
                    </div>
                    
                    <div className="relative z-10 flex-grow">
                      <div className="flex gap-1.5 mb-6 sm:mb-8">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} size={14} fill="#EAB308" className="text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
                        ))}
                      </div>
                      <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-10 font-medium line-clamp-6 relative z-10">
                        "{item.quote}"
                      </p>
                    </div>

                    <div className="relative z-10 flex items-center gap-4 sm:gap-5 pt-5 sm:pt-6 border-t border-purple-500/20 mt-auto">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0 border-2 border-purple-500/50 bg-purple-900/40 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                        {/* Fallback Initial */}
                        <span className="absolute inset-0 flex items-center justify-center text-purple-300 text-sm font-bold">
                          {item.name ? item.name.charAt(0).toUpperCase() : "?"}
                        </span>
                        
                        {/* Image (hidden on error) */}
                        {item.src && (
                          <img
                            src={item.src}
                            alt={item.name}
                            className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        )}
                      </div>
                      <div>
                        <div className="font-bold tracking-wide text-sm sm:text-base text-white">{item.name}</div>
                        <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-purple-400 mt-0.5">{item.designation}</div>
                      </div>
                    </div>
                    {((idx === 1) || (idx === 0)) && (
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-purple-600/10 to-transparent z-0 pointer-events-none" />
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-center flex-wrap gap-2 mt-8 sm:mt-12 max-w-2xl mx-auto">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onPointerDownCapture={(e) => e.stopPropagation()}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${active === i ? "w-8 bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]" : "w-2 bg-white/20 hover:bg-white/40"}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

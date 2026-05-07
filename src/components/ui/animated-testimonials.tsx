"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 6000);
      return () => clearInterval(interval);
    }
  }, [autoplay, testimonials.length]);

  if (!testimonials || testimonials.length === 0 || !testimonials[active]) {
    return null;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12">
      <div className="relative grid grid-cols-1 gap-12 md:gap-20 lg:grid-cols-2 items-center">
        
        {/* Left Side: Product Showcase Mockup */}
        <div className="relative flex items-center justify-center order-2 md:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: -20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-full max-w-[550px]"
            >
              {/* Laptop Frame Mockup */}
              <div className="relative w-full aspect-16/10 bg-slate-800 rounded-2xl border-[6px] border-slate-700 shadow-2xl overflow-hidden ring-1 ring-white/10 group shadow-purple-500/10">
                <Image
                  src={testimonials[active].src}
                  alt={testimonials[active].name}
                  width={800}
                  height={500}
                  draggable={false}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
              
              {/* Laptop Base Shadow/Effect */}
              <div className="relative mx-auto w-[110%] -left-[5%] h-3 bg-slate-700 rounded-b-xl border-t border-white/5 opacity-80" />
              
              {/* Subtle Ambient Glow */}
              <div className="absolute -inset-10 bg-purple-600/10 blur-[120px] -z-10 rounded-full" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Content & Navigation */}
        <div className="flex flex-col justify-center order-1 md:order-2 h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tighter leading-tight mb-2">
                {testimonials[active].name}
              </h3>
              <p className="text-purple-400 font-bold text-lg md:text-xl tracking-tight mb-8 uppercase">
                {testimonials[active].designation}
              </p>
              
              <div className="relative mb-10">
                <motion.p className="text-lg md:text-2xl text-gray-200 leading-relaxed font-medium italic">
                  {testimonials[active].quote.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ filter: "blur(8px)", opacity: 0 }}
                      animate={{ filter: "blur(0px)", opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.01 * index }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons Exactly from Reference */}
          <div className="mt-8 flex gap-5">
            <button
              onClick={handlePrev}
              className="h-14 w-14 rounded-full bg-purple-600 flex items-center justify-center text-white transition-all hover:bg-purple-500 hover:scale-110 active:scale-95 shadow-lg shadow-purple-600/20"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="h-14 w-14 rounded-full bg-purple-600 flex items-center justify-center text-white transition-all hover:bg-purple-600/80 hover:scale-110 active:scale-95 shadow-lg shadow-purple-600/20"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

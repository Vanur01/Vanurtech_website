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

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  // Safety check to ensure active index is valid
  useEffect(() => {
    if (active >= testimonials.length) {
      setActive(0);
    }
  }, [active, testimonials.length]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  // Add safety check before rendering
  if (!testimonials || testimonials.length === 0 || !testimonials[active]) {
    return null;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12">
      <div className="relative grid grid-cols-1 gap-8 sm:gap-12 md:gap-16 md:grid-cols-2">
        <div className="flex items-center justify-center">
          <div className="relative h-48 sm:h-56 md:h-64 w-80 sm:w-84 md:w-90">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-2xl sm:rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {testimonials[active].name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-6 sm:mt-8 text-base sm:text-lg text-gray-300">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="mt-6 sm:mt-8 flex gap-3 sm:gap-4">
            <button
              onClick={handlePrev}
              className="group/button h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-purple-600 transition-colors hover:bg-purple-500"
            >
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover/button:rotate-12 transition-transform duration-300 mx-auto" />
            </button>
            <button
              onClick={handleNext}
              className="group/button h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-purple-600 transition-colors hover:bg-purple-500"
            >
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover/button:-rotate-12 transition-transform duration-300 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

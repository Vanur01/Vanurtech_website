"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-[#0B0011] font-sans px-4 sm:px-6 md:px-10"
      ref={containerRef}
    >
      {/* <div className="mx-auto max-w-7xl px-4 py-10 sm:py-16 md:py-20 md:px-8 lg:px-10">
       
      </div> */}

      <div ref={ref} className="relative mx-auto max-w-7xl pb-12 sm:pb-16 md:pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between gap-6 sm:gap-8 pt-10 sm:pt-12 md:gap-20 md:pt-40"
          >
            <div className="sticky top-20 sm:top-24 md:top-40 z-40 flex max-w-xs flex-col items-center self-start w-full md:w-auto md:flex-row lg:max-w-sm">
              <div className="absolute left-2 sm:left-3 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white md:left-3">
                {item.icon ? (
                  <div className="flex h-full w-full items-center justify-center text-purple-600">
                    {item.icon}
                  </div>
                ) : (
                  <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full border border-neutral-300 bg-neutral-200 p-1 sm:p-2" />
                )}
              </div>
              <h3 className="hidden text-lg sm:text-xl font-bold text-neutral-500 md:block md:pl-20 md:text-3xl">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-20 sm:pl-12 pr-4 md:w-1/2 md:pl-4">
              <h3 className="mb-3 sm:mb-4 block text-left text-xl sm:text-2xl font-bold text-neutral-500 md:hidden">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-6 sm:left-6 md:left-8 top-0 w-0.5 overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 to-transparent to-99% mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-neutral-700"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-0.5 rounded-full bg-linear-to-t from-purple-500 from-0% via-purple-700 via-10% to-transparent"
          />
        </div>
      </div>
    </div>
  );
};

"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 200]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[190vh] md:h-[230vh] lg:h-[270vh] overflow-hidden antialiased relative flex flex-col self-auto perspective-[1000px] transform-3d"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 xl:space-x-20 mb-6 sm:mb-8 md:mb-10 lg:mb-16 xl:mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 xl:space-x-20 mb-6 sm:mb-8 md:mb-10 lg:mb-16 xl:mb-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  const services = ["Web Design", "Mobile Apps", "CRM & Automation"];

  return (
    <div className="max-w-7xl relative mx-auto py-10 md:py-20 px-4 w-full z-50 flex items-center justify-center min-h-screen">
      <div className="text-center w-full">
        {/* Services - Top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-8"
        >
          {services.map((service, index) => (
            <motion.span
              key={service}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-purple-400 text-xs md:text-sm lg:text-base font-light tracking-wider uppercase"
            >
              {service}
              {index < services.length - 1 && (
                <span className="mx-2 md:mx-4 lg:mx-10 text-purple-600">•</span>
              )}
            </motion.span>
          ))}
        </motion.div>

        {/* VANUR Tech - Main Title responsive */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 md:mb-6 flex flex-col items-center justify-center gap-1 md:gap-2"
        >
          {/* Mobile Layout (VANUR TECH in one row, MEDIA below) */}
          <div className="flex flex-col items-center justify-center gap-1 sm:hidden">
            <div className="flex items-baseline gap-2">
              <h1 className="text-4xl font-bold text-white tracking-widest">
                VANUR
              </h1>
              <span className="text-4xl font-light text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">
                TECH
              </span>
            </div>
            <span className="text-lg font-light text-white/90 tracking-widest">
              MEDIA
            </span>
          </div>

          {/* Tablet Layout (VANUR TECH in one row, MEDIA below) */}
          <div className="hidden sm:flex lg:hidden flex-col items-center justify-center gap-2">
            <div className="flex items-baseline gap-3">
              <h1 className="text-5xl font-bold text-white tracking-widest">
                VANUR
              </h1>
              <span className="text-5xl font-light text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">
                TECH
              </span>
            </div>
            <span className="text-2xl font-light text-white/90 tracking-widest">
              MEDIA
            </span>
          </div>

          {/* Desktop Layout (horizontal with spacing) */}
          <div className="hidden lg:flex items-baseline justify-center gap-4">
            <h1 className="text-6xl md:text-7xl font-bold text-white tracking-widest">
              VANUR
            </h1>
            <div className="flex flex-col items-center">
              <span className="text-6xl md:text-7xl font-light text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">
                T E C H
              </span>
              <span className="text-xl md:text-3xl font-light text-white/90 tracking-widest">
                M E D I A
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-48 w-56 sm:h-56 sm:w-64 md:h-64 md:w-72 lg:h-80 lg:w-96 xl:h-96 xl:w-120 relative shrink-0 rounded-xl overflow-hidden"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-top-left absolute h-full w-full inset-0 rounded-xl"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none transition-opacity duration-200"></div>
      <h2 className="absolute bottom-2 left-2 md:bottom-4 md:left-4 opacity-0 group-hover/product:opacity-100 text-white text-xs sm:text-sm md:text-base font-medium transition-opacity duration-200">
        {product.title}
      </h2>
    </motion.div>
  );
};

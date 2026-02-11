"use client";

import React, { useState } from "react";
import { ArrowUpRight, Code, Smartphone, Layers, Zap } from "lucide-react";
import { CometCard } from "@/components/ui/comet-card";

export default function ServicesList() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      category: "Creative & Responsive",
      title: "Website Design",
      icon: Code,
      features: [
        {
          title: "Custom & Responsive Design:",
          description:
            "tailored designs that adapt seamlessly across all devices",
        },
        {
          title: "SEO & Performance Optimization:",
          description: "fast loading, search-engine friendly architecture",
        },
        {
          title: "E-Commerce & CMS Solutions:",
          description: "secure online stores with easy content management",
        },
        {
          title: "End-to-End Support & Maintenance:",
          description: "continuous updates, security, and technical assistance",
        },
      ],
    },
    {
      id: 2,
      category: "Cross-Platform",
      title: "Mobile Application",
      icon: Smartphone,
      features: [
        {
          title: "Custom Mobile App Development:",
          description: "native iOS/Android & React Native solutions",
        },
        {
          title: "Figma Design for Mobile Applications:",
          description: "pixel-perfect UI/UX design and prototyping",
        },
        {
          title: "App Testing and Quality Assurance:",
          description: "comprehensive testing for optimal performance",
        },
        {
          title: "App Maintenance and Support:",
          description: "ongoing updates, bug fixes & feature enhancements",
        },
      ],
    },
    {
      id: 3,
      category: "Business Intelligence",
      title: "CRM Solutions",
      icon: Layers,
      features: [
        {
          title: "Customizable CRM Solutions:",
          description: "tailored to your business workflows and processes",
        },
        {
          title: "Seamless Software Integration:",
          description: "connect with existing tools and platforms",
        },
        {
          title: "Advanced Analytics & Reporting:",
          description: "data-driven insights for better decisions",
        },
        {
          title: "Automated Workflows System:",
          description: "streamline operations and boost productivity",
        },
      ],
    },
    {
      id: 4,
      category: "Creative Branding",
      title: "Graphics Design",
      icon: Zap,
      features: [
        {
          title: "Creative Logo & Branding Design:",
          description: "unique brand identity and visual storytelling",
        },
        {
          title: "Social Media Graphics Design:",
          description: "eye-catching posts, banners & ad creatives",
        },
        {
          title: "Website & UI Graphics Design:",
          description: "modern interfaces with stunning visuals",
        },
        {
          title: "Marketing & Advertising Material Design:",
          description: "brochures, flyers & promotional materials",
        },
      ],
    },
    {
      id: 5,
      category: "Search Optimization",
      title: "SEO Services",
      icon: Code,
      features: [
        {
          title: "Comprehensive On-Page SEO Services:",
          description: "optimized content, meta tags & site structure",
        },
        {
          title: "Advanced Keyword Research & Strategy:",
          description: "targeted keywords for maximum visibility",
        },
        {
          title: "Technical SEO Audit & Fixes:",
          description: "site speed, mobile-friendliness & crawlability",
        },
        {
          title: "High-Quality Backlink Building:",
          description: "authority links for improved rankings",
        },
      ],
    },
    {
      id: 6,
      category: "Growth & Engagement",
      title: "Digital Marketing",
      icon: Smartphone,
      features: [
        {
          title: "Seamless Website to App Conversion:",
          description: "transform your site into native mobile apps",
        },
        {
          title: "Custom Mobile App Development:",
          description: "feature-rich apps for iOS and Android",
        },
        {
          title: "Faster Deployment & Scalable Solutions:",
          description: "quick launch with room to grow",
        },
        {
          title: "Integrated Features & Real-time Sync:",
          description: "live updates and seamless data synchronization",
        },
      ],
    },
    {
      id: 7,
      category: "Creative Design",
      title: "UI/UX",
      icon: Zap,
      features: [
        {
          title: "User Research & Analysis:",
          description: "understanding user behavior and needs",
        },
        {
          title: "Wireframing & Prototyping:",
          description: "interactive mockups and design systems",
        },
        {
          title: "Visual Design & Branding:",
          description: "stunning interfaces with consistent brand identity",
        },
        {
          title: "Usability Testing & Optimization:",
          description: "data-driven improvements for better user experience",
        },
      ],
    },
    {
      id: 7,
      category: "Artificial Intelligence",
      title: "AI/ML Tech",
      icon: Code,
      features: [
        {
          title: "Custom AI Model Development:",
          description: "tailored machine learning solutions for your needs",
        },
        {
          title: "Natural Language Processing (NLP):",
          description: "chatbots, sentiment analysis & text processing",
        },
        {
          title: "Computer Vision & Image Recognition:",
          description: "object detection, facial recognition & automation",
        },
        {
          title: "Predictive Analytics & Data Science:",
          description: "AI-powered insights for business intelligence",
        },
      ],
    },
  ];

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 py-12 sm:py-16 md:py-20"
      style={{ backgroundColor: "#0A0012" }}
    >
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-purple-500 mb-6 sm:mb-8">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-purple-400 italic text-xs sm:text-sm">
              Our Services
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white">
            Complete Digital Solutions
            <br />
            for Your Business
          </h1>

          <p className="text-gray-400 text-base sm:text-lg md:text-xl">
            Discover VanurTech Media's comprehensive service offerings.
          </p>
        </div>

        {/* Services Grid - Alternating Layout */}
        <div className="space-y-4 sm:space-y-6">
          {/* Row 1: 50% - 50% */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            {/* Card 1 */}
            <CometCard className="w-full lg:w-1/2">
              <div
                className="h-[400px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-6 sm:p-8 md:p-10 hover:border-purple-600 transition-all duration-500 group relative overflow-hidden"
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(null)}
                // style={{
                //   animation: 'fadeInUp 0.6s ease-out both'
                // }}
              >
                <div className="mb-4 sm:mb-6">
                  <div className="text-purple-400 text-xs sm:text-sm mb-2">
                    {services[0].category}
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8">
                    {services[0].title}
                  </h3>
                </div>

                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {services[0].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                      <span className="text-white mt-1 text-sm">•</span>
                      <div className="text-sm sm:text-base">
                        <span className="text-white font-semibold">
                          {feature.title}
                        </span>
                        <span className="text-gray-400">
                          {" "}
                          {feature.description}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
              </div>
            </CometCard>

            {/* Card 2 */}
            <CometCard className="w-full lg:w-1/2">
              <div
                className="h-[400px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-6 sm:p-8 md:p-10 hover:border-purple-600 transition-all duration-500 group relative overflow-hidden"
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
                // style={{
                //   animation: 'fadeInUp 0.6s ease-out 0.2s both'
                // }}
              >
                <div className="mb-4 sm:mb-6">
                  <div className="text-purple-400 text-xs sm:text-sm mb-2">
                    {services[1].category}
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8">
                    {services[1].title}
                  </h3>
                </div>

                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {services[1].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                      <span className="text-white mt-1 text-sm">•</span>
                      <div className="text-sm sm:text-base">
                        <span className="text-white font-semibold">
                          {feature.title}
                        </span>
                        <span className="text-gray-400">
                          {" "}
                          {feature.description}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
              </div>
            </CometCard>
          </div>

          {/* Row 2: 70% - 30% */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            {/* Card 3 - 70% */}
            <CometCard className="w-full lg:w-[60%]">
              <div
                className="h-[400px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-6 sm:p-8 md:p-10 hover:border-purple-600 transition-all duration-500 group relative overflow-hidden"
                onMouseEnter={() => setHoveredCard(3)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="mb-4 sm:mb-6">
                  <div className="text-purple-400 text-xs sm:text-sm mb-2">
                    {services[2].category}
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8">
                    {services[2].title}
                  </h3>
                </div>

                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {services[2].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                      <span className="text-white mt-1 text-sm">•</span>
                      <div className="text-sm sm:text-base">
                        <span className="text-white font-semibold">
                          {feature.title}
                        </span>
                        <span className="text-gray-400">
                          {" "}
                          {feature.description}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <ArrowUpRight className="text-purple-600" size={20} />
                </div>
              </div> */}

                <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
              </div>
            </CometCard>

            {/* Card 4 - 30% */}
            <CometCard className="w-full lg:w-[40%]">
              <div
                className="h-[400px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-6 sm:p-8 md:p-10 hover:border-purple-600 transition-all duration-500 group relative overflow-hidden"
                onMouseEnter={() => setHoveredCard(4)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="mb-4 sm:mb-6">
                  <div className="text-purple-400 text-xs sm:text-sm mb-2">
                    {services[3].category}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
                    {services[3].title}
                  </h3>
                </div>

                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {services[3].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-white mt-1 text-xs sm:text-sm">
                        •
                      </span>
                      <div className="text-xs sm:text-sm">
                        <span className="text-white font-semibold">
                          {feature.title}
                        </span>
                        <span className="text-gray-400">
                          {" "}
                          {feature.description}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <ArrowUpRight className="text-purple-600" size={16} />
                  </div>
                </div> */}

                <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
              </div>
            </CometCard>
          </div>

          {/* Row 3: 30% - 70% */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            {/* Card 5 - 30% */}
            <CometCard className="w-full lg:w-[40%]">
              <div
                className="h-[400px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-6 sm:p-8 md:p-10 hover:border-purple-600 transition-all duration-500 group relative overflow-hidden"
                onMouseEnter={() => setHoveredCard(5)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="mb-4 sm:mb-6">
                  <div className="text-purple-400 text-xs sm:text-sm mb-2">
                    {services[4].category}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
                    {services[4].title}
                  </h3>
                </div>

                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {services[4].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-white mt-1 text-xs sm:text-sm">
                        •
                      </span>
                      <div className="text-xs sm:text-sm">
                        <span className="text-white font-semibold">
                          {feature.title}
                        </span>
                        <span className="text-gray-400">
                          {" "}
                          {feature.description}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <ArrowUpRight className="text-purple-600" size={16} />
                  </div>
                </div> */}

                <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
              </div>
            </CometCard>

            {/* Card 6 - 70% */}
            <CometCard className="w-full lg:w-[60%]">
              <div
                className="h-[400px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-6 sm:p-8 md:p-10 hover:border-purple-600 transition-all duration-500 group relative overflow-hidden"
                onMouseEnter={() => setHoveredCard(6)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="mb-4 sm:mb-6">
                  <div className="text-purple-400 text-xs sm:text-sm mb-2">
                    {services[5].category}
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8">
                    {services[5].title}
                  </h3>
                </div>

                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {services[5].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                      <span className="text-white mt-1 text-sm">•</span>
                      <div className="text-sm sm:text-base">
                        <span className="text-white font-semibold">
                          {feature.title}
                        </span>
                        <span className="text-gray-400">
                          {" "}
                          {feature.description}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
                {/* 
                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <ArrowUpRight className="text-purple-600" size={20} />
                  </div>
                </div> */}

                <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
              </div>
            </CometCard>
          </div>


          {/* Row 4: 30% - 70% */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            {/* Card 7 - 30% */}
            <CometCard className="w-full lg:w-[55%]">
              <div
                className="h-[400px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-6 sm:p-8 md:p-10 hover:border-purple-600 transition-all duration-500 group relative overflow-hidden"
                onMouseEnter={() => setHoveredCard(5)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="mb-4 sm:mb-6">
                  <div className="text-purple-400 text-xs sm:text-sm mb-2">
                    {services[6].category}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
                    {services[6].title}
                  </h3>
                </div>

                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {services[6].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-white mt-1 text-xs sm:text-sm">
                        •
                      </span>
                      <div className="text-xs sm:text-sm">
                        <span className="text-white font-semibold">
                          {feature.title}
                        </span>
                        <span className="text-gray-400">
                          {" "}
                          {feature.description}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <ArrowUpRight className="text-purple-600" size={16} />
                  </div>
                </div> */}

                <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
              </div>
            </CometCard>

            {/* Card 8 - 70% */}
            <CometCard className="w-full lg:w-[45%]">
              <div
                className="h-[400px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-6 sm:p-8 md:p-10 hover:border-purple-600 transition-all duration-500 group relative overflow-hidden"
                onMouseEnter={() => setHoveredCard(6)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="mb-4 sm:mb-6">
                  <div className="text-purple-400 text-xs sm:text-sm mb-2">
                    {services[7].category}
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8">
                    {services[7].title}
                  </h3>
                </div>

                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {services[7].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                      <span className="text-white mt-1 text-sm">•</span>
                      <div className="text-sm sm:text-base">
                        <span className="text-white font-semibold">
                          {feature.title}
                        </span>
                        <span className="text-gray-400">
                          {" "}
                          {feature.description}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
                {/* 
                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <ArrowUpRight className="text-purple-600" size={20} />
                  </div>
                </div> */}

                <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
              </div>
            </CometCard>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { ArrowUpRight, Code, Smartphone, Layers, Zap, ShieldCheck, Sparkles } from "lucide-react";
import { CometCard } from "@/components/ui/comet-card";
import Link from "next/link";

export default function ServicesList() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      category: "Creative & Responsive",
      title: "Website Design & Development",
      link: "/website-development-company-india",
      icon: Code,
      features: [
        {
          title: "Custom Business Websites:",
          description:
            "high-converting websites designed for your business goals",
        },
        {
          title: "SEO & Performance Optimized:",
          description: "fast-loading, Google-friendly websites",
        },
        {
          title: "Lead Generation Focused:",
          description: "designed to convert visitors into customers",
        },
        {
          title: "Scalable & Secure:",
          description: "built with modern technologies for long-term growth",
        },
      ],
    },
    {
      id: 2,
      category: "Cross-Platform",
      title: "Mobile Application",
      link: "/mobile-app-development-company-india",
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
      category: "Scale & Automation",
      title: "CRM & SaaS Solutions",
      link: "/crm-development-company-india",
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
      link: "/graphic-design-services-india",
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
      link: "/seo-services-india",
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
      id: 7,
      category: "Creative Design",
      title: "UI/UX",
      link: "/ui-ux-design-services-india",
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
      id: 8,
      category: "Intelligence",
      title: "AI Automation",
      link: "/ai-business-automation-india",
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
    {
      id: 9,
      category: "Security Excellence",
      title: "Cyber Security",
      link: "/cyber-security-services-india",
      icon: ShieldCheck,
      features: [
        {
          title: "Advanced Threat Protection:",
          description: "AI-powered defense against malware & ransomware",
        },
        {
          title: "Network Security Audits:",
          description: "comprehensive vulnerability scans and testing",
        },
        {
          title: "Data Encryption & Privacy:",
          description: "robust protocols to keep your information safe",
        },
        {
          title: "24/7 Monitoring & Response:",
          description: "real-time threat detection and management",
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
        <div className="mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-8">
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-purple-300 text-xs sm:text-sm font-medium tracking-wide">
              Strategic Service Ecosystem
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight tracking-tight text-white">
            Complete Digital Solutions <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">
              for Global Business
            </span>
          </h1>

          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl leading-relaxed">
            Discover VanurTech Media's comprehensive suite of high-performance services, engineered to scale your digital presence.
          </p>
        </div>

        {/* Services Grid - Alternating Layout */}
        <div className="space-y-4 sm:space-y-6">
          {/* Row 1: 50% - 50% */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            {/* Card 1 - Website Design */}
            <CometCard className="w-full lg:w-1/2">
              <Link href={services[0].link} className="block group h-full">
                <div
                  id="website-design"
                  className="h-[480px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-6 sm:p-8 md:p-10 hover:border-purple-600 transition-all duration-500 relative overflow-hidden"
                  onMouseEnter={() => setHoveredCard(1)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="mb-4 sm:mb-6">
                    <div className="text-purple-400 text-xs sm:text-sm mb-2">
                      {services[0].category}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8 group-hover:text-purple-400 transition-colors">
                      {services[0].title}
                    </h3>
                  </div>

                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {services[0].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3">
                        <span className="text-purple-400 mt-1 text-sm">✦</span>
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
              </Link>
            </CometCard>

            {/* Card 2 - Mobile Application */}
            <CometCard className="w-full lg:w-1/2">
              <Link href={services[1].link} className="block group h-full">
                <div
                  id="mobile-app"
                  className="h-[480px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-6 sm:p-8 md:p-10 hover:border-purple-600 transition-all duration-500 relative overflow-hidden"
                  onMouseEnter={() => setHoveredCard(2)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="mb-4 sm:mb-6">
                    <div className="text-purple-400 text-xs sm:text-sm mb-2">
                      {services[1].category}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8 group-hover:text-purple-400 transition-colors">
                      {services[1].title}
                    </h3>
                  </div>

                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {services[1].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3">
                        <span className="text-purple-400 mt-1 text-sm">✦</span>
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
              </Link>
            </CometCard>
          </div>

          {/* Row 2: 70% - 30% */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            {/* Card 3 - CRM Solutions (70%) */}
            <CometCard className="w-full lg:w-[60%]">
              <Link href={services[2].link} className="block group h-full">
                <div
                  id="crm-saas"
                  className="h-[400px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-6 sm:p-8 md:p-10 hover:border-purple-600 transition-all duration-500 relative overflow-hidden"
                  onMouseEnter={() => setHoveredCard(3)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="mb-4 sm:mb-6">
                    <div className="text-purple-400 text-xs sm:text-sm mb-2">
                      {services[2].category}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8 group-hover:text-purple-400 transition-colors">
                      {services[2].title}
                    </h3>
                  </div>

                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {services[2].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3">
                        <span className="text-purple-400 mt-1 text-sm">✦</span>
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
              </Link>
            </CometCard>

            {/* Card 4 - Graphics Design (30%) */}
            <CometCard className="w-full lg:w-[40%]">
              <Link href={services[3].link} className="block group h-full">
                <div
                  id="graphics-design"
                  className="h-[400px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-6 sm:p-8 md:p-10 hover:border-purple-600 transition-all duration-500 relative overflow-hidden"
                  onMouseEnter={() => setHoveredCard(4)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="mb-4 sm:mb-6">
                    <div className="text-purple-400 text-xs sm:text-sm mb-2">
                      {services[3].category}
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 group-hover:text-purple-400 transition-colors">
                      {services[3].title}
                    </h3>
                  </div>

                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {services[3].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1 text-xs sm:text-sm">
                          ✦
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

                  <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
                </div>
              </Link>
            </CometCard>
          </div>

          {/* Row 3: 40% - 60% */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            {/* Card 5 - SEO Services (40%) */}
            <CometCard className="w-full lg:w-[40%]">
              <Link href={services[4].link} className="block group h-full">
                <div
                  id="seo-services"
                  className="h-[400px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-6 sm:p-8 md:p-10 hover:border-purple-600 transition-all duration-500 relative overflow-hidden"
                  onMouseEnter={() => setHoveredCard(5)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="mb-4 sm:mb-6">
                    <div className="text-purple-400 text-xs sm:text-sm mb-2">
                      {services[4].category}
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 group-hover:text-purple-400 transition-colors">
                      {services[4].title}
                    </h3>
                  </div>

                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {services[4].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1 text-xs sm:text-sm">
                          ✦
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

                  <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
                </div>
              </Link>
            </CometCard>

            {/* Card 6 - UI/UX (60%) */}
            <CometCard className="w-full lg:w-[60%]">
              <Link href={services[5].link} className="block group h-full">
                <div
                  id="ui-ux"
                  className="h-[400px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-6 sm:p-8 md:p-10 hover:border-purple-600 transition-all duration-500 relative overflow-hidden"
                  onMouseEnter={() => setHoveredCard(6)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="mb-4 sm:mb-6">
                    <div className="text-purple-400 text-xs sm:text-sm mb-2">
                      {services[5].category}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8 group-hover:text-purple-400 transition-colors">
                      {services[5].title}
                    </h3>
                  </div>

                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {services[5].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3">
                        <span className="text-purple-400 mt-1 text-sm">✦</span>
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
              </Link>
            </CometCard>
          </div>

          {/* Row 4: 55% - 45% */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            {/* Card 7 - AI Automation (55%) */}
            <CometCard className="w-full lg:w-[55%]">
              <Link href={services[6].link} className="block group h-full">
                <div
                  id="ai-automation"
                  className="h-[400px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-6 sm:p-8 md:p-10 hover:border-purple-600 transition-all duration-500 relative overflow-hidden"
                  onMouseEnter={() => setHoveredCard(7)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="mb-4 sm:mb-6">
                    <div className="text-purple-400 text-xs sm:text-sm mb-2">
                      {services[6].category}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8 group-hover:text-purple-400 transition-colors">
                      {services[6].title}
                    </h3>
                  </div>

                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {services[6].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3">
                        <span className="text-purple-400 mt-1 text-sm">✦</span>
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
              </Link>
            </CometCard>

            {/* Card 8 - Cyber Security (45%) */}
            <CometCard className="w-full lg:w-[45%]">
              <Link href={services[7].link} className="block group h-full">
                <div
                  id="cyber-security"
                  className="h-[400px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-6 sm:p-8 md:p-10 hover:border-purple-600 transition-all duration-500 relative overflow-hidden"
                  onMouseEnter={() => setHoveredCard(8)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="mb-4 sm:mb-6">
                    <div className="text-purple-400 text-xs sm:text-sm mb-2">
                      {services[7].category}
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 group-hover:text-purple-400 transition-colors">
                      {services[7].title}
                    </h3>
                  </div>

                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {services[7].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1 text-xs sm:text-sm">
                          ✦
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

                  <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
                </div>
              </Link>
            </CometCard>
          </div>
        </div>
      </div>
    </div>
  );
}

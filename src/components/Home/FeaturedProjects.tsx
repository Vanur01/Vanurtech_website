"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { projectApi, Project } from "@/api";

export default function FeaturedProjects() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      setError("");

      try {
        const response = await projectApi.getAllProjects({
          page: 1,
          limit: 6, // Only fetch 6 projects for featured section
        });

        if (response.success) {
          setProjects(response.result.projects);
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch projects");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.15,
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as any,
      },
    }),
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-8 py-20"
      style={{ backgroundColor: "#0A0012" }}
    >
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-purple-500 mb-6 sm:mb-8"
          >
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-purple-400 italic text-xs sm:text-sm">
              Featured Projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            <span className="text-white">Our Work That</span>
            <br className="hidden sm:block" />
            <span className="text-purple-500 italic">Speaks</span>
            <span className="text-white"> for Itself</span>
          </motion.h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            A glimpse into some of the impactful digital experiences we’ve
            crafted across industries — from website design to custom
            applications.
          </p>

          {/* Decorative Line with Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <div className="w-px h-12 sm:h-16 mt-5 bg-linear-to-b from-purple-500 to-transparent"></div>
            <div className="absolute">
              <div className="w-8 h-8 sm:w-12 mt-5 sm:h-12 rounded-full bg-white p-1 sm:p-2 flex items-center justify-center">
                <img
                  src="/images/logo-1.png"
                  alt="Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
              <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-purple-400" />
            </div>
            <p className="text-gray-400 mt-6 text-lg">
              Loading featured projects...
            </p>
          </div>
        )}

        {/* Error State */}
        {error && !isLoading && (
          <div className="text-center py-20">
            <p className="text-red-400 mb-6 text-lg">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Projects Grid - Alternating Layout (Only 6 projects) */}
        {!isLoading && !error && projects.length > 0 && (
          <div className="space-y-6 sm:space-y-8 mt-12 sm:mt-20">
            {/* Row 1: 40% - 60% */}
            {projects.length >= 1 && (
              <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
                {projects[0] && (
                  <motion.div
                    custom={0}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                    className="w-full lg:w-[40%]"
                  >
                    <ProjectCard
                      project={projects[0]}
                      hoveredCard={hoveredCard}
                      setHoveredCard={setHoveredCard}
                    />
                  </motion.div>
                )}
                {projects[1] && (
                  <motion.div
                    custom={1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                    className="w-full lg:w-[60%]"
                  >
                    <ProjectCard
                      project={projects[1]}
                      hoveredCard={hoveredCard}
                      setHoveredCard={setHoveredCard}
                    />
                  </motion.div>
                )}
              </div>
            )}

            {/* Row 2: 60% - 40% */}
            {projects.length >= 3 && (
              <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
                {projects[2] && (
                  <motion.div
                    custom={2}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                    className="w-full lg:w-[60%]"
                  >
                    <ProjectCard
                      project={projects[2]}
                      hoveredCard={hoveredCard}
                      setHoveredCard={setHoveredCard}
                    />
                  </motion.div>
                )}
                {projects[3] && (
                  <motion.div
                    custom={3}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                    className="w-full lg:w-[40%]"
                  >
                    <ProjectCard
                      project={projects[3]}
                      hoveredCard={hoveredCard}
                      setHoveredCard={setHoveredCard}
                    />
                  </motion.div>
                )}
              </div>
            )}

            {/* Row 3: 40% - 60% */}
            {projects.length >= 5 && (
              <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
                {projects[4] && (
                  <motion.div
                    custom={4}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                    className="w-full lg:w-[40%]"
                  >
                    <ProjectCard
                      project={projects[4]}
                      hoveredCard={hoveredCard}
                      setHoveredCard={setHoveredCard}
                    />
                  </motion.div>
                )}
                {projects[5] && (
                  <motion.div
                    custom={5}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                    className="w-full lg:w-[60%]"
                  >
                    <ProjectCard
                      project={projects[5]}
                      hoveredCard={hoveredCard}
                      setHoveredCard={setHoveredCard}
                    />
                  </motion.div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !error && projects.length === 0 && (
          <div className="text-center py-20">
            <Sparkles className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <p className="text-gray-400 text-lg">
              No featured projects available yet.
            </p>
          </div>
        )}

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20 mb-10"
        >
      <div className="flex flex-col items-center text-center px-4">
  
  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
    <span className="text-white block">Glide Through Our</span>
    <span className="text-purple-500 italic block">Infinite Creations</span>
  </h2>

  <p className="mt-4 text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl">
    Every scroll reveals thoughtful design, intuitive UX, and purposeful
    development — crafted to keep users engaged and businesses ahead.
  </p>
</div>

          <div className="flex items-center justify-center gap-4">
            <Link href="/work">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 mt-10 rounded-full text-white font-semibold text-lg border border-purple-500 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50"
              >
                <span className="relative z-10">Land on Projects</span>
                <svg
                  className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>

                {/* Animated gradient overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: Project; // Use API Project type instead of local type
  hoveredCard: string | null;
  setHoveredCard: (id: string | null) => void;
}

function ProjectCard({
  project,
  hoveredCard,
  setHoveredCard,
}: ProjectCardProps) {
  return (
    <div
      className="group relative h-full"
      onMouseEnter={() => setHoveredCard(project._id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {/* Card Container */}
      <div className="h-full rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/20 to-transparent overflow-hidden hover:border-purple-600 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
        {/* Content Section */}
        <div className="p-4 sm:p-6 md:p-8">
          <div className="text-xs text-purple-400 mb-3 sm:mb-4">
            {typeof project.category === "string"
              ? project.category
              : project.category?.name || "Project"}
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base line-clamp-3">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex items-center gap-2 flex-wrap mb-4">
            {project.tags && project.tags.length > 0 ? (
              project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 sm:px-4 py-1 rounded-full bg-purple-900/30 text-purple-400 text-xs sm:text-sm font-semibold"
                >
                  {tag}
                </span>
              ))
            ) : (
              <span className="px-3 sm:px-4 py-1 rounded-full bg-purple-900/30 text-purple-400 text-xs sm:text-sm font-semibold">
                {typeof project.category === "string"
                  ? project.category
                  : project.category?.name || "Project"}
              </span>
            )}
          </div>

          {/* Visit Website Button */}
          {project.website && (
            <div>
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-xs sm:text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
              >
                <span>Visit Website</span>
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            </div>
          )}
        </div>

        {/* Image Section */}
        <div className="relative overflow-hidden px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
          <div
            className="rounded-xl sm:rounded-2xl overflow-hidden transform transition-transform duration-700 group-hover:scale-105"
            style={{
              boxShadow:
                hoveredCard === project._id
                  ? "0 20px 60px rgba(168, 85, 247, 0.4)"
                  : "0 10px 30px rgba(0, 0, 0, 0.5)",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 sm:h-56 md:h-64 object-cover transition-all duration-700 group-hover:brightness-110"
            />
          </div>
        </div>
      </div>

      {/* Glow Effect on Hover */}
      <div
        className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none"
        style={{ zIndex: -1 }}
      ></div>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projectApi, Project, categoryApi, Category } from '@/api';

const API_BASE = "https://vanurtech-backend-admin-2-8vsl.onrender.com";

const LEAD_TOKEN_KEY = "leadToken";
const LEAD_EXPIRY_KEY = "leadTokenExpiry";
const ONE_DAY = 24 * 60 * 60 * 1000;

const hasValidLeadAccess = (): boolean => {
  const token = localStorage.getItem(LEAD_TOKEN_KEY);
  const expiry = localStorage.getItem(LEAD_EXPIRY_KEY);

  if (!token || !expiry) return false;

  if (Date.now() > Number(expiry)) {
    localStorage.removeItem(LEAD_TOKEN_KEY);
    localStorage.removeItem(LEAD_EXPIRY_KEY);
    return false;
  }

  return true;
};

export default function ProjectsGrid() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const itemsPerPage = 24;

  // Clear expired token on mount
  useEffect(() => {
    const expiry = localStorage.getItem(LEAD_EXPIRY_KEY);
    if (expiry && Date.now() > Number(expiry)) {
      localStorage.removeItem(LEAD_TOKEN_KEY);
      localStorage.removeItem(LEAD_EXPIRY_KEY);
    }
  }, []);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      setCurrentPage(1);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await categoryApi.getAllCategories({ limit: 100 });
      if (res.success) setCategories(res.result);
    };
    fetchCategories();
  }, []);

  // Fetch projects
  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      setError("");
      try {
        const res = await projectApi.getAllProjects({
          page: 1,
          limit: 1000,
          search: debouncedSearch,
        });
        if (res.success) setAllProjects(res.result.projects);
      } catch (err: any) {
        setError(err.message || "Failed to fetch projects");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, [debouncedSearch]);

  // Frontend filtering by category
  const filteredProjects = selectedCategory === 'All'
    ? allProjects
    : allProjects.filter(project => {
      const categoryId = typeof project.category === 'string'
        ? project.category
        : project.category?._id;
      return categoryId === selectedCategory;
    });

  // Count projects per category
  const categoryCountMap = React.useMemo(() => {
    const map: Record<string, number> = {};
    allProjects.forEach((project) => {
      const categoryId = typeof project.category === 'string'
        ? project.category
        : project.category?._id;
      if (!categoryId) return;
      map[categoryId] = (map[categoryId] || 0) + 1;
    });
    return map;
  }, [allProjects]);

  // Sort categories by project count
  const sortedCategories = React.useMemo(() => {
    return [...categories].sort((a, b) => {
      const countA = categoryCountMap[a._id] || 0;
      const countB = categoryCountMap[b._id] || 0;
      return countB - countA;
    });
  }, [categories, categoryCountMap]);

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const projects = filteredProjects.slice(startIndex, endIndex);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as any,
      },
    }),
  };

  return (
    <div className="flex items-center justify-center p-4 sm:p-6 md:p-8 py-12 sm:py-16 md:py-20" style={{ backgroundColor: '#0B0011' }}>
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight"
          >
            <span className="text-white">All </span>
            <span className="text-purple-500">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8"
          >
            Explore our complete portfolio of digital creations
          </motion.p>

          {/* Category Filter and Search */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between"
          >
            {/* Category Filter */}
            <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide w-full lg:w-auto">
              <button
                onClick={() => { setSelectedCategory('All'); setCurrentPage(1); }}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${selectedCategory === 'All'
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-purple-900/20 text-gray-400 border border-purple-900/50 hover:border-purple-600 hover:text-white'
                  }`}
              >
                All
              </button>
              {sortedCategories.map((category) => (
                <button
                  key={category._id}
                  onClick={() => { setSelectedCategory(category._id); setCurrentPage(1); }}
                  className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${selectedCategory === category._id
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                      : 'bg-purple-900/20 text-gray-400 border border-purple-900/50 hover:border-purple-600 hover:text-white'
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Search Field */}
            <div className="relative w-full lg:w-80">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2.5 pl-10 bg-purple-900/20 border border-purple-900/50 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </motion.div>

          {/* Search Info */}
          {debouncedSearch && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-sm text-gray-400">
              {isLoading ? (
                <span>🔍 Searching...</span>
              ) : (
                <span>
                  Found {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} for "{debouncedSearch}"
                  {filteredProjects.length > 0 && ` (showing page ${currentPage} of ${totalPages})`}
                </span>
              )}
            </motion.div>
          )}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        )}

        {/* Error State */}
        {error && !isLoading && (
          <div className="text-center py-20">
            <p className="text-red-400 text-lg">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            >
              Retry
            </button>
          </div>
        )}

        {/* Projects Grid */}
        {!isLoading && !error && (
          <div className="space-y-6 sm:space-y-8">
            {projects.length === 0 ? (
              <div className="text-center py-12 sm:py-20">
                <p className="text-gray-400 text-lg sm:text-xl">
                  {debouncedSearch || selectedCategory !== 'All'
                    ? 'No projects found matching your criteria.'
                    : 'No projects available yet.'}
                </p>
              </div>
            ) : (
              <>
                {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, rowIndex) => {
                  const project1 = projects[rowIndex * 2];
                  const project2 = projects[rowIndex * 2 + 1];
                  const isEvenRow = rowIndex % 2 === 0;

                  return (
                    <div key={rowIndex} className="flex flex-col lg:flex-row gap-6 sm:gap-8">
                      {project1 && (
                        <motion.div
                          custom={rowIndex * 2}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.3 }}
                          variants={cardVariants}
                          className={`w-full ${isEvenRow ? 'lg:w-[40%]' : 'lg:w-[60%]'}`}
                        >
                          <ProjectCard project={project1} hoveredCard={hoveredCard} setHoveredCard={setHoveredCard} />
                        </motion.div>
                      )}
                      {project2 && (
                        <motion.div
                          custom={rowIndex * 2 + 1}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.3 }}
                          variants={cardVariants}
                          className={`w-full ${isEvenRow ? 'lg:w-[60%]' : 'lg:w-[40%]'}`}
                        >
                          <ProjectCard project={project2} hoveredCard={hoveredCard} setHoveredCard={setHoveredCard} />
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-12">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-6 py-2 rounded-full bg-purple-900/20 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-900/40 transition-colors"
                >
                  Previous
                </button>
                <span className="text-gray-400">Page {currentPage} of {totalPages}</span>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="px-6 py-2 rounded-full bg-purple-900/20 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-900/40 transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── ProjectCard ───────────────────────────────────────────────────────────────

interface ProjectCardProps {
  project: Project;
  hoveredCard: number | null;
  setHoveredCard: (id: number | null) => void;
}

function ProjectCard({ project, hoveredCard, setHoveredCard }: ProjectCardProps) {
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedWebsite, setSelectedWebsite] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const handleVisitClick = (website: string) => {
    const hasAccess = hasValidLeadAccess();
    if (hasAccess) {
      window.open(website, "_blank");
      return;
    }
    setSelectedWebsite(website);
    setOpenPopup(true);
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setFormError("");
  setFormSuccess("");

  // ✅ Validation
  if (!name.trim()) {
    setFormError("Name is required");
    return;
  }

  if (!/^[6-9]\d{9}$/.test(phone)) {
    setFormError("Please enter a valid Indian phone number");
    return;
  }

  try {
    setLoading(true);

    // ✅ Save lead (optional but good)
    const res = await fetch(`${API_BASE}/api/v1/lead`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone }),
    });

    const data = await res.json();

    if (!res.ok) {
      setFormError(data.message || "Something went wrong");
      return;
    }

    // ✅ Save token
    if (data.token) {
      localStorage.setItem(LEAD_TOKEN_KEY, data.token);
      localStorage.setItem(LEAD_EXPIRY_KEY, (Date.now() + ONE_DAY).toString());
    }

    setFormSuccess("Redirecting to WhatsApp...");

    // ✅ WhatsApp redirect
    setTimeout(() => {
      const whatsappNumber = "917978874959";

      const message = `Hi Vanurmedia! 👋

*Name:* ${name}
*Phone:* ${phone}

I'm interested in this project:
*Project:* ${project.title}
*Website:* ${selectedWebsite}

Please share more details.`;

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, "_blank");

      // reset
      setOpenPopup(false);
      setName("");
      setPhone("");
      setFormSuccess("");
    }, 1000);

  } catch {
    setFormError("Server error. Please try again.");
  } finally {
    setLoading(false);
  }
};
  return (
    <div
      className="group relative h-full"
      onMouseEnter={() => setHoveredCard(parseInt(project._id.slice(-4), 16))}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div className="h-full rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/20 to-transparent overflow-hidden hover:border-purple-600 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
        <div className="p-4 sm:p-6 md:p-8">
          <div className="text-xs text-purple-400 mb-3 sm:mb-4">
            {typeof project.category === 'string' ? project.category : project.category?.name || 'Uncategorized'}
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags && project.tags.map((tag) => (
              <span key={tag} className="px-3 sm:px-4 py-1 rounded-full bg-purple-900/30 text-purple-400 text-xs sm:text-sm font-semibold">
                {tag}
              </span>
            ))}
          </div>

          {/* Visit Website Button */}
          {project.website && (
            <button
              onClick={() => handleVisitClick(project.website!)}
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-xs sm:text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
            >
              <span>Visit Website</span>
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          )}
        </div>

        {/* Image */}
        <div className="relative overflow-hidden px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
          <div
            className="rounded-xl sm:rounded-2xl overflow-hidden transform transition-transform duration-700 group-hover:scale-105"
            style={{
              boxShadow: hoveredCard === parseInt(project._id.slice(-4), 16)
                ? '0 20px 60px rgba(168, 85, 247, 0.4)'
                : '0 10px 30px rgba(0, 0, 0, 0.5)',
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

      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none" style={{ zIndex: -1 }} />

      {/* Lead Popup */}
      {openPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <form onSubmit={handleSubmit} className="w-full max-w-md rounded-2xl bg-[#14001f] p-8 space-y-6">
            <h2 className="text-2xl font-bold text-white">Enter your details</h2>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full bg-transparent border-b border-white/30 text-white py-2 outline-none"
            />

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              className="w-full bg-transparent border-b border-white/30 text-white py-2 outline-none"
            />

            {formError && (
              <div className="w-full rounded-xl bg-red-500/10 border border-red-500/30 px-4 py-3 text-red-400 text-sm flex items-center gap-2">
                <span>✖</span> {formError}
              </div>
            )}

            {formSuccess && (
              <div className="w-full rounded-xl bg-green-500/10 border border-green-500/30 px-4 py-3 text-green-400 text-sm flex items-center gap-2">
                <span>✔</span> {formSuccess}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-purple-600 py-3 text-white font-semibold hover:bg-purple-500 transition-colors disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit & Continue"}
            </button>

            <button
              type="button"
              onClick={() => setOpenPopup(false)}
              className="w-full text-sm text-white/60 hover:text-white transition-colors"
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
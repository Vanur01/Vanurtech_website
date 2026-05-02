"use client";

import React, { useState, useEffect, useRef } from "react";
import { Sparkles, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
// import { projectApi, Project } from "@/api";
import productDataJSON from "@/data/productData";
import { COUNTRIES } from "@/constants/countries";

type Category = {
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type Project = {
  _id: string;
  category: Category | string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  website?: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

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

export default function FeaturedProjects() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Load first 6 projects from static data
  useEffect(() => {
    try {
      const all = productDataJSON.result.projects as Project[];
      setProjects(all.slice(0, 6));
    } catch (err: any) {
      setError(err.message || "Failed to load projects");
    } finally {
      setIsLoading(false);
    }
  }, []);

  /* API call (commented out — using static data above)
  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      setError("");

      try {
        const response = await projectApi.getAllProjects({
          page: 1,
          limit: 6,
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
  */

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
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-10 sm:py-12"
      style={{ backgroundColor: "#0A0012" }}
    >
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-8"
          >
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-purple-300 text-xs sm:text-sm font-medium tracking-wide">
              Featured Case Studies
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight"
          >
            <span className="text-white">Our Work That</span>
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">
              {" "}Speaks{" "}
            </span>
            <span className="text-white">for Itself</span>
          </motion.h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            A glimpse into some of the impactful digital experiences we’ve
            crafted across industries from website design to custom
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
          className="text-center mt-12 mb-6"
        >
          <div className="flex flex-col items-center text-center px-4">

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              <span className="text-white">Glide Through Our</span>
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">
                Infinite Creations
              </span>
            </h2>

            <p className="mt-4 text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl">
              Every scroll reveals thoughtful design, intuitive UX, and purposeful
              development crafted to keep users engaged and businesses ahead.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Link href="/work">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 mt-10 rounded-full text-white font-semibold text-sm sm:text-lg border border-purple-500 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50"
              >
                <span className="relative z-10">Land on Projects</span>
                <svg
                  className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
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
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedWebsite, setSelectedWebsite] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [countryLabel, setCountryLabel] = useState("IN");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const selectedCountry = COUNTRIES.find(c => c.label === countryLabel) || COUNTRIES[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

    if (!name.trim()) {
      setFormError("Name is required");
      return;
    }

    const fullMobile = `${selectedCountry.code}${phone}`;
    const cleanMobile = fullMobile.replace(/[\s\-()]/g, "");

    if (!/^\+?[0-9]{7,15}$/.test(cleanMobile)) {
      setFormError("Please enter a valid phone number");
      return;
    }

    try {
      setLoading(true);

      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: "c523f882-5e4e-4327-ade4-29b6b02162bf",
            subject: "New Project Lead Submission",
            name: name.trim(),
            phone: cleanMobile,
            project: project.title,
            website: selectedWebsite || "",
            message: `Project Lead\nName: ${name.trim()}\nPhone: ${cleanMobile}\nProject: ${project.title}\nWebsite: ${selectedWebsite}`,
          }),
        });
      } catch (web3Err) {
        console.error("Web3Forms error:", web3Err);
      }

      const res = await fetch(`${API_BASE}/api/v1/lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone: cleanMobile }),
      });

      const data = await res.json();

      if (!res.ok) {
        setFormError(data.message || "Something went wrong");
        return;
      }

      if (data.token) {
        localStorage.setItem(LEAD_TOKEN_KEY, data.token);
        localStorage.setItem(LEAD_EXPIRY_KEY, (Date.now() + ONE_DAY).toString());
      }

      setFormSuccess("🎉 Thank you! Redirecting to WhatsApp...");

      setTimeout(() => {
        const whatsappNumber = "7978874959";

        const message = `Hi Vanurtech Media Pvt. Ltd.! 👋\n\n*Name:* ${name.trim()}\n*Phone:* ${cleanMobile}\n\nI'm interested in this project:\n*Project:* ${project.title}\n*Website:* ${selectedWebsite}\n\nPlease share more details.`;

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, "_blank");

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
      onMouseEnter={() => setHoveredCard(project._id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div className="h-full rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/20 to-transparent overflow-hidden hover:border-purple-600 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
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

          {project.website && (
            <div>
              <button
                onClick={() => handleVisitClick(project.website!)}
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-xs sm:text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
              >
                <span>Visit Website</span>
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          )}
        </div>

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

      <div
        className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none"
        style={{ zIndex: -1 }}
      ></div>

      {openPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <form onSubmit={handleSubmit} className="w-full max-w-md rounded-2xl bg-[#14001f] p-8 space-y-6 shadow-[0_0_40px_rgba(168,85,247,0.3)]">
            <h2 className="text-2xl font-bold text-white">Enter your details</h2>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full bg-transparent border-b border-white/30 text-white py-2 outline-none focus:border-purple-500 transition-colors"
            />

            <div className="flex items-end gap-3">
              <div className="relative shrink-0 w-[90px]" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full h-[42px] bg-transparent border-b border-white/30 text-white outline-none flex items-center justify-between pb-1 px-1 focus:border-purple-500 transition-colors"
                >
                  <img src={selectedCountry.flag} alt="flag" className="w-5 h-auto rounded-[2px] object-cover shrink-0" />
                  <span className="text-sm font-medium">{selectedCountry.code}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60 shrink-0 ml-1"><path d="m6 9 6 6 6-6" /></svg>
                </button>
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-[calc(100%+4px)] left-0 w-[160px] max-h-48 overflow-y-auto bg-[#14001f] border border-purple-500/30 rounded-xl shadow-2xl z-[100] p-2 custom-scrollbar"
                    >
                      {COUNTRIES.map((c) => (
                        <li
                          key={c.label}
                          onClick={() => {
                            setCountryLabel(c.label);
                            setIsDropdownOpen(false);
                          }}
                          className="flex items-center gap-3 p-2 hover:bg-purple-500/20 rounded-lg cursor-pointer transition-colors"
                        >
                          <img src={c.flag} alt="flag" className="w-6 h-auto rounded-[2px] object-cover" />
                          <span className="text-white text-sm font-medium">{c.code} ({c.label})</span>
                        </li>
                      ))}
                      <li className="h-2 w-full shrink-0" aria-hidden="true" />
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                type="tel"
                className="w-full h-[42px] flex-1 bg-transparent border-b border-white/30 text-white outline-none pb-1 px-1 focus:border-purple-500 transition-colors"
              />
            </div>

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

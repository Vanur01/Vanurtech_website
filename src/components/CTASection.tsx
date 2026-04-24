"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Rocket,
  Phone,
  MessageSquare,
  Send,
  CheckCircle,
  XCircle,
  PhoneCall,
  Sparkles,
  ArrowRight,
  User
} from "lucide-react";
import { ctaApi } from "@/api";
import { motion, AnimatePresence } from "framer-motion";
import { COUNTRIES } from "@/constants/countries";

export default function CTASection() {
  const [countryLabel, setCountryLabel] = useState("IN");
  const selectedCountry = COUNTRIES.find(c => c.label === countryLabel) || COUNTRIES[0];
  const [mobile, setMobile] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const showNotification = (type: "success" | "error", message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      showNotification("error", "Please enter your name");
      return;
    }

    const fullMobile = `${selectedCountry.code}${mobile}`;
    const cleanMobile = fullMobile.replace(/[\s\-()]/g, "");
    if (!/^\+?[0-9]{7,15}$/.test(cleanMobile)) {
      showNotification("error", "Please enter a valid mobile number");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await ctaApi.submitCTA({
        mobile: cleanMobile,
        message: name.trim(), // Sending name in the message field
      });

      if (response.success) {
        // Clear form
        setMobile("");
        setName("");

        // Show success message
        showNotification("success", "Thank you! We'll get back to you soon!");
      }
    } catch (error: any) {
      console.error("CTA submission error:", error);
      showNotification("error", error.message || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const actionItems = [
    { icon: <PhoneCall className="w-5 h-5 text-purple-400" />, text: "Talk to Experts" },
    { icon: <MessageSquare className="w-5 h-5 text-purple-400" />, text: "Get Free Consultation" },
    { icon: <Rocket className="w-5 h-5 text-purple-400" />, text: "Start Your Project Today" },
  ];

  return (
    <div id="consultation" className="relative mt-0 mb-6 w-full bg-[#0B0011] px-4 pt-8 md:pt-10 pb-10 sm:pb-14 md:pb-20">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 -right-1/4 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed top-4 right-4 z-[3999]"
          >
            <div
              className={`flex items-center gap-3 rounded-2xl px-6 py-4 shadow-2xl backdrop-blur-xl border border-purple-500/20 ${notification.type === "success"
                ? "bg-purple-500/10 border-purple-500/20 text-purple-200"
                : "bg-red-500/10 border-red-500/20 text-red-400"
                }`}
            >
              {notification.type === "success" ? (
                <CheckCircle className="w-6 h-6" />
              ) : (
                <XCircle className="w-6 h-6" />
              )}
              <p className="text-sm font-medium pr-4">{notification.message}</p>
              <button
                onClick={() => setNotification(null)}
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                <XCircle className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Content Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-5 sm:mb-6 tracking-wider">
              <Sparkles className="w-3 h-3" />
              Upgrade Your Business
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Let&apos;s Solve Your Business{" "}
              <span className="bg-linear-to-r from-purple-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
                Challenges with AI
              </span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-xl mb-8 sm:mb-10 leading-relaxed opacity-80">
              Get a free consultation and discover how custom software can transform
              your operations and increase your revenue.
            </p>

            <div className="space-y-3 sm:space-y-4">
              {actionItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="flex items-center gap-3 sm:gap-4 group cursor-default"
                >
                  <div className="p-2.5 sm:p-3 rounded-xl bg-purple-500/5 border border-purple-500/10 group-hover:bg-purple-500/20 group-hover:border-purple-500/30 transition-all duration-300 shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base font-medium group-hover:text-white transition-colors duration-300">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Form Glow */}
            <div className="absolute inset-0 bg-purple-500/10 blur-3xl -z-10" />

            <div className="rounded-2xl sm:rounded-3xl border border-purple-500/20 bg-purple-950/30 backdrop-blur-md p-5 sm:p-8 md:p-10 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Ready to start?</h3>
              <p className="text-gray-400 text-sm sm:text-base mb-5 sm:mb-6">Tell us about your project and we&apos;ll get back to you.</p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Name Input */}
                <div className="relative group">
                  <div className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 text-purple-400 group-focus-within:text-pink-400 transition-colors">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-purple-900/20 border border-purple-500/20 rounded-xl sm:rounded-2xl py-3.5 sm:py-4 pl-12 sm:pl-14 pr-4 sm:pr-5 text-white text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all placeholder:text-gray-500"
                  />
                </div>

                {/* Mobile Number Input */}
                <div className="flex gap-2 sm:gap-3">
                  <div className="relative w-[100px] sm:w-[115px] shrink-0" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full h-full bg-purple-900/20 border border-purple-500/20 rounded-xl sm:rounded-2xl py-3.5 sm:py-4 px-3 sm:px-4 text-white text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all flex items-center justify-between"
                    >
                      <img
                        src={selectedCountry.flag}
                        alt="flag"
                        className="w-5 sm:w-6 h-auto rounded-[2px] object-cover shrink-0"
                      />
                      <span className="font-medium tracking-tight mx-1">{selectedCountry.code}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400 shrink-0"><path d="m6 9 6 6 6-6" /></svg>
                    </button>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.ul
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-[calc(100%+8px)] left-0 w-[140px] sm:w-[160px] max-h-52 overflow-y-auto bg-[#0B0011] border border-purple-500/20 rounded-xl shadow-2xl z-[100] p-2 custom-scrollbar"
                        >
                          {COUNTRIES.map((c) => (
                            <li
                              key={c.label}
                              onClick={() => {
                                setCountryLabel(c.label);
                                setIsDropdownOpen(false);
                              }}
                              className="flex items-center gap-3 p-3 hover:bg-purple-500/20 rounded-lg cursor-pointer transition-colors"
                            >
                              <img src={c.flag} alt="flag" className="w-6 h-auto rounded-[2px] object-cover" />
                              <span className="text-white text-sm font-medium">{c.code} ({c.label})</span>
                            </li>
                          ))}
                          {/* Spacer to ensure the last item is fully visible and not cut off by padding */}
                          <li className="h-2 w-full shrink-0" aria-hidden="true" />
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="relative group flex-1">
                    <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-purple-400 group-focus-within:text-pink-400 transition-colors">
                      <Phone size={18} />
                    </div>
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      required
                      className="w-full bg-purple-900/20 border border-purple-500/20 rounded-xl sm:rounded-2xl py-3.5 sm:py-4 pl-10 sm:pl-12 pr-4 sm:pr-5 text-white text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all placeholder:text-gray-500"
                    />
                  </div>
                </div>

                <div className="flex justify-center pt-2 sm:pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-12 py-3.5 sm:py-4 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl sm:rounded-2xl text-white font-extrabold text-sm sm:text-lg transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:scale-95"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span className="tracking-wide">Submit Request</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

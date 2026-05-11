"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Rocket,
  Phone,
  MessageSquare,
  Send,
  X,
  PhoneCall,
  Sparkles,
  CheckCircle,
  XCircle,
  User,
} from "lucide-react";
import { ctaApi } from "@/api";
import { motion, AnimatePresence } from "framer-motion";
import { COUNTRIES } from "@/constants/countries";

interface CTAModalProps {
  isOpen: boolean;
  onClose: () => void;
}
console.log(CTAModal);
console.log("CTA Modal");
export function CTAModal({ isOpen, onClose }: CTAModalProps) {
  const [countryLabel, setCountryLabel] = useState("IN");
  const selectedCountry =
    COUNTRIES.find((c) => c.label === countryLabel) || COUNTRIES[0];
  const [mobile, setMobile] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
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

  const showNotification = (type: "success" | "error", msg: string) => {
    setNotification({ type, message: msg });
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
      // ✅ Web3Forms — send email notification
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "c523f882-5e4e-4327-ade4-29b6b02162bf",
          subject: "New CTA Consultation Request",
          name: name.trim(),
          phone: cleanMobile,
          message: `CTA Modal submission\nName: ${name.trim()}\nPhone: ${cleanMobile}`,
        }),
      });

      // ✅ Save to backend
      const response = await ctaApi.submitCTA({
        mobile: cleanMobile,
        message: name.trim(),
      });

      if (response.success) {
        const phoneNumber = "919114667215";
        const whatsappMsg = encodeURIComponent(
          `Hi Vanurtech Media Pvt. Ltd.!\n\n*Name:* ${name.trim()}\n*Phone:* ${cleanMobile}\n\nI'd like to get a free consultation. Please get in touch!`,
        );
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMsg}`;
        window.open(whatsappUrl, "_blank");

        setMobile("");
        setName("");
        showNotification(
          "success",
          "🎉 Thank you! Our team will reach out to you shortly.",
        );
        setTimeout(() => onClose(), 2000);
      }
    } catch (error: any) {
      console.error("CTA submission error:", error);
      showNotification("error", error.message || "Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };
  console.log("notification", notification);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg rounded-2xl sm:rounded-3xl border border-purple-500/20 bg-[#0B0011] p-5 sm:p-10 shadow-2xl"
          >
            {/* Background Orbs */}
            <div className="absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none">
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-pink-600/20 rounded-full blur-3xl" />
            </div>

            {/* Header */}
            <div className="relative mb-6 sm:mb-10 flex items-start justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-semibold mb-3">
                  <Sparkles className="w-3 h-3" />
                  Free Consultation
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Let&apos;s Build Something <br />
                  <span className="bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Great Together
                  </span>
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-all shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            {/* Notification */}
            <AnimatePresence>
              {notification && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`mb-6 p-4 rounded-xl border flex items-center gap-3 ${
                    notification.type === "success"
                      ? "bg-green-500/10 border-green-500/20 text-green-400"
                      : "bg-red-500/10 border-red-500/20 text-red-400"
                  }`}
                >
                  {notification.type === "success" ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <XCircle className="w-5 h-5" />
                  )}
                  <p className="text-sm">{notification.message}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form */}
            <form onSubmit={handleSubmit} className="relative space-y-5">
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-purple-900/10 border border-purple-500/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all"
                />
              </div>

              <div className="flex gap-2 sm:gap-3">
                <div
                  className="relative w-[100px] sm:w-[115px] shrink-0"
                  ref={dropdownRef}
                >
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full h-full bg-purple-900/10 border border-purple-500/10 rounded-2xl py-4 px-3 sm:px-4 text-white text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all flex items-center justify-between"
                  >
                    <img
                      src={selectedCountry.flag}
                      alt="flag"
                      className="w-5 sm:w-6 h-auto rounded-[2px] object-cover shrink-0"
                    />
                    <span className="font-medium tracking-tight mx-1">
                      {selectedCountry.code}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-400 shrink-0"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-[calc(100%+8px)] left-0 mt-0 w-[140px] sm:w-[160px] max-h-52 overflow-y-auto bg-[#0B0011] border border-purple-500/20 rounded-xl shadow-2xl z-[100] p-2 custom-scrollbar"
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
                            <img
                              src={c.flag}
                              alt="flag"
                              className="w-6 h-auto rounded-[2px] object-cover"
                            />
                            <span className="text-white text-sm font-medium">
                              {c.code} ({c.label})
                            </span>
                          </li>
                        ))}
                        {/* Spacer to ensure the last item is fully visible and not cut off by padding */}
                        <li
                          className="h-2 w-full shrink-0"
                          aria-hidden="true"
                        />
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
                <div className="relative group flex-1">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400">
                    <Phone size={18} />
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="w-full bg-purple-900/10 border border-purple-500/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative group flex items-center justify-center gap-3 py-4 bg-linear-to-r from-purple-600 to-pink-600 rounded-2xl text-white font-bold transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 shadow-lg shadow-purple-600/20"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Submit Request</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

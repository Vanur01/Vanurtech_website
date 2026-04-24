"use client";

import React, { useState } from "react";
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
  User
} from "lucide-react";
import { ctaApi } from "@/api";
import { motion, AnimatePresence } from "framer-motion";

interface CTAModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CTAModal({ isOpen, onClose }: CTAModalProps) {
  const [mobile, setMobile] = useState("");
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

    if (!/^[0-9]{10}$/.test(mobile)) {
      showNotification("error", "Please enter a valid 10-digit mobile number");
      return;
    }

    setIsSubmitting(true);

    try {
      // Sending name in the message field if the API specifically requires 'message'
      // or we can update the API later if needed.
      const response = await ctaApi.submitCTA({
        mobile,
        message: name.trim(),
      });

      if (response.success) {
        setMobile("");
        setName("");
        showNotification("success", "Thank you! We'll get back to you soon!");
        setTimeout(() => onClose(), 2000);
      }
    } catch (error: any) {
      console.error("CTA submission error:", error);
      showNotification("error", error.message || "Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            className="relative w-full max-w-lg overflow-hidden rounded-2xl sm:rounded-3xl border border-purple-500/20 bg-[#0B0011] p-5 sm:p-10 shadow-2xl"
          >
            {/* Background Orbs */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-pink-600/20 rounded-full blur-3xl" />

            {/* Header */}
            <div className="relative mb-6 sm:mb-10 flex items-start justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-semibold mb-3">
                  <Sparkles className="w-3 h-3" />
                  Free Consultation
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Let&apos;s Build Something <br /> 
                  <span className="bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Great Together</span>
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
                  {notification.type === "success" ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
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

              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400">
                  <Phone size={18} />
                </div>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full bg-purple-900/10 border border-purple-500/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all"
                />
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

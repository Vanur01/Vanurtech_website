"use client";

import React from "react";
import { Sun, DollarSign, MessageCircle, Users, Sparkles, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    category: "Renewable Energy",
    title: "Solar Management Software",
    description: "Monitor, manage, and maximize your solar plant performance with real-time insights and automated alerts.",
    link: "/products/solar-management-software",
    icon: Sun,
    gradient: "from-yellow-500/20 to-orange-500/10",
    border: "hover:border-yellow-500/60",
    iconColor: "text-yellow-400",
    iconBg: "bg-yellow-500/10 border-yellow-500/20",
    titleHover: "group-hover:text-yellow-300",
    tag: "Energy Tech",
    features: ["Plant Performance Monitoring", "Fault Detection & Alerts", "Revenue & ROI Reports", "Customer & AMC Management"],
  },
  {
    id: 2,
    category: "Financial Operations",
    title: "Finance Management Software",
    description: "Automate invoicing, track expenses, and stay GST-compliant with a powerful all-in-one finance platform.",
    link: "/products/finance-management-software",
    icon: DollarSign,
    gradient: "from-blue-500/20 to-cyan-500/10",
    border: "hover:border-blue-500/60",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    titleHover: "group-hover:text-blue-300",
    tag: "FinTech",
    features: ["Invoicing & Billing Automation", "Expense & Budget Management", "GST & Tax Compliance", "Profit & Loss Dashboards"],
  },
  {
    id: 3,
    category: "AI Communication",
    title: "WhatsApp AI Chatbot",
    description: "Engage customers 24/7, capture leads, and automate support — all through WhatsApp powered by AI.",
    link: "/products/whatsapp-ai-chatbot",
    icon: MessageCircle,
    gradient: "from-purple-500/20 to-pink-500/10",
    border: "hover:border-purple-500/60",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10 border-purple-500/20",
    titleHover: "group-hover:text-purple-300",
    tag: "AI & Automation",
    features: ["24/7 Automated Support", "Lead Capture & Qualification", "Order & Booking Management", "Broadcast Campaigns"],
  },
  {
    id: 4,
    category: "HR & Operations",
    title: "HRMS & Field Tracking",
    description: "Manage your workforce and track field agents in real-time with GPS-powered HR and operations software.",
    link: "/products/hrms-field-tracking-software",
    icon: Users,
    gradient: "from-blue-500/20 to-cyan-500/10",
    border: "hover:border-blue-500/60",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    titleHover: "group-hover:text-blue-300",
    tag: "HR Tech",
    features: ["GPS Attendance & Leave", "Live Field Agent Tracking", "Payroll Automation", "Task & Visit Management"],
  },
];

export default function ProductsList() {
  return (
    <div className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0A0012" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-6">
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-purple-300 text-xs sm:text-sm font-medium tracking-wide">Our Product Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Products Built to{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">
              Scale Your Business
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Ready-to-deploy software products engineered to automate, simplify, and grow your operations from day one.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={product.link} className="block group h-full">
                <div className={`relative h-full rounded-2xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 backdrop-blur-sm p-7 sm:p-8 transition-all duration-300 ${product.border} hover:shadow-2xl overflow-hidden`}>

                  {/* Top Row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl border ${product.iconBg} flex items-center justify-center`}>
                      <product.icon size={26} className={product.iconColor} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full border ${product.iconBg} ${product.iconColor}`}>
                        {product.tag}
                      </span>
                      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-white/30">
                        <ArrowUpRight size={14} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className={`text-xl sm:text-2xl font-bold text-white mb-3 ${product.titleHover} transition-colors duration-300`}>
                    {product.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((f, i) => (
                      <span
                        key={i}
                        className="text-xs text-gray-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Finance Dashboard Preview */}
                  {product.id === 2 && (
                    <div className="rounded-xl overflow-hidden border border-blue-500/20 shadow-lg shadow-blue-500/10">
                      <div className="bg-gray-50 flex h-[210px]">
                        {/* Sidebar */}
                        <div className="bg-[#2563eb] w-28 flex-shrink-0 p-2 flex flex-col gap-1">
                          {["Finance Dashboard", "Sales", "Clients", "Quotations", "Invoices", "Sales Orders", "Payment Received", "Delivery Challans"].map((item, i) => (
                            <div key={i} className={`text-[7px] px-2 py-1 rounded ${i === 0 ? "bg-white/20 text-white font-bold" : "text-blue-200"}`}>{item}</div>
                          ))}
                        </div>
                        {/* Main content */}
                        <div className="flex-1 p-3 overflow-hidden">
                          <p className="text-[7px] text-gray-400 mb-1">Home &gt; Finance</p>
                          <div className="flex gap-2 mb-2">
                            <div className="flex-1">
                              <p className="text-[7px] text-blue-600 font-semibold mb-0.5">₹ FINANCE OVERVIEW</p>
                              <p className="text-[9px] font-bold text-gray-800 leading-tight mb-1">Finance dashboard for the full module</p>
                              <div className="flex gap-1 flex-wrap">
                                {["Create Invoice →", "Create Quotation →", "Create Sales Order →"].map((btn) => (
                                  <span key={btn} className="text-[6px] border border-gray-300 rounded px-1.5 py-0.5 text-gray-600">{btn}</span>
                                ))}
                              </div>
                            </div>
                            <div className="flex flex-col gap-1.5 w-24">
                              <div className="bg-[#2563eb] rounded-lg p-2">
                                <p className="text-[6px] text-blue-200 mb-0.5">LIVE SNAPSHOT</p>
                                <p className="text-lg font-bold text-white leading-none">13</p>
                                <p className="text-[6px] text-blue-200 leading-tight">total active sales documents</p>
                              </div>
                              <div className="bg-blue-50 border border-blue-100 rounded-lg p-2">
                                <p className="text-[6px] text-gray-400 mb-0.5">COLLECTIONS</p>
                                <p className="text-[10px] font-bold text-gray-800">₹74,200</p>
                                <p className="text-[6px] text-gray-400">via Payment Received</p>
                              </div>
                            </div>
                          </div>
                          {/* Stats grid */}
                          <div className="grid grid-cols-4 gap-1">
                            {[
                              { label: "Quotations", val: "5", color: "text-blue-500" },
                              { label: "Invoices", val: "7", color: "text-blue-600" },
                              { label: "Proforma Invoices", val: "2", color: "text-purple-500" },
                              { label: "Sales Orders", val: "1", color: "text-orange-500" },
                            ].map((s) => (
                              <div key={s.label} className="bg-white rounded-lg border border-gray-100 p-1.5 shadow-sm">
                                <p className="text-[6px] text-gray-400 mb-0.5">{s.label}</p>
                                <p className={`text-sm font-bold ${s.color}`}>{s.val}</p>
                                <p className="text-[6px] text-blue-500">Open module →</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* WhatsApp AI Chatbot Preview */}
                  {product.id === 3 && (
                    <div className="rounded-xl overflow-hidden border border-purple-500/20 shadow-lg shadow-purple-500/10 relative">
                      {/* Blurred chat background */}
                      <div className="relative bg-[#e5ddd5] p-3 overflow-hidden h-[210px]">
                        {/* Background chat bubbles (blurred) */}
                        <div className="absolute inset-0 p-3 flex flex-col gap-2 blur-[2px] opacity-60 select-none pointer-events-none">
                          <div className="self-start bg-white rounded-xl rounded-tl-none px-3 py-1.5 max-w-[60%] shadow-sm">
                            <p className="text-[8px] text-gray-700">How can I <strong>improve my sleep</strong> quality?</p>
                            <p className="text-[6px] text-gray-400 text-right mt-0.5">12:10 ✓✓</p>
                          </div>
                          <div className="self-end bg-[#dcf8c6] rounded-xl rounded-tr-none px-3 py-1.5 max-w-[65%] shadow-sm">
                            <p className="text-[8px] text-gray-700">Learning a new <strong>language</strong> can be fun! I can suggest some learning resources.</p>
                            <p className="text-[6px] text-gray-400 text-right mt-0.5">09:15</p>
                          </div>
                          <div className="self-start bg-white rounded-xl rounded-tl-none px-3 py-1.5 max-w-[55%] shadow-sm">
                            <p className="text-[8px] text-gray-700">Sleep is essential for overall well-being.</p>
                            <p className="text-[6px] text-gray-400 text-right mt-0.5">12:10</p>
                          </div>
                          <div className="self-end bg-[#dcf8c6] rounded-xl rounded-tr-none px-3 py-1.5 max-w-[50%] shadow-sm">
                            <p className="text-[8px] text-gray-700">What are the top theaters right now?</p>
                          </div>
                        </div>

                        {/* Foreground: Chats panel */}
                        <div className="relative z-10 mx-auto w-[85%] bg-white rounded-2xl shadow-xl overflow-hidden">
                          {/* Header */}
                          <div className="flex items-center justify-between px-4 pt-3 pb-2 border-b border-gray-100">
                            <span className="text-sm font-bold text-gray-900">Chats</span>
                            <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center shadow-md">
                              <MessageCircle size={18} className="text-white fill-white" />
                            </div>
                          </div>
                          <div className="flex gap-4 px-4 py-1.5 border-b border-gray-100">
                            <span className="text-[9px] text-gray-500">Broadcast Lists</span>
                            <span className="text-[9px] text-gray-500">New Group</span>
                          </div>
                          {/* AI Chat row */}
                          <div className="flex items-center gap-3 px-4 py-3">
                            <div className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 border-2 border-green-400">
                              <div className="w-4 h-4 rounded-full bg-green-400 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-gray-900" />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-center">
                                <span className="text-[10px] font-bold text-gray-900">Chat &amp; Ask AI</span>
                                <span className="text-[8px] text-gray-400">Today</span>
                              </div>
                              <p className="text-[9px] text-gray-500 truncate">I got all answers you want!</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Solar Dashboard Preview */}
                  {product.id === 1 && (
                    <div className="rounded-xl overflow-hidden border border-yellow-500/20 shadow-lg shadow-yellow-500/10 bg-white h-[210px] flex items-start">
                      <Image 
                        src="/images/product/WhatsApp Image 2026-04-21 at 5.21.51 PM.jpeg"
                        alt="Solar Management Software Dashboard"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover object-top block transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}

                  {/* HRMS Field Tracking Preview */}
                  {product.id === 4 && (
                    <div className="rounded-xl overflow-hidden border border-blue-500/20 shadow-lg shadow-blue-500/10">
                      <div className="bg-gray-100 flex h-[210px]">
                        {/* Sidebar */}
                        <div className="bg-[#2563eb] w-24 flex-shrink-0 p-2 flex flex-col gap-1">
                          {["Document", "Bank Loan", "Loan Pending", "Disbursement", "Installation", "Missed Leads", "Attendance", "Location Visit", "Expense"].map((item, i) => (
                            <div key={i} className="text-[7px] px-1.5 py-0.5 rounded text-blue-200">{item}</div>
                          ))}
                          <div className="mt-auto pt-2 border-t border-blue-400/30">
                            <p className="text-[7px] text-white font-bold">Sunergy Tech</p>
                            <p className="text-[6px] text-blue-300">v2.2.9</p>
                          </div>
                        </div>
                        {/* Main content */}
                        <div className="flex-1 p-2 overflow-hidden">
                          {/* Top bar */}
                          <div className="flex items-center justify-between mb-2">
                            <div className="bg-white rounded-full px-2 py-0.5 flex items-center gap-1 border border-gray-200">
                              <span className="text-[7px] text-gray-400">Search...</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-5 h-5 rounded-full bg-[#2563eb] flex items-center justify-center">
                                <span className="text-[6px] text-white font-bold">ST</span>
                              </div>
                              <div>
                                <p className="text-[7px] font-bold text-gray-700 leading-none">Sunergy</p>
                                <p className="text-[6px] text-gray-400">Head Office</p>
                              </div>
                            </div>
                          </div>
                          {/* Agent info */}
                          <div className="bg-white rounded-lg p-2 mb-2 flex items-center gap-2 shadow-sm">
                            <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                              <span className="text-[8px] font-bold text-blue-600">DS</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-[8px] font-bold text-gray-800">dipak samal</p>
                              <p className="text-[6px] text-gray-400">TEAM</p>
                            </div>
                            <span className="text-[6px] text-green-600 bg-green-50 border border-green-200 px-1.5 py-0.5 rounded-full">Battery 76%</span>
                            <span className="text-[6px] text-blue-500">9948839928</span>
                          </div>
                          {/* Map */}
                          <div className="relative rounded-lg overflow-hidden bg-[#e8e0d8]" style={{ height: 90 }}>
                            {/* Map grid lines */}
                            <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                              <defs>
                                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#aaa" strokeWidth="0.5" />
                                </pattern>
                              </defs>
                              <rect width="100%" height="100%" fill="url(#grid)" />
                            </svg>
                            {/* Roads */}
                            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                              <line x1="60%" y1="0" x2="55%" y2="100%" stroke="#fff" strokeWidth="4" opacity="0.7" />
                              <line x1="0" y1="40%" x2="100%" y2="45%" stroke="#fff" strokeWidth="3" opacity="0.6" />
                              <line x1="30%" y1="0" x2="25%" y2="100%" stroke="#d1c9be" strokeWidth="2" opacity="0.5" />
                              {/* Route path */}
                              <polyline points="55,10 52,25 50,40 48,55 46,70 44,85" stroke="#dc2626" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                              {/* Start dot */}
                              <circle cx="55" cy="10" r="4" fill="#dc2626" />
                            </svg>
                            {/* Route view popup */}
                            <div className="absolute top-1 left-1 bg-white rounded-lg shadow-md px-2 py-1">
                              <p className="text-[6px] text-gray-400">ROUTE VIEW</p>
                              <p className="text-[7px] font-bold text-gray-800">dipak samal</p>
                              <p className="text-[6px] text-gray-400">TEAM · Updated just now</p>
                            </div>
                            {/* Bottom stats */}
                            <div className="absolute bottom-1 left-1 flex gap-2">
                              <span className="text-[6px] bg-white rounded px-1.5 py-0.5 shadow text-gray-600">● 18 points</span>
                              <span className="text-[6px] bg-white rounded px-1.5 py-0.5 shadow text-gray-600">↑ 2.51 km</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Glow on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-linear-to-br from-white/5 to-transparent" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

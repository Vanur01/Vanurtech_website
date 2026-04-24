"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

const productLinks = [
  { href: "/products/solar-management-software", label: "Solar Management Software" },
  { href: "/products/finance-management-software", label: "Finance Management Software" },
  { href: "/products/whatsapp-ai-chatbot", label: "WhatsApp AI Chatbot" },
  { href: "/products/hrms-field-tracking-software", label: "HRMS & Field Tracking Software" },
];

const serviceLinks = [
  { href: "/website-development-company-india", label: "Website Development" },
  { href: "/mobile-app-development-company-india", label: "Mobile App Development" },
  { href: "/saas-development-company-india", label: "SaaS Development" },
  { href: "/crm-erp-development-company-india", label: "CRM & ERP Development" },
  { href: "/ai-business-automation-india", label: "AI Business Automation" },
  { href: "/seo-services-india", label: "SEO Services" },
  { href: "/ui-ux-design-services-india", label: "UI/UX Design" },
  { href: "/graphic-design-services-india", label: "Graphic Design" },
  { href: "/cyber-security-services-india", label: "Cyber Security" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const productsDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed z-[2999] top-0 left-0 right-0 transition-all duration-300 ${scrolled ? "bg-[#0B0011]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
            <Link href="/">
              <Image
                src="/images/logo-1.png"
                alt="Vanur Logo"
                width={40}
                height={40}
                className="cursor-pointer"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-purple-400 font-medium transition-colors duration-200"
            >
              Home
            </motion.a>
            <motion.a
              href="/about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-purple-400 font-medium transition-colors duration-200"
            >
              About
            </motion.a>

            {/* Services Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                className="text-white hover:text-purple-400 font-medium transition-colors duration-200 flex items-center gap-1 cursor-pointer"
              >
                Services
              </motion.a>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-[#0B0011]/95 backdrop-blur-md border border-purple-900/30 rounded-xl shadow-xl overflow-hidden"
                  >
                    {serviceLinks.map((service, i) => (
                      <motion.div
                        key={service.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                      >
                        <Link
                          href={service.href}
                          className="block px-4 py-3 text-sm text-white hover:text-purple-400 hover:bg-purple-900/20 transition-colors duration-150 border-b border-purple-900/10 last:border-b-0"
                        >
                          {service.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Products Dropdown */}
            <div
              ref={productsDropdownRef}
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <motion.a
                href="/products"
                whileHover={{ scale: 1.05 }}
                className="text-white hover:text-purple-400 font-medium transition-colors duration-200 flex items-center gap-1 cursor-pointer"
              >
                Products
              </motion.a>

              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-[#0B0011]/95 backdrop-blur-md border border-purple-900/30 rounded-xl shadow-xl overflow-hidden"
                  >
                    {productLinks.map((product, i) => (
                      <motion.div
                        key={product.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                      >
                        <Link
                          href={product.href}
                          className="block px-4 py-3 text-sm text-white hover:text-purple-400 hover:bg-purple-900/20 transition-colors duration-150 border-b border-purple-900/10 last:border-b-0"
                        >
                          {product.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {["Projects", "Blog", "Contact Us"].map((label) => {
              const href = label === "Contact Us" ? "/contact" : `/${label.toLowerCase()}`;
              return (
                <motion.a
                  key={href}
                  href={href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white hover:text-purple-400 font-medium transition-colors duration-200"
                >
                  {label}
                </motion.a>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-linear-to-r from-purple-600 to-purple-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-shadow duration-200 flex items-center space-x-2"
              >
                <span>Start a Project</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#0B0011]/95 backdrop-blur-md border-t border-purple-900/20"
          >
            <div className="px-4 py-4 space-y-4">
              {/* Home */}
              <motion.a
                href="/"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0 }}
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-purple-400 font-medium py-2 border-b border-purple-900/20"
              >
                Home
              </motion.a>

              {/* About */}
              <motion.a
                href="/about"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-purple-400 font-medium py-2 border-b border-purple-900/20"
              >
                About
              </motion.a>

              {/* Mobile Services Link */}
              <motion.a
                href="/services"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-purple-400 font-medium py-2 border-b border-purple-900/20"
              >
                Services
              </motion.a>

              {/* Mobile Products Link */}
              <motion.a
                href="/products"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-purple-400 font-medium py-2 border-b border-purple-900/20"
              >
                Products
              </motion.a>

              {/* Projects, Blog, Contact */}
              {[{ href: "/projects", label: "Projects" }, { href: "/blog", label: "Blog" }, { href: "/contact", label: "Contact Us" }].map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (index + 4) * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="block text-white hover:text-purple-400 font-medium py-2 border-b border-purple-900/20"
                >
                  {item.label}
                </motion.a>
              ))}

              <div className="pt-4">
                <Link href="/contact">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(false)}
                    className="w-full bg-linear-to-r from-purple-600 to-purple-500 text-white py-3 rounded-full font-medium flex items-center justify-center space-x-2"
                  >
                    <span>Start a Project</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

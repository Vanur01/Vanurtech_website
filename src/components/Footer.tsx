import React from "react";
import {
  Twitter,
  Facebook,
  Instagram,
  Github,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8"
      style={{ backgroundColor: "#0B0011" }}
    >
      <div
        className="w-full max-w-7xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12"
        style={{
          background: "linear-gradient(135deg, #6B21A8 0%, #4C1D95 100%)",
        }}
      >
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              Fuel Your Growth
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              with VanurTech Media
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-purple-200 text-sm sm:text-sm md:text-md leading-relaxed">
              Welcome to our firm, specializing in Website Development, Custom
              CRM Software Development, ERP Solutions, and Android & iOS
              Application Development.{" "}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-400 mb-8 sm:mb-12"></div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Contact Information Section */}
          <div>
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
              Contact Us
            </h3>

            {/* Main Office */}
            <div className="mb-4 sm:mb-6">
              <div className="flex items-start gap-3 text-purple-200 mb-2">
                <MapPin size={20} className="shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white mb-1">Main Office</p>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Rashulgarh Bhubaneswar, Odisha
                  </p>
                </div>
              </div>
            </div>

            {/* Branch Office */}
            <div className="mb-4 sm:mb-6">
              <div className="flex items-start gap-3 text-purple-200">
                <MapPin size={20} className="shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white mb-1">Branch Office</p>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Lower Ground, Plot No. 26, Sector 20
                    <br />
                    Dwarka, Delhi, 110077
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 text-purple-200 mb-3 sm:mb-4">
              <Phone size={20} className="shrink-0" />
              <a
                href="tel:+917077004890"
                className="text-sm sm:text-base hover:text-white transition-colors"
              >
                +91-7077004890
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 text-purple-200 mb-6 sm:mb-8">
              <Mail size={20} className="shrink-0" />
              <a
                href="mailto:info@vanurmedia.com"
                className="text-sm sm:text-base hover:text-white transition-colors"
              >
                info@vanurmedia.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 sm:gap-4">
              {/* <a
                href="#"
                className="text-white hover:text-purple-300 transition-colors"
              >
                <Twitter size={20} className="sm:w-6 sm:h-6" />
              </a> */}
              <a
                href="https://www.facebook.com/profile.php?id=61551470674556"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-300 transition-colors"
              >
                <Facebook size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.instagram.com/vanur_media?igsh=M2JjYmF3YWNianVh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-300 transition-colors"
              >
                <Instagram size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/vanurmedia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-300 transition-colors"
              >
                <Linkedin size={20} className="sm:w-6 sm:h-6" />
              </a>
              {/* <a
                href="#"
                className="text-white hover:text-purple-300 transition-colors"
              >
                <Github size={20} className="sm:w-6 sm:h-6" />
              </a> */}
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
              Company
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-purple-200 hover:text-white transition-colors text-sm sm:text-base"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-purple-200 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="text-purple-200 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-purple-200 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Map Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
              Find Us
            </h3>

            {/* Google Map Embed */}
            <div className="rounded-xl overflow-hidden border border-purple-400/30 mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.461613126023!2d85.85367567495925!3d20.281151481187703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19098d17fb7bbf%3A0x156cc539fe9c5433!2sVanurtech%20media%20Pvt.%20Ltd.-%20Software%20Development%20Company%20Bhubaneswar%2C%20India!5e0!3m2!1sen!2sin!4v1763795212984!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>

            {/* Get Directions Button */}
            <a
              href="https://maps.app.goo.gl/spJrdpJyv8zwmu7HA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-semibold hover:bg-purple-500 transition-colors"
            >
              <MapPin size={16} />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

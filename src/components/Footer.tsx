import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="w-full py-12 px-4 sm:px-6 md:px-8 border-t border-purple-900/10"
      style={{ backgroundColor: "#0B0011" }}
    >
      <div
        className="max-w-7xl mx-auto rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 overflow-hidden relative"
        style={{
          background: "linear-gradient(135deg, #6B21A8 0%, #4C1D95 100%)",
        }}
      >
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8 mb-10 sm:mb-12 relative z-10">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo-1.png"
                alt="Vanur Logo"
                width={50}
                height={50}
                className="brightness-0 invert"
              />
              <div>
                <h3 className="text-2xl font-bold text-white leading-tight">
                  VanurTech Media
                </h3>
                <p className="text-purple-200 text-sm font-medium tracking-wider uppercase">
                  Fuel Your Growth
                </p>
              </div>
            </Link>
          </div>
          <div className="max-w-md">
            <p className="text-purple-100 text-base leading-relaxed opacity-90">
              Specializing in premium Website Development, Custom CRM, SaaS Solutions,
              and AI-driven Business Automation to scale your enterprise globally.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-12"></div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 relative z-10">
          {/* Contact Information Section */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-bold">Contact Us</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <MapPin size={20} className="text-purple-300 mt-1 shrink-0 group-hover:text-white transition-colors" />
                <p className="text-purple-100 text-sm leading-relaxed">
                  Rashulgarh Bhubaneswar, Odisha, India
                </p>
              </div>

              <div className="flex items-center gap-3 group">
                <Phone size={20} className="text-purple-300 shrink-0 group-hover:text-white transition-colors" />
                <a href="tel:+917077004890" className="text-purple-100 text-sm hover:text-white transition-colors">
                  +91-7077004890
                </a>
              </div>

              <div className="flex items-center gap-3 group">
                <Mail size={20} className="text-purple-300 shrink-0 group-hover:text-white transition-colors" />
                <a href="mailto:info@vanurmedia.com" className="text-purple-100 text-sm hover:text-white transition-colors">
                  info@vanurmedia.com
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61551081436589" },
                { icon: Instagram, href: "https://www.instagram.com/vanur_media?igsh=M2JjYmF3YWNianVh" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/vanurmedia/" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white hover:text-purple-700 transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Section */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-bold">Company</h3>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Portfolio", href: "/work" },
                { name: "Contact Us", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-purple-100 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-300 group-hover:bg-white transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise Section */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-bold">Expertise</h3>
            <ul className="space-y-4">
              {[
                { name: "CRM Development", href: "/crm-development-company-india" },
                { name: "SaaS Solutions", href: "/saas-development-company-india" },
                { name: "Web Development", href: "/website-development-company-india" },
                { name: "AI Automation", href: "/ai-business-automation-india" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-purple-100 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-300 group-hover:bg-white transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Find Us Section */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-bold">Find Us</h3>
            <div className="rounded-2xl overflow-hidden border border-white/20 aspect-video relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.461613126023!2d85.85367567495925!3d20.281151481187703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19098d17fb7bbf%3A0x156cc539fe9c5433!2sVanurtech%20media%20Pvt.%20Ltd.-%20Software%20Development%20Company%20Bhubaneswar%2C%20India!5e0!3m2!1sen!2sin!4v1763795212984!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
              ></iframe>
            </div>
            <a
              href="https://maps.app.goo.gl/spJrdpJyv8zwmu7HA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-sm font-bold transition-all border border-white/10"
            >
              <MapPin size={16} />
              Get Directions
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10">
          <p className="text-purple-200 text-xs">
            &copy; {currentYear} Vanurtech Media Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-purple-200">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

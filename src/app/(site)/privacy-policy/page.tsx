import React from 'react';
import { Shield, Lock, Eye, FileText, Bell, Globe, Mail } from 'lucide-react';
import PageLoader from '@/components/PageLoader';

export const metadata = {
  title: "Privacy Policy | Vanurtech Media",
  description: "Read our privacy policy to understand how Vanurtech Media collects, uses, and protects your personal data.",
};

const PrivacyPolicy = () => {
  return (
    <>
      <PageLoader />
      <div className="min-h-screen bg-[#0B0011] text-white pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-purple-500/10 border border-purple-500/20">
            <Shield className="w-8 h-8 text-purple-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400">
            Privacy Policy
          </h1>
          <p className="text-purple-200/60 max-w-2xl mx-auto">
            Last Updated: April 14, 2026
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-12">
          {/* Introduction */}
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 text-purple-400" />
              Introduction
            </h2>
            <p className="text-purple-100/80 leading-relaxed mb-6">
              At Vanurtech Media Pvt. Ltd. ("we," "us," or "our"), we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-purple-100/80 leading-relaxed">
              By accessing our website and services, you agree to the terms of this Privacy Policy. If you do not agree, please do not use our services.
            </p>
          </section>

          {/* Data Collection */}
          <section>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Eye className="w-6 h-6 text-purple-400" />
              Information We Collect
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4 text-purple-300">Personal Information</h3>
                <p className="text-purple-100/70 text-sm leading-relaxed">
                  We may collect personal details such as your name, email address, phone number, and company name when you fill out contact forms or sign up for our services.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4 text-purple-300">Technical Data</h3>
                <p className="text-purple-100/70 text-sm leading-relaxed">
                  We automatically collect information about your device, including IP address, browser type, operating system, and how you interact with our website.
                </p>
              </div>
            </div>
          </section>

          {/* Usage */}
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Globe className="w-6 h-6 text-purple-400" />
              How We Use Your Data
            </h2>
            <ul className="space-y-4">
              {[
                "To provide and maintain our services effectively.",
                "To notify you about changes to our services or company updates.",
                "To provide customer support and respond to inquiries.",
                "To gather analysis or valuable information to improve our services.",
                "To monitor the usage of our website and detect technical issues."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-purple-100/80">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Security */}
          <section className="bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Lock className="w-6 h-6 text-purple-400" />
              Data Security
            </h2>
            <p className="text-purple-100/80 leading-relaxed mb-6">
              The security of your data is important to us. We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure.
            </p>
            <p className="text-purple-100/80 leading-relaxed">
              However, please remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
            </p>
          </section>

          {/* Cookies */}
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Bell className="w-6 h-6 text-purple-400" />
              Cookies Policy
            </h2>
            <p className="text-purple-100/80 leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          {/* Contact */}
          <section className="text-center bg-purple-600/10 border border-purple-500/20 rounded-3xl p-10">
            <h2 className="text-2xl font-bold mb-4">Questions or Concerns?</h2>
            <p className="text-purple-100/70 mb-8">
              If you have any questions about this Privacy Policy, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a href="mailto:info@vanurmedia.com" className="flex items-center gap-2 text-white bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl transition-all">
                <Mail className="w-5 h-5" />
                info@vanurmedia.com
              </a>
              <a href="tel:+917077004890" className="text-purple-300 font-medium hover:text-white transition-colors">
                +91-7077004890
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
    </>
  );
};

export default PrivacyPolicy;

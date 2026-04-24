import React from 'react';
import { FileText, CheckCircle, AlertCircle, Scale, ShieldAlert, HeartHandshake, Mail } from 'lucide-react';
import PageLoader from '@/components/PageLoader';

export const metadata = {
  title: "Terms of Service | Vanurtech Media",
  description: "Read the terms of service for using Vanurtech Media's website and services.",
};

const TermsOfService = () => {
  return (
    <>
      <PageLoader />
      <div className="min-h-screen bg-[#0B0011] text-white pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-purple-500/10 border border-purple-500/20">
            <Scale className="w-8 h-8 text-purple-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400">
            Terms of Service
          </h1>
          <p className="text-purple-200/60 max-w-2xl mx-auto">
            Effective Date: April 14, 2026
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-12">
          {/* Agreement to Terms */}
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <HeartHandshake className="w-6 h-6 text-purple-400" />
              1. Agreement to Terms
            </h2>
            <p className="text-purple-100/80 leading-relaxed">
              By accessing or using the services provided by Vanurtech Media Pvt. Ltd. ("Vanurtech Media," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our website or services.
            </p>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <FileText className="w-6 h-6 text-purple-400" />
              2. Use of Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4 text-purple-300">Permitted Use</h3>
                <p className="text-purple-100/70 text-sm leading-relaxed">
                  You may use our services for lawful purposes only and in accordance with these Terms. You are responsible for all activity that occurs under your account.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4 text-purple-300">Restrictions</h3>
                <p className="text-purple-100/70 text-sm leading-relaxed">
                  You agree not to misuse our services, including attempting to gain unauthorized access, disrupting our infrastructure, or using our content without permission.
                </p>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <ShieldAlert className="w-6 h-6 text-purple-400" />
              3. Intellectual Property
            </h2>
            <p className="text-purple-100/80 leading-relaxed mb-6">
              All content on our website, including text, graphics, logos, images, and software, is the property of Vanurtech Media or its content suppliers and is protected by international copyright and intellectual property laws.
            </p>
            <div className="flex items-center gap-4 p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
              <CheckCircle className="w-5 h-5 text-purple-400 shrink-0" />
              <p className="text-sm text-purple-200">
                Unauthorized use of our trademarks or copyrighted material is strictly prohibited.
              </p>
            </div>
          </section>

          {/* Liability */}
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-purple-400" />
              4. Limitation of Liability
            </h2>
            <p className="text-purple-100/80 leading-relaxed">
              In no event shall Vanurtech Media, its directors, employees, or partners be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of our services or inability to access them.
            </p>
          </section>

          {/* Governing Law */}
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-6 text-purple-300">5. Governing Law</h2>
            <p className="text-purple-100/80 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any legal action or proceeding related to our services shall be brought exclusively in the courts of Bhubaneswar, Odisha.
            </p>
          </section>

          {/* Contact Information */}
          <section className="text-center bg-purple-600/10 border border-purple-500/20 rounded-3xl p-10">
            <h2 className="text-2xl font-bold mb-4">Need Clarification?</h2>
            <p className="text-purple-100/70 mb-8">
              If you have any questions regarding these Terms of Service, please reach out to us.
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

export default TermsOfService;

import type { Metadata } from "next";
import React from 'react';
import HeroContact from '@/components/Contact/HeroContact';
import FormContact from '@/components/Contact/FormContact';

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Consultation - Vanurtech Media Pvt. Ltd.",
  description: "Get in touch with Vanurtech Media Pvt. Ltd.. Contact us for a free consultation on custom software, CRM, SaaS, AI automation, or mobile app development for your business.",
  alternates: {
    canonical: "https://vanurmedia.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <HeroContact />
      <FormContact />
    </>
  );
}
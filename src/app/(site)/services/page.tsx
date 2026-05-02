import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Our Services | Custom Software, CRM, SaaS & AI Development - Vanurtech Media Pvt. Ltd.",
  description: "Explore Vanurtech Media Pvt. Ltd.'s services: custom software development, CRM, SaaS, mobile apps, AI automation, UI/UX design & SEO — built for Indian SMEs.",
  alternates: {
    canonical: "https://vanurmedia.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}

import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Vanurtech Media - AI Software Development Company India",
  description: "Learn about Vanurtech Media — our mission, vision, and team behind India's leading AI-powered custom software, CRM & SaaS development company.",
  alternates: {
    canonical: "https://vanurmedia.com/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}

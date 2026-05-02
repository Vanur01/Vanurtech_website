import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | AI Software Development Company India - Vanurtech Media Pvt. Ltd.",
  description: "Learn about Vanurtech Media Pvt. Ltd. — our mission, vision, and team behind India's leading AI-powered custom software, CRM & SaaS development company.",
  alternates: {
    canonical: "https://vanurmedia.com/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}

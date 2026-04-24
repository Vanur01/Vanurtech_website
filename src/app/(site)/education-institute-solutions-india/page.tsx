import { Metadata } from "next";
import EducationServiceContent from "./EducationServiceContent";

export const metadata: Metadata = {
  title: "Education & Institute Management Software Solutions India | Vanurtech Media",
  description: "Advanced ERP and management solutions for schools, colleges, and coaching institutes. Automate student enrollment, fees, and learning portals.",
  alternates: {
    canonical: "/education-institute-solutions-india",
  },
};

export default function EducationDevPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Education & Institute Management Software Solutions",
    "provider": {
      "@type": "Organization",
      "name": "Vanurtech Media"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EducationServiceContent />
    </>
  );
}

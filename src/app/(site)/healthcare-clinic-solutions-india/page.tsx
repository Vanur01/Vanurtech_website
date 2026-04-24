import { Metadata } from "next";
import HealthcareServiceContent from "./HealthcareServiceContent";

export const metadata: Metadata = {
  title: "Healthcare & Clinic Management Software India | Vanurtech Media",
  description: "Advanced EHR, patient scheduling, and clinic management software solutions. Streamline patient care, billing, and pharmacy workflows for hospitals and clinics.",
  alternates: {
    canonical: "/healthcare-clinic-solutions-india",
  },
};

export default function HealthcarePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Healthcare & Clinic Management Software Solutions",
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
      <HealthcareServiceContent />
    </>
  );
}

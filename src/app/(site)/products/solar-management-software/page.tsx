import { Metadata } from "next";
import SolarManagementContent from "./SolarManagementContent";

export const metadata: Metadata = {
  title: "Solar Management Software India | Plant Monitoring & AMC Management",
  description: "Monitor solar plant performance, detect faults instantly, manage AMC contracts, and track revenue with our purpose-built solar management software for India.",
  alternates: {
    canonical: "/products/solar-management-software",
  },
};

export default function SolarManagementPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Solar Management Software",
    "applicationCategory": "BusinessApplication",
    "provider": {
      "@type": "Organization",
      "name": "Vanurtech Media",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SolarManagementContent />
    </>
  );
}

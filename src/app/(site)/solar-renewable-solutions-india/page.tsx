import { Metadata } from "next";
import SolarServiceContent from "./SolarServiceContent";


export const metadata: Metadata = {
  title: "Solar & Renewable Energy Software Solutions India | Vanurtech Media",
  description: "Advanced software solutions for solar installers and renewable energy firms. Track installations, manage field teams, and automate energy calculations.",
  alternates: {
    canonical: "/solar-renewable-solutions-india",
  },
};

export default function SolarDevPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Solar & Renewable Energy Software Solutions",
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
      <SolarServiceContent />
    </>
  );
}

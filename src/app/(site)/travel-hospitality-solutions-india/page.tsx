import { Metadata } from "next";
import TravelServiceContent from "./TravelServiceContent";

export const metadata: Metadata = {
  title: "Travel & Hospitality Software Solutions India | Vanurtech Media",
  description: "Custom booking engines, itinerary management systems, and hospitality ERP solutions. Scale your travel business with automated booking and AI personalization.",
  alternates: {
    canonical: "/travel-hospitality-solutions-india",
  },
};

export default function TravelPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Travel & Hospitality Software Solutions",
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
      <TravelServiceContent />
    </>
  );
}

import { Metadata } from "next";
import MobileAppServiceContent from "./MobileAppServiceContent";

export const metadata: Metadata = {
  title: "Mobile App Development Company in India | iOS & Android Apps",
  description: "We build high-performance, user-centric iOS & Android applications. Get custom mobile app development services in India for global clients.",
  alternates: {
    canonical: "/mobile-app-development-company-india",
  },
};

export default function MobileAppPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile App Development",
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
      <MobileAppServiceContent />
    </>
  );
}

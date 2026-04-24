import { Metadata } from "next";
import SaaSDevServiceContent from "./SaaSDevServiceContent";

export const metadata: Metadata = {
  title: "Custom SaaS Development Company in India | Software as a Service",
  description: "Build robust, scalable & secure SaaS applications with our expert SaaS development services in India. We design AI-powered B2B & B2C SaaS platforms.",
  alternates: {
    canonical: "/saas-development-company-india",
  },
};

export default function SaaSDevPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SaaS Development",
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
      <SaaSDevServiceContent />
    </>
  );
}

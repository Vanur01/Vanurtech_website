import { Metadata } from "next";
import CRMDevServiceContent from "./CRMDevServiceContent";

export const metadata: Metadata = {
  title: "Custom CRM Development Company in India | Lead Management Software",
  description: "Build custom CRM software for your business with lead management, sales automation & AI insights. Trusted CRM development company in India for SMEs.",
  alternates: {
    canonical: "/crm-development-company-india",
  },
};

export default function CRMDevPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom CRM Development",
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
      <CRMDevServiceContent />
    </>
  );
}

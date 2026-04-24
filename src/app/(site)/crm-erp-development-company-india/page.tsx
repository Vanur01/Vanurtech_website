import { Metadata } from "next";
import CRMERPServiceContent from "./CRMERPServiceContent";

export const metadata: Metadata = {
  title: "Custom CRM & ERP Development Company in India | Business Software Solutions",
  description:
    "Build custom CRM & ERP software for your business — sales automation, lead management, finance, HR, inventory & operations. Trusted CRM & ERP development company in India.",
  alternates: {
    canonical: "/crm-erp-development-company-india",
  },
};

export default function CRMERPDevPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom CRM & ERP Development",
    provider: {
      "@type": "Organization",
      name: "Vanurtech Media",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CRMERPServiceContent />
    </>
  );
}

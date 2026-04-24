import { Metadata } from "next";
import SMBServiceContent from "./SMBServiceContent";

export const metadata: Metadata = {
  title: "Business Growth Solutions for SMBs & SMEs in India | Vanurtech Media",
  description: "Scale your small or medium business with custom ERP, CRM, and automation solutions. We help SMEs in India digitalize their operations for rapid growth.",
  alternates: {
    canonical: "/small-medium-business-solutions-india",
  },
};

export default function SMBDevPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SMB Digital Transformation Solutions",
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
      <SMBServiceContent />
    </>
  );
}

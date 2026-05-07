import { Metadata } from "next";
import CyberSecurityContent from "./CyberSecurityContent";

export const metadata: Metadata = {
  title: "Elite Cyber Security Services in India | Vanurtech Media Pvt. Ltd.",
  description: "Secure your digital assets with India's leading cyber security experts. Pentesting, 24/7 monitoring, and compliance solutions for global businesses.",
  alternates: {
    canonical: "https://Vanurtech Media Pvt. Ltd..com/cyber-security-services-india",
  },
};

export default function CyberSecurityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cyber Security Services",
    "description": "Professional cyber security solutions including penetration testing, managed detection, and compliance.",
    "provider": {
      "@type": "Organization",
      "name": "Vanurtech Media Pvt. Ltd.",
      "url": "https://Vanurtech Media Pvt. Ltd..com"
    },
    "serviceType": "Cyber Security",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CyberSecurityContent />
    </>
  );
}

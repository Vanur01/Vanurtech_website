import { Metadata } from "next";
import UIUXServiceContent from "./UIUXServiceContent";

export const metadata: Metadata = {
  title: "Best UI/UX Design Services in India | VanurTech Media",
  description: "Elite UI/UX design studio in India. We create intuitive, conversion-focused user experiences for web and mobile apps. Figma experts.",
  alternates: {
    canonical: "https://vanurtech.com/ui-ux-design-services-india",
  },
};

export default function UIUXServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "UI/UX Design Services",
    "description": "Professional user experience and interface design services for digital products.",
    "provider": {
      "@type": "Organization",
      "name": "VanurTech Media",
      "url": "https://vanurtech.com"
    },
    "serviceType": "UI/UX Design",
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
      <UIUXServiceContent />
    </>
  );
}

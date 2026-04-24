import { Metadata } from "next";
import WebDevServiceContent from "./WebDevServiceContent";

export const metadata: Metadata = {
  title: "Website Development Company in India | SEO & Lead Generation Websites",
  description: "We build SEO-optimized, fast, and high-converting websites for businesses. Get custom website development services in India for global clients.",
  alternates: {
    canonical: "/website-development-company-india",
  },
};

export default function WebDevPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Website Development",
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
      <WebDevServiceContent />
    </>
  );
}

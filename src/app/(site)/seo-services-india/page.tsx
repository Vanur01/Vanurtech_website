import { Metadata } from "next";
import SEOServiceContent from "./SEOServiceContent";

export const metadata: Metadata = {
  title: "Best SEO Agency in India | Organic Traffic & Results-Driven Search Ranking",
  description: "Rank #1 on Google with our expert SEO services in India. We offer technical SEO, keyword strategy, and authority link building for global brands.",
  alternates: {
    canonical: "/seo-services-india",
  },
};

export default function SEOPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Services",
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
      <SEOServiceContent />
    </>
  );
}

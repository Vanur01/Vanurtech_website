import { Metadata } from "next";
import GraphicDesignServiceContent from "./GraphicDesignServiceContent";


export const metadata: Metadata = {
  title: "Graphic Design Company in India | Premium Branding & UI/UX Design",
  description: "Transform your brand with premium graphic design services in India. We specialize in logo design, brand identity, social media graphics, and UI/UX design.",
  alternates: {
    canonical: "/graphic-design-services-india",
  },
};

export default function GraphicDesignPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Graphic Design & Branding",
    "provider": {
      "@type": "Organization",
      "name": "VanurTech Media"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GraphicDesignServiceContent />
    </>
  );
}

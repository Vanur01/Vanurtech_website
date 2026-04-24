import { Metadata } from "next";
import AIBusinessAutomationContent from "./AIBusinessAutomationContent";

export const metadata: Metadata = {
  title: "AI Business Automation Software in India | AI CRM & Sales Automation",
  description: "Automate your business with AI-powered software for calling, follow-ups, lead management & marketing insights. Scale faster with intelligent automation.",
  alternates: {
    canonical: "/ai-business-automation-india",
  },
};

export default function AIAutomationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Business Automation",
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
      <AIBusinessAutomationContent />
    </>
  );
}

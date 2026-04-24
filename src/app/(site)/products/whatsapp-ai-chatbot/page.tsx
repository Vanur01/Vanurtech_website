import { Metadata } from "next";
import WhatsAppChatbotContent from "./WhatsAppChatbotContent";

export const metadata: Metadata = {
  title: "WhatsApp AI Chatbot India | 24/7 Automated Customer Support",
  description:
    "Engage customers 24/7, capture leads, and automate support through WhatsApp powered by AI. Built for Indian businesses to scale communication effortlessly.",
  alternates: {
    canonical: "/products/whatsapp-ai-chatbot",
  },
};

export default function WhatsAppChatbotPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "WhatsApp AI Chatbot",
    applicationCategory: "BusinessApplication",
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
      <WhatsAppChatbotContent />
    </>
  );
}

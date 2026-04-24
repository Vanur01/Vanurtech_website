import { Metadata } from "next";
import FinanceManagementContent from "./FinanceManagementContent";

export const metadata: Metadata = {
  title: "Finance Management Software India | GST Billing & Invoicing Platform",
  description: "Automate invoicing, track expenses, manage GST compliance, and get real-time financial insights with our all-in-one finance management software for Indian businesses.",
  alternates: {
    canonical: "/products/finance-management-software",
  },
};

export default function FinanceManagementPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Finance Management Software",
    "applicationCategory": "BusinessApplication",
    "provider": {
      "@type": "Organization",
      "name": "Vanurtech Media",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FinanceManagementContent />
    </>
  );
}

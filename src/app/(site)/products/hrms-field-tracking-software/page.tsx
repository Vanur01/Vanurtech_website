import { Metadata } from "next";
import HRMSContent from "./HRMSContent";

export const metadata: Metadata = {
  title: "HRMS & Field Tracking Software India | GPS Attendance & Payroll",
  description:
    "Manage your workforce and track field agents in real-time with GPS-powered HR and operations software. Automate attendance, payroll, and task management.",
  alternates: {
    canonical: "/products/hrms-field-tracking-software",
  },
};

export default function HRMSPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "HRMS & Field Tracking Software",
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
      <HRMSContent />
    </>
  );
}

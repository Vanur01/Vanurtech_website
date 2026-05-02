import WhatsAppButton from '@/components/WhatsAppButton';
import type { Metadata } from "next";
import FacebookPixel from "@/components/FacebookPixel";
import GoogleTag from "@/components/GoogleTag";

export const metadata: Metadata = {
  title: {
    default: "AI-Powered Custom Software, CRM & SaaS Development Company",
    template: "%s | Vanurtech Media Pvt. Ltd."
  },
  description: "Vanurtech Media Pvt. Ltd.: Leading AI-powered software development company in India. We automate SMEs with custom CRM, SaaS & mobile apps. Scale faster now!",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GoogleTag />
      <FacebookPixel />
      {children}
      <WhatsAppButton />
    </>
  );
}

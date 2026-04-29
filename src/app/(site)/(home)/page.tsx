import type { Metadata } from "next";
import HomeClient from "./HomeClient";


export const metadata: Metadata = {
  title: "AI-Powered Custom Software, CRM & SaaS Development Company India | Vanurtech",
  description: "Vanurtech Media: Leading AI-powered software development company in India. We automate SMEs with custom CRM, SaaS & mobile apps. Scale faster now!",
  alternates: {
    canonical: "https://vanurmedia.com",
  },
};

export default function Home() {
  return <HomeClient />;
}

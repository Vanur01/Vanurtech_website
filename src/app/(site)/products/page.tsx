import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Our Products | Custom Software & SaaS Solutions - Vanurtech Media Pvt. Ltd.",
  description: "Discover Vanurtech Media Pvt. Ltd.'s digital products and SaaS solutions, designed to automate your business, streamline CRM, and drive AI-powered growth in India.",
  alternates: {
    canonical: "https://vanurmedia.com/products",
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}

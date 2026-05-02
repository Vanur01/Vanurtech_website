import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog | AI, Software & Digital Growth Insights - Vanurtech Media Pvt. Ltd.",
  description: "Read Vanurtech Media Pvt. Ltd.'s blog for expert insights on AI automation, custom software development, CRM, SaaS, and digital growth strategies for Indian businesses.",
  alternates: {
    canonical: "https://vanurmedia.com/blog",
  },
};

export default function BlogPage() {
  return <BlogClient />;
}

import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Our Projects | AI & Custom Software Portfolio - Vanurtech Media Pvt. Ltd.",
  description: "View our successful AI automation, custom CRM, SaaS, and web development projects. See how Vanurtech Media Pvt. Ltd. transforms Indian businesses.",
  alternates: {
    canonical: "https://vanurmedia.com/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
import type { Metadata } from "next";
import WorkHero from "@/components/Work/WorkHero";
import ProjectGrid from "@/components/Work/ProjectsGrid";

export const metadata: Metadata = {
  title: "Our Work | Projects & Case Studies - Vanurtech Media",
  description: "See how Vanurtech Media has helped businesses grow with custom software, CRM, SaaS & AI solutions. Browse our project portfolio and case studies.",
  alternates: {
    canonical: "https://vanurmedia.com/work",
  },
};

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <ProjectGrid />
    </>
  );
}

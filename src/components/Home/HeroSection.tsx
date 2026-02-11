"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

export function HeroSection() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "The Materials",
    link: "https://thematerials.in/",
    thumbnail: "/images/prjtImages/prj1.png",
  },
  {
    title: "UniTech Refrigeration",
    link: "https://unitechrefrigeration.in/",
    thumbnail: "/images/prjtImages/prj2.png",
  },
  {
    title: "Kalinga Interiors",
    link: "https://kalingainteriors.in/",
    thumbnail: "/images/prjtImages/prj3.png",
  },
  {
    title: "Watersol Technologies",
    link: "https://watersol.co.in/",
    thumbnail: "/images/prjtImages/prj4.png",
  },
  {
    title: "AskSafety Security",
    link: "https://asksafetysecurity.com/",
    thumbnail: "/images/prjtImages/prj5.png",
  },
  {
    title: "DesignSkp",
    link: "https://designskp.com/",
    thumbnail: "/images/prjtImages/prj6.png",
  },
  {
    title: "Running Notations",
    link: "https://runningnotations.in/",
    thumbnail: "/images/prjtImages/prj7.png",
  },
  {
    title: "Odisha Bakery House",
    link: "https://lightgoldenrodyellow-loris-579251.hostingersite.com/",
    thumbnail: "/images/prjtImages/prj8.png",
  },
  {
    title: "O.M.S. School",
    link: "https://omsschool.in/",
    thumbnail: "/images/prjtImages/prj9.png",
  },
  {
    title: "Jiana Infrahomes",
    link: "https://jianainfrahomes.com/",
    thumbnail: "/images/prjtImages/prj10.png",
  },
  {
    title: "AgroLite",
    link: "https://agrolite.in/",
    thumbnail: "/images/prjtImages/prj11.png",
  },
];

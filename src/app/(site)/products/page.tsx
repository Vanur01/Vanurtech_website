"use client";
import React from "react";
import HeroProducts from "@/components/Products/HeroProducts";
import ProductsList from "@/components/Products/ProductsList";
import ProductsUSPSection from "@/components/Products/ProductsUSPSection";
import CTASection from "@/components/CTASection";
import Partners from "@/components/Partners";

const page = () => {
  return (
    <div>
      <HeroProducts />
      <ProductsList />
      <ProductsUSPSection />
      <CTASection />
      <Partners />
    </div>
  );
};

export default page;

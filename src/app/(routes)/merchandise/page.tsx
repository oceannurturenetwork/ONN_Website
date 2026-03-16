// donate page

import PageHero from "@/components/utils/page-hero";
import { Hero, Products } from "@/components/pages/merchandise";
import { generateStaticMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = generateStaticMetadata("Merchandise", "");
const Page = () => {
  return (
    <>
      <PageHero page="Merchandise" />

      <Hero />
      <Products />
    </>
  );
};

export default Page;

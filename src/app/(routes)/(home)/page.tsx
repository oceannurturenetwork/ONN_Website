import {
  Hero,
  Impact,
  Learn,
  Movement,
  VoicesOfImpact,
  WhoWeAre,
} from "@/components/pages/home";
// import { Partners } from "@/components/pages/involved";
import { generateStaticMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = generateStaticMetadata("Home", "");

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Cards /> */}
      <WhoWeAre />
      <Impact />
      <Movement />
      <Learn />
      <VoicesOfImpact />
      {/*<Partners />*/}
    </>
  );
}

// work page
import { Fish, Shield, Waves } from "lucide-react";

import {
  Hero,
  OurApproach,
  FlipCards,
  Stats,
} from "@/components/pages/priorities";
import { generateStaticMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = generateStaticMetadata(
  "Sustainable Fisheries Management",
  "",
);
const Page = () => {
  return (
    <>
      <Hero
        title="Sustainable Fisheries Management"
        subtitle="Overfishing and unsustainable practices threaten fish populations, food security, and the livelihoods of coastal communities. Sustainable fisheries are key to a balanced marine ecosystem."
        // image={"https://res.cloudinary.com/dyo0ezwgs/image/upload/v1743765917/onn/cute-fish-underwater_23-2150699219_niif4x.jpg"}
      />

      <Stats
        cards={[
          {
            title: "34%",
            description: "Global fish stocks that are overfished",
            icon: Fish,
          },
          {
            title: "90%",
            description: "Fishers relying on small-scale fisheries",
            icon: Fish,
          },
          {
            title: "3B",
            description: "People depending on seafood as a main protein source",
            icon: Fish,
          },
        ]}
      />

      <OurApproach
        description="We collaborate with local fishers to implement sustainable harvest strategies, promote eco-friendly fishing gear, and establish marine protected areas (MPAs). By integrating traditional knowledge with modern conservation techniques, we ensure long-term economic and environmental benefits."
        list={[
          "Promoting responsible fishing practices",
          "Working with local fishers to implement sustainable harvest strategies",
          "Establishing marine protected areas (MPAs)",
        ]}
        side_image={
          "https://res.cloudinary.com/dl0cuzahq/image/upload/q_auto/f_auto/v1775342080/Rising_Tides_rgjgxl.webp"
        }
      />

      <FlipCards cards={cards} title="Support sustainable marine management" />
    </>
  );
};

export default Page;

const cards = [
  {
    title: "Ecosystem-Based Fisheries Management",
    image:
      "https://res.cloudinary.com/dl0cuzahq/image/upload/q_auto/f_auto/v1775344094/fishing-boats-floating-calm-waters-going-fishing_nn2nby.webp", // Replace with your actual image path
    backText:
      "We promote ecosystem-based fisheries management to ensure fish populations remain healthy and ecosystems are balanced, benefiting both people and marine life.",
    buttonText: "Learn About Our Approach",
    href: "/about",
  },
  {
    title: "Sustainable Fishing Practices",
    image:
      "https://res.cloudinary.com/dl0cuzahq/image/upload/q_auto/f_auto/v1775344095/city-park-with-lake_nhwwlv.webp", // Replace with your actual image path
    backText:
      "By advocating for sustainable fishing practices like catch limits and responsible gear, we help reduce overfishing and protect marine biodiversity.",
    buttonText: "Discover Sustainable Practices",
    href: "/about",
  },
  {
    title: "Community-Driven Fisheries Development",
    image:
      "https://res.cloudinary.com/dl0cuzahq/image/upload/q_auto/f_auto/v1775344095/city-park-with-lake_nhwwlv.webp", // Replace with your actual image path
    backText:
      "We empower coastal communities to lead sustainable fisheries initiatives, ensuring long-term food security and resilient livelihoods.",
    buttonText: "Join Our Fisheries Initiatives",
    href: "/forms/membership",
  },
];

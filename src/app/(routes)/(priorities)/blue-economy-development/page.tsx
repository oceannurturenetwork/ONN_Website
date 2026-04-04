// work page
import { Shield, Waves } from "lucide-react";

import {
  Hero,
  OurApproach,
  FlipCards,
  Stats,
} from "@/components/pages/priorities";
import { generateStaticMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = generateStaticMetadata(
  "Blue Economy Development in the WIO",
  "",
);
const Page = () => {
  return (
    <>
      {/* <UnderConstruction /> */}

      <Hero
        title="Blue Economy Development in the WIO"
        subtitle="Coral reefs are among the most diverse ecosystems, supporting marine life and coastal economies. However, they are increasingly threatened by climate change, pollution, and overfishing."
        // image={
        //   "https://res.cloudinary.com/dyo0ezwgs/image/upload/v1743764819/onn/fish-lagoon-sunlight-exotic-animal_1253-717-min_jauuyp.jpg"
        // }
      />

      <Stats
        cards={[
          {
            title: "25%",
            description:
              "Jobs in the Western Indian Ocean depend on ocean-based sectors",
            icon: Waves,
          },
          {
            title: "90%",
            description:
              "Regional marine resources face pressure from overuse and climate impacts",
            icon: Waves,
          },
          {
            title: "$3 Trillion",
            description:
              "Global ocean economy’s projected value by 2030 — WIO nations must claim their share",
            icon: Waves,
          },
        ]}
      />

      <OurApproach
        description="The Western Indian Ocean holds immense potential for a thriving, inclusive Blue Economy. However, unsustainable practices, limited youth engagement, and underfunded innovations continue to hinder progress. At the Ocean Nurture Network (ONN), we are committed to:"
        list={[
          "Strengthening value chains in fisheries, aquaculture, seaweed, and eco-tourism",
          "Empowering youth-driven innovation and supporting sustainable marine enterprises",
          "Partnering with governments, researchers, and coastal communities to drive long-term impact",
        ]}
        side_image={
          "https://res.cloudinary.com/dl0cuzahq/image/upload/q_auto/f_auto/v1775342084/Training_wbqahw.webp"
        }
      />

      <FlipCards
        cards={cards}
        title="Building Blue Economies, Empowering Coastal Communities "
      />
    </>
  );
};

export default Page;

const cards = [
  {
    title: "🛠️ Blue Livelihoods Empowerment",
    image:
      "https://res.cloudinary.com/dl0cuzahq/image/upload/q_auto/f_auto/v1775344095/summer-concept-with-boats-copyspace_xbixcf.webp",
    // "https://res.cloudinary.com/dyo0ezwgs/image/upload/v1746722721/onn/coral-bleaching-threat-sealife_23-2151002022_jzgbwl.jpg", // Replace with actual image path
    backText:
      "Training, market access, and value chain development for youth and women in coastal communities.",
    // "We restore degraded reefs using cutting-edge techniques like coral farming, transplantation, and monitoring to bring ecosystems back to life.",
    buttonText: "Learn About Our Projects",
    href: "/gallery",
  },
  {
    title: "🚀 Sustainable Ocean Enterprises",
    image:
      "https://res.cloudinary.com/dl0cuzahq/image/upload/q_auto/f_auto/v1775344095/fishing-boat-port_cifhi4.webp",
    // "https://res.cloudinary.com/dyo0ezwgs/image/upload/v1746722721/onn/beautiful-colorful-small-fishes-swimming-tank_181624-35808_o9mcwi.jpg", // Replace with actual image path
    backText:
      "Supporting eco-friendly startups aligned with marine conservation and inclusive growth.",
    // "We create and nurture coral nurseries to grow resilient coral species, which are later transplanted to boost reef health and diversity.",
    buttonText: "Explore Our Work",
    href: "/about",
  },
  {
    title: "🌍 Community Ocean Champions",
    image:
      "https://res.cloudinary.com/dl0cuzahq/image/upload/q_auto/f_auto/v1775344096/snorkeling-activity-yacht-sea-ocean_sa9kkk.webp", // Replace with actual image path
    backText:
      "Building local capacity through ocean literacy, stewardship, and grassroots action.",
    // "Community involvement is key. We work with local communities to raise awareness, train divers, and ensure sustainable coral protection.",
    buttonText: "Get Involved",
    href: "/partner",
  },
];

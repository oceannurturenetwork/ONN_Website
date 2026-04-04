// work page
import { Waves } from "lucide-react";

import {
  Hero,
  OurApproach,
  FlipCards,
  Stats,
} from "@/components/pages/priorities";
import { generateStaticMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = generateStaticMetadata(
  "Climate Resilience",
  "",
);
const Page = () => {
  return (
    <>
      <Hero
        title="Climate Resilience"
        subtitle="Climate change threatens marine ecosystems and coastal communities, causing rising sea levels, extreme weather, and biodiversity loss. Strengthening resilience is crucial for long-term sustainability."
        // image={
        //   "https://res.cloudinary.com/dyo0ezwgs/image/upload/v1743763866/onn/climate-resilience_ufcyov.jpg"
        // }
      />

      <Stats
        cards={[
          {
            title: "90%",
            description: "Heat from global warming absorbed by oceans",
            icon: Waves,
          },
          {
            title: "680M",
            description: "People in low-lying coastal zones at risk",
            icon: Waves,
          },
          {
            title: "2050",
            description: "Coastal flooding could cost over $1T annually",
            icon: Waves,
          },
        ]}
      />

      <OurApproach
        description="We work to enhance coastal resilience by restoring ecosystems such as mangroves and seagrasses, which act as natural buffers against climate-related disasters. Through advocacy and research, we support policies that help communities adapt to changing environmental conditions while promoting sustainable coastal management."
        list={[
          "Promoting sustainable coastal management",
          "Supporting climate adaptation strategies for coastal communities",
          "Encouraging carbon sequestration through marine ecosystems",
        ]}
        side_image={
          "https://res.cloudinary.com/dl0cuzahq/image/upload/q_auto/f_auto/v1775342082/Seminar2_wwgubf.webp"
        }
      />

      <FlipCards cards={cards} />
      {/* <Images images_list={[
                "https://res.cloudinary.com/dyo0ezwgs/image/upload/v1743763776/onn/cr_2_nl2xyv.jpg",
                "https://res.cloudinary.com/dyo0ezwgs/image/upload/v1743763776/onn/cr_3_llnep9.jpg",
                "https://res.cloudinary.com/dyo0ezwgs/image/upload/v1743763774/onn/cr_1_ejyol6.jpg"
            ]}/> */}
    </>
  );
};
const cards = [
  {
    title: "Ecosystem Protection",
    image:
      "https://res.cloudinary.com/dl0cuzahq/image/upload/q_auto/f_auto/v1775344099/mangrove-crystal-clear-water-stream-canal-tha-pom-klong-song-nam-mangrove-wetland-krabi-thailand_qrkg4r.webp",
    backText:
      "Protecting natural barriers like mangroves and coral reefs enhances coastal resilience against storms and rising seas.",
    buttonText: "Learn More",
    buttonHref: "/about",
  },
  {
    title: "Community Resilience",
    image:
      "https://res.cloudinary.com/dl0cuzahq/image/upload/q_auto/f_auto/v1775342083/pexels-twilightkenya-12079507_i4st1o.webp",
    backText:
      "We empower coastal communities with knowledge, tools, and sustainable practices to adapt and thrive in a changing climate.",
    buttonText: "Explore Our Work",
    buttonHref: "/gallery",
  },
  {
    title: "Youth Leadership in Climate Action",
    image:
      "https://res.cloudinary.com/dl0cuzahq/image/upload/q_auto/f_auto/v1775344094/black-african-american-woman-her-companion-pick-up-recyclable-plastic-bottles-other-rubbish_lkz0bn.webp",
    backText:
      "Our youth are the future leaders driving innovative solutions for coastal and marine climate resilience.",
    buttonText: "Meet the Leaders",
    buttonHref: "/team",
  },
];

export default Page;

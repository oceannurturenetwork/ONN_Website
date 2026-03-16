// work page 
import { Shield } from "lucide-react";
 
import { Hero, OurApproach, FlipCards, Stats } from "@/components/pages/priorities";
import { generateStaticMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = generateStaticMetadata("Coastal  Protection", "");
const Page = () => {

    return (
        <>
            {/* <UnderConstruction /> */}

            <Hero 
                title="Coastal Protection"
                subtitle="Coastal habitats face degradation from pollution, erosion, and unsustainable development, putting biodiversity and local livelihoods at risk."
                image={"https://res.cloudinary.com/dyo0ezwgs/image/upload/v1743763727/onn/coastal_protection_rs9rsz.jpg"}
            />

            <Stats 
                cards={[
                    { title: "66%", description: "Wave height reduction by mangroves", icon: Shield },
                    { title: "$23B", description: "Annual storm protection value from wetlands", icon: Shield },
                    { title: "50%", description: "Global loss of coastal ecosystems", icon: Shield }
                  ]}
            />

            <OurApproach 
                description="We implement conservation strategies, such as mangrove and dune restoration, to protect natural coastlines. Partnering with stakeholders, we advocate for sustainable tourism and responsible development that prioritizes ecological integrity while benefiting local economies."
                list={[
                    "Implementing nature-based solutions like mangrove restoration",
                    "Advocating for policies that safeguard coastal habitats",
                    "Encouraging sustainable tourism and development practices"
                ]}
                side_image={"https://res.cloudinary.com/dyo0ezwgs/image/upload/v1743763666/onn/cp_side_wes2f1.jpg"}
            />

            <FlipCards 
                cards={cards}
                title="Implementing nature-based solutions"
            />
            {/* <Images images_list={[
                "https://res.cloudinary.com/dyo0ezwgs/image/upload/v1743763672/onn/cp_1_w6qhht.jpg", 
                "https://res.cloudinary.com/dyo0ezwgs/image/upload/v1743763673/onn/cp_2_rxbtuw.jpg",
                "https://res.cloudinary.com/dyo0ezwgs/image/upload/v1743763614/onn/high-angle-shot-seaside-domburg-netherlands_181624-34319-min_jylfwf.jpg"
            ]}/> */}

        </>
    )
}

export default Page; 


const cards = [
    {
      title: "Habitat Restoration",
      image: "https://res.cloudinary.com/dyo0ezwgs/image/upload/v1746721585/onn/202_1_ntipoy.jpg",
      backText:
        "Restoring mangroves, seagrasses, and coral reefs strengthens coastal defenses and boosts marine biodiversity.",
      buttonText: "Learn More About Restoration",
      href: "/gallery"
    },
    {
      title: "Coastal Infrastructure & Natural Solutions",
      image: "https://res.cloudinary.com/dyo0ezwgs/image/upload/v1746722189/onn/22881_1_zwtuom.jpg", // Replace with your actual path
      backText:
        "Blending natural solutions with engineered infrastructure ensures long-term resilience against storms, erosion, and rising sea levels.",
      buttonText: "Explore Our Approach",
      href: "/about"
    },
    {
      title: "Community Engagement & Preparedness",
      image: "https://res.cloudinary.com/dyo0ezwgs/image/upload/v1746808939/onn/WhatsApp_Image_2025-05-08_at_21.35.17_vyk1lv.jpg", // Replace with your actual path
      backText:
        "By involving local communities in coastal protection efforts, we ensure sustainable solutions that benefit both people and nature.",
      buttonText: "Get Involved",
      href: "/partners"
    }
  ];
  
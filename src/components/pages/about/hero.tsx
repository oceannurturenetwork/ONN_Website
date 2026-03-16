// about us hero 

import { images } from "@/assets";
import { AppLinkButton } from "@/components/utils";
import PageHero from "@/components/utils/page-hero";
import { ArrowRight } from "lucide-react";

const Hero = () => (
    <PageHero 
        subtitle="Get to know us"
        title="Protecting Oceans, Empowering Communities"
        description={"Ocean Nurture Network (ONN) is a community-driven organization committed to protecting Kenya's marine ecosystems and promoting a sustainable blue economy. We empower coastal communities through conservation initiatives, climate resilience programs, and economic opportunities in fisheries, aquaculture, and eco-tourism. By fostering environmental stewardship, advocating for sustainable policies, and enhancing ocean literac. ONN ensure that marine resources are preserved for future generations while improving the livelihoods of those who depend on them."}
        image={images.home_hero}
        page={"about us"}
        textContainerClassName="items-start px-5"
        buttons={
            <AppLinkButton href="/" className="gap-4 items-center rounded-full">
                <span>Get Involved</span>
                <ArrowRight />
            </AppLinkButton>
        }
    />
);

export default Hero; 
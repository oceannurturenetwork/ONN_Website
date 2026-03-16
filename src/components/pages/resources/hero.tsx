// resources & updates hero 

import { images } from "@/assets";
import { AppLinkButton } from "@/components/utils";
import PageHero from "@/components/utils/page-hero";
import { ArrowRight } from "lucide-react";

const Hero = () => (
    <PageHero 
        subtitle="Stay Informed, Stay Inspired"
        title="Explore the latest news, insights, and resources on ocean conservation."
        description={"Knowledge fuels action! Dive into research reports, news updates, and educational materials that empower you to make a difference. Stay up to date with Ocean Nurture Network’s latest initiatives and discoveries as we work toward a healthier, more sustainable ocean."}
        image={images.home_hero}
        page={"resources"}
        textContainerClassName="items-start px-5"
        buttons={
            <AppLinkButton href="/contact" className="gap-4 items-center rounded-full">
                <span>Inquire</span>
                <ArrowRight />
            </AppLinkButton>
        }
    />
);

export default Hero; 
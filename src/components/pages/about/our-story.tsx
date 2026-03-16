// our story 

import { AppLinkButton, SectionContainer } from "@/components/utils";
import { DonateModalButton } from "@/components/utils/donate";
import { SectionTitle } from "@/components/utils/section-container";
import {  Paragraph } from "@/components/utils/typography";

const OurStory = () => (
    <SectionContainer id="our-story">
        <SectionTitle title="Our Story" />
        <div className="my-4">
            <Paragraph className="text-justify my-4">{our_story}</Paragraph>
            <DonateModalButton />
            {/* <AppLinkButton className="rounded-full my-4 min-w-[150px] font-bold" href="/donate">
                Donate
            </AppLinkButton> */}
        </div>
            
    </SectionContainer>
);

export default OurStory; 


const our_story = `Since its founding in August 2024, the Ocean Nurture Network (ONN) has been dedicated to protecting and restoring our oceans for the benefit of coastal communities and marine ecosystems. Through innovative research, sustainable blue economy practices, and youth empowerment, we are building climate resilience and driving positive change across Kenya’s coastline.
With a growing network of partners and supporters, ONN is working tirelessly to ensure that the ocean’s vital resources continue to thrive for generations to come. Your support is crucial in helping us create a sustainable, thriving future for both people and the planet.
`


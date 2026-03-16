// hero 

import { SectionContainer } from "@/components/utils";
import { Heading1, Heading2,  Paragraph } from "@/components/utils/typography";

export const Hero = () => (
    <SectionContainer className="flex flex-col gap-3 my-2">
        <Heading2 >Volunteer Recruitment</Heading2>
        {/* <Heading2 className="my-3">Empowering Young Voices for Ocean Stewardship</Heading2> */}
        <Paragraph className="text-justify">
            {/* ONN is inviting passionate and self-driven early-career professionals to join our team as volunteers in the following key roles. These positions provide excellent platforms for professional growth, mentorship, and impact in the ocean and blue economy space. */}
            ONN is an equal-opportunity organization. We are committed to diversity, equity, and inclusion in all our work. We strongly encourage early-career professionals, women, and persons with disabilities (PWDs) to apply and grow with us as we nurture a sustainable ocean future
        </Paragraph>
    </SectionContainer>
)
// donate component 

import { SectionContainer } from "@/components/utils";
import { SectionSubtitle, SectionTitle } from "@/components/utils/section-container";
import { Paragraph } from "@/components/utils/typography";
import DonateInputs from "./donate-inputs"; 

const Donate  = () => (
    <SectionContainer id="donate" className="footerbg-color py-7 rounded-lg ">
        <SectionTitle title="Donate" className="text-primary-color"/>
        <SectionSubtitle 
            subtitle="Empower Ocean Conservation with Your Support"
            className="my-3 text-white"
        />
        <Paragraph className={"text-justify lg:max-w-[80%] text-white"}>
            Your generosity fuels our mission to protect marine ecosystems and support coastal communities. Every donation helps fund conservation projects and educational programs, creating a lasting impact on our oceans.
        </Paragraph>
        <DonateInputs />
    </SectionContainer>
);

export default Donate; 
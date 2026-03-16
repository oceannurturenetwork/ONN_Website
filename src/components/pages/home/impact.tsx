// who we are

import { AppImage, AppLinkButton, SectionContainer } from "@/components/utils";
import { Card } from "@/components/ui/card";
import {
  SectionSubtitle,
  SectionTitle,
} from "@/components/utils/section-container";
import { Paragraph } from "@/components/utils/typography";
import { ArrowRight } from "lucide-react";

const Impact = () => (
  <SectionContainer className="flex flex-col items-end lg:flex-row gap-3">
    <div className="flex-1 flex flex-col lg:justify-between gap-4">
      <SectionTitle title="Our Impact" />
      {/* <SectionSubtitle
                subtitle="Conservation, empowerment, sustainability"
                className="max-w-[80%] text-lg lg:text-2xl"
            /> */}

      <Paragraph className="text-justify leading-8">
        Through targeted programs, ONN addresses climate change resilience,
        empowers women and youth in the blue economy, and promotes responsible
        ocean management. We work closely with local stakeholders to foster
        sustainable fishing, eco-tourism, and marine biodiversity restoration.
      </Paragraph>

      <Paragraph className="text-justify leading-8">
        At Ocean Nurture Network, we believe that lasting change begins at the
        community level. By building partnerships with coastal communities,
        indigenous groups, researchers, and policymakers, we create inclusive
        initiatives that honor traditional knowledge while introducing
        innovative practices. Our holistic approach ensures that ocean health
        and human livelihoods advance hand-in-hand, securing a thriving future
        for generations to come.
      </Paragraph>

      <AppLinkButton
        href="/about#mission"
        className="min-w-[150px] rounded-full gap-4 font-bold"
        type="outline"
      >
        <span>Our Mission</span>
        <ArrowRight size={20} />
      </AppLinkButton>
    </div>
    <Card className="w-full lg:w-[50%] p-0 h-[430px] relative overflow-hidden">
      <AppImage
        src={
          "https://res.cloudinary.com/dyo0ezwgs/image/upload/v1744144040/onn/WhatsApp_Image_2025-04-07_at_14.05.30_jf6ndp.jpg"
        }
        alt="Who we are"
        title="Who we are"
        objectFit="cover"
        className="object-cover w-full h-full"
        nonBlur
      />
    </Card>
  </SectionContainer>
);

export default Impact;

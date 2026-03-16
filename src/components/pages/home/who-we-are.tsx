// who we are

import { AppImage, AppLinkButton, SectionContainer } from "@/components/utils";
import { Card } from "@/components/ui/card";
import {
  SectionSubtitle,
  SectionTitle,
} from "@/components/utils/section-container";
import { ListItem, Paragraph } from "@/components/utils/typography";
import { ArrowRight } from "lucide-react";

const WhoWeAre = () => (
  <SectionContainer className="flex flex-col items-end lg:flex-row gap-3">
    <Card className="w-full lg:max-w-[60%] h-[350px] p-0 relative overflow-hidden">
      <AppImage
        src={
          "https://res.cloudinary.com/dyo0ezwgs/image/upload/v1744144041/onn/WhatsApp_Image_2025-04-07_at_14.05.28_1_vy8qns.jpg"
        }
        alt="Who we are"
        title="Who we are"
        objectFit="cover"
        className="object-cover w-full h-full"
        nonBlur
      />
    </Card>
    <div className="flex flex-col gap-4">
      <SectionTitle title="Who We Are" />
      {/* <SectionSubtitle
                subtitle="Restoring marine ecosystems, empowering people"
                className="max-w-[60%] text-lg lg:text-2xl"
            /> */}
      <Paragraph className="text-justify leading-8">
        We drive ocean conservation through research and development,
        sustainable blue economy practices, and capacity building. We empower
        youth in coastal communities, fostering climate resilience for a
        thriving future through:
      </Paragraph>
      {/* <Heading3>How we do it</Heading3> */}
      <ul className="ml-5 list-disc flex flex-col gap-3">
        <ListItem>Community-Led Conservation Initiatives</ListItem>
        <ListItem>Data-Driven Ocean Management</ListItem>
        <ListItem>Youth Capacity Building Programs</ListItem>
        <ListItem>Collaborative Partnerships for Impact</ListItem>
      </ul>

      <AppLinkButton
        href="/about"
        className="min-w-[150px] rounded-full gap-4 fonnt-bold"
      >
        <span>More about us</span>
        <ArrowRight size={20} />
      </AppLinkButton>
    </div>
  </SectionContainer>
);

export default WhoWeAre;

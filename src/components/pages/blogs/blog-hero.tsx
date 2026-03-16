// blog component

import { Card } from "@/components/ui/card";
import { AppImage, SectionContainer } from "@/components/utils";
import { Heading1, Paragraph } from "@/components/utils/typography";

const BlogHero = () => {
  return (
    <SectionContainer>
      <Card className="py-0 relative overflow-hidden w-full h-[250px] lg:h-[450px] flex flex-col lg:items-center gap-2 lg:flex-row">
        <div
          className="px-4 flex flex-col justify-center  relative z-[10] w-full h-full"
          style={{ background: "rgba(0, 0, 0, .6)" }}
        >
          <Paragraph className="my-2 text-white">
            Captivating news & updates
          </Paragraph>
          <Heading1 className="lg:max-w-[60%] text-white">
            Catch up on recent news & updates on Ocean Nurture Network
          </Heading1>
        </div>
        {/* <div className="relative overflow-hidden h-[350px] w-[50%]"> */}
        <AppImage
          src={
            "https://res.cloudinary.com/dyo0ezwgs/image/upload/v1744144057/onn/WhatsApp_Image_2025-04-07_at_14.08.21_1_bt8ccm.jpg"
          }
          alt="blog hero"
          title="blog hero"
          className="w-full h-full absolute top-0 left-0"
          objectFit="cover"
        />
        {/* </div> */}
      </Card>
    </SectionContainer>
  );
};

export default BlogHero;

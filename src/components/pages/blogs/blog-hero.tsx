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
            "https://res.cloudinary.com/dl0cuzahq/image/upload/q_auto/f_auto/v1775342085/Rising_Tides1_gei4wy.webp"
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

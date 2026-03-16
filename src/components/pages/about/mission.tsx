// mission, vision, and core values

import { Card } from "@/components/ui/card";
import { AppImage, SectionContainer } from "@/components/utils";
import {
  SectionSubtitle,
  SectionTitle,
} from "@/components/utils/section-container";
import { Heading3, Heading4, Paragraph } from "@/components/utils/typography";

const Mission = () => (
  <section className="w-full footerbg-color py-5">
    <SectionContainer id="mission">
      <SectionTitle
        title="Mission, Vision, & Core Values"
        className="text-center text-primary-color"
      />
      <SectionSubtitle
        subtitle="Our Identy: Purpose, Future, & Guiding Principles"
        className="text-center my-4 text-white"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <Card className="rounded-lg p-4 flex flex-col justify-center items-center flex-1">
          <Heading3>Our Vision</Heading3>
          <Paragraph className="text-center">{vision}</Paragraph>
        </Card>
        <Card className="rounded-lg p-4 flex flex-col justify-center items-center flex-1">
          <Heading3>Our Mission</Heading3>
          <Paragraph className="text-center">{mission}</Paragraph>
        </Card>
      </div>
      <div className="my-[3rem] flex gap-2 flex-col lg:flex-row">
        <div className="w-full">
          <Heading3 className="uppercase text-white my-4 text-center">
            Our core values
          </Heading3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 my-4">
            <CoreValue
              description="Promoting responsible ocean use and conservation for long-term ecological health."
              title="Sustainability"
              src="♻"
              // "https://res.cloudinary.com/dyo0ezwgs/image/upload/v1744377224/onn/3847342-Photoroom_exsauu.png"
            />
            <CoreValue
              description="Ensuring diverse, equitable, and meaningful participation of all people in shaping ocean futures."
              title="Inclusivity"
              src="🤝"
              // "https://res.cloudinary.com/dyo0ezwgs/image/upload/v1744377636/onn/10486947_wj3pi9.jpg"
            />
            <CoreValue
              description="Building cross-sectoral and cross-cultural partnerships to co-create marine solutions."
              title="Collaboration "
              src="🔗"
              // "https://res.cloudinary.com/dyo0ezwgs/image/upload/v1744377708/onn/5474102_dezdtg.jpg"
            />
            <CoreValue
              description="Taking active responsibility to protect, restore, and cherish marine ecosystems."
              title="Stewardship"
              src="🌊"
              // "https://res.cloudinary.com/dyo0ezwgs/image/upload/v1743166646/onn/o5vdtslkbf45cx1uedeo.jpg"
            />
            <CoreValue
              description="Driving creative, tech-savvy, and forward-looking solutions for sustainable blue growth."
              title="Innovation"
              src="💡"
              // "https://res.cloudinary.com/dyo0ezwgs/image/upload/v1743166644/onn/cnnsya265yzeslthkyj4.jpg"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  </section>
);

export default Mission;

const vision =
  "A thriving ocean network and resilient coastal communities, empowered with knowledge, resources, and opportunities to sustain and benefit from a healthy marine ecosystem.";

// "A thriving ocean movement and resilient coastal communities equipped with the knowledge, resources, and opportunities to sustain and benefit from a health marine ecosystem";
const mission =
  "To safeguard marine ecosystems, empower coastal communities, and promote sustainable ocean-based livelihoods through innovative, inclusive, and community-driven conservation and development initiatives";
// "To safeguard marine ecosystems, empower coastal communities, and promote sustainable ocean-based livelihoods through innovative conservation and development initiatives.";

const CoreValue = ({
  description,
  title,
  src,
}: {
  description: string;
  title: string;
  src: string;
}) => (
  <Card className="flex-1 py-5 px-3 relative overflow-hidden flex flex-col items-center">
    <Paragraph className="text-3xl lg:text-5xl">{src}</Paragraph>
    {/* <div className="w-full flex absolute left-0 bottom-0 justify-center mb-3"> */}
    <Heading4 className="">{title}</Heading4>
    <Paragraph className="text-center">{description}</Paragraph>
    {/* </div> */}
  </Card>
);

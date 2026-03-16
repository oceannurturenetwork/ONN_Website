// our approach

import { AppImage, SectionContainer } from "@/components/utils";
import { Card } from "@/components/ui/card";
import { SectionSubtitle } from "@/components/utils/section-container";
import { ListItem, Paragraph } from "@/components/utils/typography";

interface OurApproachProps {
  description: string;
  list: string[];
  side_image: string;
}

export const OurApproach: React.FC<OurApproachProps> = ({
  description,
  list,
  side_image,
}) => {
  return (
    <SectionContainer className="flex flex-col lg:flex-row gap-3">
      <div className="flex-1">
        <SectionSubtitle
          subtitle="OUR APPROACH"
          className="text-primary-color my-4"
        />
        <Paragraph className="text-justify">{description}</Paragraph>
        <ul className="ml-5 list-disc my-5 flex flex-col gap-4">
          {list.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </ul>
      </div>
      <Card className="lg:w-[50%] w-full h-[340px] relative overflow-hidden p-0">
        <AppImage
          alt="our title"
          title="our title"
          src={side_image}
          className="w-full h-full"
          objectFit="cover"
        />
      </Card>
    </SectionContainer>
  );
};

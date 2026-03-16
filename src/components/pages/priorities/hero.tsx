// hero pages

import { AppImage, AppLinkButton, SectionContainer } from "@/components/utils";
import { Heading1, Paragraph } from "@/components/utils/typography";
import { DonateModalButton } from "../../utils/donate";

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, image }) => (
  <section className="w-full lg:h-[55vh] h-[45vh] relative overflow-hidden">
    <AppImage
      alt={title}
      title={title}
      src={image}
      objectFit="cover"
      className="w-full h-full"
    />
    <SectionContainer className="text-white relative z-[20] pt-[3rem] flex flex-col gap-4 h-full justify-center items-center">
      <Heading1>{title}</Heading1>
      <Paragraph className="text-center lg:max-w-[60%]">{subtitle}</Paragraph>
      <DonateModalButton className="rouded-full" />
    </SectionContainer>
  </section>
);

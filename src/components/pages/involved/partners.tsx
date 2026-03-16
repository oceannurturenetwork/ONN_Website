// partners
import { ArrowRight } from "lucide-react";
import { AppLinkButton, SectionContainer, AppImage } from "@/components/utils";
import {
  SectionSubtitle,
  SectionTitle,
} from "@/components/utils/section-container";
import { images } from "@/assets";

const Partners = () => (
  <SectionContainer id="partners">
    <SectionTitle title="Partners & Colloborations" className="text-center" />
    <SectionSubtitle
      subtitle="Collaborate for a Sustainable Future"
      className="my-3 text-center"
    />

    <div className="grid grid-col-2 lg:grid-cols-5">
      <div className="w-full h-[100px] relative overflow-hidden">
        <AppImage
          src={images.logo}
          alt={"ONN Logo"}
          title={"ONN Logo"}
          objectFit="contain"
          className="w-full h-full"
        />
      </div>
      <div className="w-full h-[100px] relative overflow-hidden">
        <AppImage
          src={
            "https://res.cloudinary.com/dyo0ezwgs/image/upload/v1746723081/onn/WhatsApp_Image_2025-05-07_at_04.18.39_rzeque.jpg"
          }
          alt={"Africa Logo"}
          title={"Africa Logo"}
          objectFit="contain"
          className="w-full h-full"
        />
      </div>
    </div>
    <div className="flex justify-center w-full">
      <AppLinkButton
        href="/contact"
        // target="_blank"
        className="gap-4 min-w-[130px] rounded-full"
        type="secondary"
      >
        <span>Sign up</span>
        <ArrowRight />
      </AppLinkButton>
    </div>
  </SectionContainer>
);

export default Partners;

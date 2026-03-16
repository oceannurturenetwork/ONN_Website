// merchandise hero 
"use client"; 

import { AppImage, AppLinkButton, SectionContainer } from "@/components/utils"
import { Heading1, Paragraph } from "@/components/utils/typography";


const Hero = () => {

    return (
        <SectionContainer>
            <section className="py-6 px-4 flex flex-col lg:flex-row gap-2 lg:items-center lg:h-[450px] bg-[#A6A7AA] rounded-lg">
                <div className="flex flex-col  gap-3">
                    <Heading1 className="text-center lg:text-left text-4xl font-bold mb-4">Support Conservation with Every Purchase</Heading1>
                    <Paragraph className="text-center lg:text-left leading-8">
                        Every item you buy directly supports our marine conservation projects and empowers local communities through capacity building and education. Wear your impact.
                    </Paragraph>
                    {/* <AppLinkButton className="max-md:self-center rounded-full min-w-[150px]">
                        Order Merchandise
                    </AppLinkButton> */}
                </div>
                <div className="lg:w-[60%] h-[250px] lg:h-full relative overflow-hidden">
                    <AppImage 
                        alt="merchandise hero image"
                        title="merchandise hero image"
                        src="https://res.cloudinary.com/dyo0ezwgs/image/upload/v1744136025/onn/WhatsApp_Image_2025-04-04_at_23.54.23_1_iibjvc.jpg"
                        fill
                        objectFit="contain"
                    />

                </div>

            </section>
        </SectionContainer>
    )
};

export default Hero;
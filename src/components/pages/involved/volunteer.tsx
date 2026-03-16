// Volunteer  

import { AppImage, AppLinkButton, SectionContainer } from "@/components/utils";
import { SectionSubtitle, SectionTitle } from "@/components/utils/section-container";
import { Paragraph, ListItem } from "@/components/utils/typography";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const Volunteer = ({page}: {page?: boolean}) => (
    <SectionContainer id="volunteer" className="flex flex-col lg:items-end lg:flex-row gap-3">
        {
            !page && (
                <Card className="flex-1 w-full h-[400px] min-h-[400px] lg:h-[430px] relative overflow-hidden">
                    <AppImage
                        title="intership"
                        alt="internship"
                        src={"https://res.cloudinary.com/dyo0ezwgs/image/upload/v1744144042/onn/WhatsApp_Image_2025-04-07_at_14.05.31_1_wsqrge.jpg"}
                        fill
                        objectFit="cover"
                    />
                </Card>
            )
        }
        <div className="lg:w-[60%] flex-1">
            {!page && <SectionTitle title="Volunteer Opportunities"/>}
            <SectionSubtitle 
                subtitle="Be the Change Our Oceans Need"
                className="max-w-[80%] my-4"
            />
            <Paragraph className="text-justify">
                Make an impact by volunteering with Ocean Nurture Network! Whether you’re participating in beach clean-ups, community outreach, or environmental education programs, your time and effort help protect marine life and support local communities. No matter your background, there’s a role for you. Join our team of dedicated changemakers and be a force for ocean conservation.
            </Paragraph>
            <Paragraph className="my-2">Ways to Get Involved:</Paragraph>
            <ul className="list-disc ml-5 flex flex-col gap-1">
                <ListItem className="text-xs lg:text-base">Beach Clean-ups</ListItem>
                <ListItem className="text-xs lg:text-base">Community Engagement</ListItem>
                <ListItem className="text-xs lg:text-base">Marine Conservation Projects</ListItem>
                <ListItem className="text-xs lg:text-base">Event Support</ListItem>
            </ul>
            <Paragraph className="my-2">Join our team of dedicated changemakers and be a force for ocean conservation!</Paragraph>
            {
                !page && (
                    <AppLinkButton
                        href="/forms/volunteer"
                        type="outline"
                        className="rounded-full min-w-[150px] gap-4"
                    >
                        <span>Volunteer</span>
                        <ArrowRight />
                    </AppLinkButton>
                )
            }
        </div>
        
    </SectionContainer>
);

export default Volunteer; 
// Membership and attachments

import { AppLinkButton, SectionContainer } from "@/components/utils";
import { SectionSubtitle, SectionTitle } from "@/components/utils/section-container";
import { ListItem, Paragraph } from "@/components/utils/typography";
import { ArrowRight } from "lucide-react";

const Membership = ({page}: {page?: boolean}) => (
    <SectionContainer id="membership" className="flex flex-col lg:items-end lg:flex-row gap-3">
        <div className="lg:w-[50%] flex-1">
            {!page && <SectionTitle title="Membership"/>}
            <SectionSubtitle 
                subtitle="Become a Champion for Ocean Conservation"
                className="max-w-[80%] my-4"
            />
            <Paragraph className="text-justify">
                Join Ocean Nurture Network as a member and be part of a dedicated community working to protect marine ecosystems and empower coastal communities. As a member, you’ll gain access to exclusive events, conservation updates, and opportunities to actively contribute to our mission.
            </Paragraph>
            <Paragraph className="my-2">Membership Benefits:</Paragraph>
            <ul className="list-disc ml-5 flex flex-col gap-1">
                <ListItem>Exclusive Updates</ListItem>
                <ListItem>Special Events</ListItem>
                <ListItem>Active Participation</ListItem>
                <ListItem>Community Recognition</ListItem>
            </ul>
            <Paragraph className="my-2">Become a member today and help drive meaningful change for our oceans!</Paragraph>
            {
                !page && (
                    <AppLinkButton
                        href="/forms/membership"
                        className="rounded-full min-w-[150px] mt-4 gap-4"
                    >
                        <span>Join us</span>
                        <ArrowRight />
                    </AppLinkButton>
                )
            }
        </div>
    </SectionContainer>
);

export default Membership; 
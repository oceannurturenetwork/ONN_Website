// internships and attachments

import { AppLinkButton, SectionContainer } from "@/components/utils";
import { SectionSubtitle, SectionTitle } from "@/components/utils/section-container";
import { ListItem, Paragraph } from "@/components/utils/typography";
import { ArrowRight } from "lucide-react";

const Internships = ({page}: {page?: boolean}) => (
    <SectionContainer id="internships" className="flex flex-col lg:items-end lg:flex-row gap-3">
        <div className=" flex-1">
            {!page && <SectionTitle title="Internships & Attachments"/>}
            <SectionSubtitle 
                subtitle="Gain Hands-on Experience in Marine Conservation"
                className="max-w-[80%] my-4"
            />
            <Paragraph className="text-justify">
                Ocean Nurture Network provides internship and attachment opportunities for students and young professionals passionate about ocean conservation and sustainable development. Work alongside experts, gain practical experience, and contribute to meaningful projects that protect marine ecosystems and support coastal communities. Whether you're studying environmental science, marine biology, or community development, this is your chance to apply your skills and grow your career while making a difference.
            </Paragraph>
            <Paragraph className="my-3">Requirements:</Paragraph>
            <ul className="my-3 ml-5 list-disc flex-col flex gap-2">
                <ListItem>CV</ListItem>
                <ListItem>Cover Letter</ListItem>
                <ListItem>Transcripts</ListItem>
                <ListItem>School Attachment Letter</ListItem>
                <ListItem>Completion Letter for Internship</ListItem>
            </ul>
            {
                !page && (
                    <AppLinkButton
                        href="/forms/internship"
                        // target="_blank"
                        className="rounded-full min-w-[150px] mt-4 gap-4"
                    >
                        <span>Register</span>
                        <ArrowRight />
                    </AppLinkButton>
                )
            }
        </div>
    </SectionContainer>
);

export default Internships; 
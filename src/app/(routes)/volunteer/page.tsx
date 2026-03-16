// donate page 
import PageHero from "@/components/utils/page-hero";
import SectionContainer from "@/components/utils/section-container";
import { Heading1 } from "@/components/utils/typography"
import { Card } from "@/components/ui/card";
import { AppLinkButton } from "@/components/utils";
import { generateStaticMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = generateStaticMetadata("Volunteer", "");
const Page = () => {

    return (
        <>
            <PageHero 
                page="Volunteering"
            />
            <SectionContainer>
                <Heading1>Available Volunteer Positions</Heading1>

                <Card className="min-h-[40vh] w-full my-5 ">

                </Card>
                <AppLinkButton href="/forms/volunteer" className="rounded-full min-w-[130px]">
                    Apply 
                </AppLinkButton>
            </SectionContainer>
        </>
    )
}

export default Page; 
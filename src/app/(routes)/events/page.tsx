import PageHero from "@/components/utils/page-hero";
import { Heading1 } from "@/components/utils/typography";
import { SectionContainer } from "@/components/utils";
import { generateStaticMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = generateStaticMetadata("Events", "");
const Page = () => {

    return (
        <>
            <PageHero
                page="Events"
            />
            <SectionContainer>
                <Heading1 className="mb-4">Events & Campaigns</Heading1>
                 
            </SectionContainer>
        </>
    )
}

export default Page; 
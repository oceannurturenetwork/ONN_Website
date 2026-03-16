// donate page 
import { SectionContainer } from "@/components/utils";
import MasonryList from "@/components/utils/mason";
import PageHero from "@/components/utils/page-hero";
import { Heading1 } from "@/components/utils/typography";
import { gallery } from "@/data";
import { generateStaticMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = generateStaticMetadata("Gallery", "");

const Page = () => {

    return (
        <>
            <PageHero
                page="Gallery"
            />
            <SectionContainer>
                <Heading1 className="mb-4">Our Gallery</Heading1>
                <MasonryList data={gallery} />
            </SectionContainer>
        </>
    )
}

export default Page; 
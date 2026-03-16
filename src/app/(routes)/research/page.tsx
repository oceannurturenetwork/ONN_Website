import PageHero from "@/components/utils/page-hero";
import { Heading1, Paragraph } from "@/components/utils/typography";
import { SectionContainer } from "@/components/utils";
import { Card } from "@/components/ui/card";
import { groq } from "next-sanity";
import { client, urlFor } from "@/sanity/lib/client";
import { ResearchTable } from "./table";
import { generateStaticMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = generateStaticMetadata("Research", "");

const Page = async () => {
    const query = groq`*[_type == "research"]{
      _id,
      title,
      authors,
      publishedAt,
      "fileUrl": file.asset->url
    } | order(publishedAt desc)`
    
    const data = await client.fetch(query)

      
    return (
        <>
            <PageHero
                page="Research"
            />
            <SectionContainer>
                <Heading1 className="mb-4">Scientific Research & Reports</Heading1>
                {
                    data.length ? <ResearchTable research={data}/>: (
                        <Card className="my- 3w-full h-[50vh] flex items-center justify-center">
                            <Paragraph>No Research & Reports to show for now</Paragraph>
                        </Card>
                    )
                }
            </SectionContainer>
        </>
    )
}

export default Page; 
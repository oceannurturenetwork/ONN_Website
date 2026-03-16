// about page 
 
import { FocusAreas, Hero, Mission, OurStory, Team } from "@/components/pages/about"
import { generateStaticMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = generateStaticMetadata("About us", "");

const Page = () => {

    return (
        <>
            <Hero />
            <OurStory />
            <Mission />
            <FocusAreas />
            <Team />
        </>
    )
}

export default Page; 
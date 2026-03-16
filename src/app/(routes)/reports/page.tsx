// donate page 
import UnderConstruction from "@/components/utils/under-construction"
import { generateStaticMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = generateStaticMetadata("Reports", "");

const Page = () => {

    return (
        <>
            <UnderConstruction />
        </>
    )
}

export default Page; 
// donate page 
import PageHero from "@/components/utils/page-hero";
import { FAQs } from "./components/container";
import { generateStaticMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = generateStaticMetadata("Frequently Asked Questions", "");

const Page = () => {

    return (
        <>
            <PageHero 
                page="faqs"
            />
            <FAQs />
        </>
    )
}

export default Page; 
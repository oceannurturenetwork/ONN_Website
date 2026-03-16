// donate page 
import PageHero from "@/components/utils/page-hero";
import { PrivacyPolicy } from "./components/container";
import { generateStaticMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = generateStaticMetadata("Privacy Policy", "");

const Page = () => {

    return (
        <>
            <PageHero 
                page="privacy-policy"
            />
            <PrivacyPolicy />
        </>
    )
}

export default Page; 
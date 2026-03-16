// careers page 
import { Careers, CareerHeader, CareerTab, Hero } from "@/components/pages/careers";
import { generateStaticMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = generateStaticMetadata("Careers", "");

const Page = async (
    {searchParams}:
    {searchParams: Promise<{tab: string}>}
) => {
    const tab = (await searchParams).tab; 

    return (
        <>
            <CareerHeader />
            {
                tab === "vacancies" || !tab ? (
                    <>
                        <Hero />
                        <Careers />
                    </>
                ): (

                    <>
                        <CareerTab />
                    </>
                )
            }
         
        </>
)}
export default Page; 
// resources page 
import { Articles, Blogs, Events, UploadArticles, Hero } from "@/components/pages/resources";

import { generateStaticMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = generateStaticMetadata("Resources", "");
const Page = () => {

    return (
        <>
            <Hero />
            {/* <Articles /> */}
            <Blogs />
            <UploadArticles />
            {/* <Events /> */}
        </>
    )
}

export default Page; 
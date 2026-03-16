// donate page 
import { BlogHero, RecentBlogs, Search, TrendingArticles } from "@/components/pages/blogs";
import PageHero from "@/components/utils/page-hero"
import { generateStaticMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = generateStaticMetadata("Blogs", "");
const Page = () => {

    return (
        <>
            <PageHero 
                page="Blogs"
            />
            <BlogHero />
            {/* <Search /> */}
            <RecentBlogs />
            <TrendingArticles 
                title={"Latest articles"}
                count={10}
                start={5}
            />
        </>
    )
}

export default Page; 
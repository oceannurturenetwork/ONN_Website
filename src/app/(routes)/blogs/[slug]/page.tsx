import {  BlockContentComponent, BlogHero, BlogNav, Categories } from "@/components/pages/blog";
import { getPost } from "@/lib/blogs";

const Page = async ({params}: {params: Promise<{slug: string}>}) => {
    let slug = (await params).slug
    let blog = await getPost(slug); 

    return (
        <>
            <BlogNav 
                title={blog.title}
                slug={blog.slug}
            />
            <BlogHero 
                categories={blog.categories.map(itm => itm.title)}
                createdAt={blog.createdAt}
                title={blog.title}
                author={blog.author}
                banner={blog.banner}
                slug={blog.slug}
            />
            <BlockContentComponent
                body={blog.body}
            />
            <Categories categories={blog.categories.map(itm => itm.title)}/>
        </>
    )
};

export default Page; 
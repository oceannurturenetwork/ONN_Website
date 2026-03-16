import { client, urlFor } from "@/sanity/lib/client";
import { BlogType } from "@/types";
import { groq } from "next-sanity";


export const getPosts = async (start?: number, count?: number) => {
    const query = groq`*[_type == "post"] | order(_createdAt desc) [${start || 0}...${count || 10}] {
        _id,    
        title,
        banner,
        preview,
        slug, 
        categories[] -> {
          _id,
          title,
          slug
        },
        _createdAt,
      }`;

      
    let posts = await client.fetch(query);
    let blogs: BlogType[] = posts.map((blog: any) => ({
        id: blog._id, 
        title: blog.title, 
        createdAt: blog._createdAt, 
        categories: blog.categories.map((category: any) => ({...category, slug: category.slug.current})),
        slug: blog.slug.current, 
        preview: blog.preview, 
        banner: urlFor(blog.banner)?.url()
    }))

    return blogs; 
};


export const getPost  = async (slug: string) => {
    console.log(slug)
    const query = groq`
        *[_type == "post" && slug.current == $slug] [0] {
            _id,
            title,
            banner,
            preview,
            slug,
            categories[]->{
                _id,
                title,
                slug
            },
            author->{
                _id,
                name,
                slug,
                image
            },
            _createdAt,
            body
        }
    `;

    let post = await client.fetch(query, {slug});

    let blog: BlogType = {
        id: post._id, 
        title: post.title, 
        createdAt: post._createdAt, 
        categories: post.categories.map((category: any) => ({...category, slug: category.slug.current})),
        slug: post.slug.current, 
        preview: post.preview, 
        body: post.body,
        author: {
            _id: post.author._id, 
            name: post.author.name, 
            slug: post.author.slug.current, 
            image: urlFor(post.author.image)?.url()
        },
        banner: urlFor(post.banner)?.url()
    }


    return blog; 


}
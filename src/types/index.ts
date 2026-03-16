// types
import { FormItem } from "./form-type"; 

type TeamMemberType = {
    portrait: string; 
    name: string; 
    position: string; 
    // info: string; 
    email: string; 
    bio: string; 
}
type CategoryType = {
    _id: string; 
    title: string; 
    slug: string; 
}
type AuthorType = {
    _id: string; 
    name: string; 
    slug: string; 
    image: string; 
}
type BlogType = {
    id: string; 
    banner: string; 
    title: string; 
    preview: string; 
    createdAt: Date; 
    slug: string; 
    categories: CategoryType[]; 
    author?: AuthorType; 
    body?: string;
}

type ArticleType = {
    id: string; 
    author: string; 
    title: string; 
    body: string; 
    banner?: string; 
    category: string; 
    createdAt: Date;
}

type FullArticleType = ArticleType & {
    pdf?: string; 
}

type EventType = {
    id: string;
    title: string;
    description: string;
    date: Date;
    location: string;
    banner: string;
}

type ProductType = {
    id: string; 
    title: string; 
    price: number; 
    image: string; 
}

// career type 
type CareerType = {
    position: string; 
    role: string; 
    keys: string[];
    qualifications: string[];
    vacancies: number;
}

  
export type {
    FormItem, 
    BlogType,
    TeamMemberType,
    ArticleType,
    FullArticleType,
    AuthorType,
    EventType,
    ProductType,
    CareerType
}
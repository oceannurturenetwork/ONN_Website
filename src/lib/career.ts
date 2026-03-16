// groq get careers
import { client, urlFor } from "@/sanity/lib/client";
import { CareerType } from "@/types";
import { groq } from "next-sanity";

export const getCareers = async () => {
    const query = groq`*[_type == "career" && open == true] | order(_createdAt desc){
        _id,
        position,
        role,
        keys,
        qualifications,
        vacancies,
        open
    }`;
    let careers = await client.fetch(query);

    let list: CareerType[] = careers.map((career) => ({
        ...career
    }));

    return list; 
}
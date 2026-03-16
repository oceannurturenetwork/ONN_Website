// learn & engage

import { ArrowRight } from "lucide-react";
import { images } from "@/assets";
import { AppLink, AppLinkButton, SectionContainer } from "@/components/utils";
import MinorBlog from "@/components/utils/minor-blog";
import { SectionSubtitle, SectionTitle } from "@/components/utils/section-container";
import { BlogType } from "@/types";
import { TrendingArticles } from "../blogs";


const Learn = () =>  {

    return (
        <>
            <TrendingArticles 
                title="Latest News"
                subtitle=""
                start={0}
                count={10}
                href="/blogs"
            />
           
        
        </>
    )
}
    // <SectionContainer>
    //     <SectionTitle 
    //         title="Learn & Engage"
            
    //     />
    //     <div className="flex justify-between items-end">
    //         <SectionSubtitle 
    //             subtitle="Research, reports, and news"
    //             className="text-lg lg:text-2xl"
    //         />
    //         <AppLink 
    //             href="/resources"
    //             text="View more"
    //             title="blog link"
    //             className="font-bold"
    //             afterIcon={<ArrowRight size={20}/>}
    //         />
    //     </div>
    //     <div className="my-4 grid grid-cols-1 lg:grid-cols-3 gap-3">
    //         {
    //             blogs_dummy.map((blog, index) => (<MinorBlog blog={blog} key={index}/>))
    //         }
    //     </div>
        
    // </SectionContainer>
export default Learn; 


// const blogs_dummy: BlogType[] = [
//     {
//         id: "1", 
//         banner: images.blog_1,
//         title: "The Role of Coastal Communities in Marine Conservation",
//         preview: "This article explores how local communities play a crucial role in protecting marine ecosystems, it highlights successful community-led conservation",
//         createdAt: new Date(),
//     },
//     {
//         id: "2",
//         banner: images.blog_2, 
//         title: "Sustainable Fisheries: Balancing Livelihoods and Marine Health",
//         preview: "Overfishing and destructive fishing practices threated marine biodiversity and local economies. This article discusses the importance of sustainable.",
//         createdAt: new Date()
//     },
//     {
//         id: "3",
//         banner: images.blog_3, 
//         title: "Change and its impact on Kenya's Marine Ecosystems",
//         preview: "Rising sea levels, coral bleaching, and extreme weather events are affecting Kenya's coastal and marine life. This article breaks down how climate",
//         createdAt: new Date()
//     }
// ]
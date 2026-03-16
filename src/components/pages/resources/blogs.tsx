// blogs
import { TrendingArticles } from "../blogs";

const Blogs = () => (
    <TrendingArticles 
        title="Blogs & Articles"
        subtitle="Dive Into Ocean Conservation Stories and Insights"
        href="/blogs"
        start={0}
        count={10}
    />
);

    // <SectionContainer id="blogs">
    //     <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
    //         <div>
    //             <SectionTitle title="Blogs & Articles"/>
    //             <SectionSubtitle subtitle="Dive Into Ocean Conservation Stories and Insights"/>
    //         </div>
    //         <AppLink href="/blogs" text="More blogs" title="Articles" afterIcon={<ArrowRight />} className="self-end mt-4 lg:mt-0"/>
    //         {/* <BlogsSheet /> */}

    //     </div>
    //     <AppCarousel>
    //         {
    //             blogs.map((blog, index) => (
    //                 <MinorBlog 
    //                     key={index}
    //                     blog={blog}
    //                     className="min-w-[350px] lg:min-w-[450px] h-[380px] lg:h-[480px]"
    //                 />
    //             ))
    //         }
    //     </AppCarousel>
    //     <Separator className=""/>
    // </SectionContainer>
export default Blogs; 


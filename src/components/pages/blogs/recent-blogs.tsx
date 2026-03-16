// recent articles 

import { Card } from "@/components/ui/card";
import { SectionContainer } from "@/components/utils"
import MinorBlog from "@/components/utils/minor-blog";
import { Heading2 } from "@/components/utils/typography";
import { getPosts } from "@/lib/blogs";
import { BlogType } from "@/types";
 

const RecentBlogs = async () => {
    const blogs: BlogType[] = await getPosts(0, 5); 

    return (
      
        <SectionContainer>
            {
                blogs.length ? (
                    <div className="flex gap-2 lg:flex-row flex-col">
                        <MinorBlog 
                            blog={blogs[0]}
                            className="h-[380px] lg:h-[510px] lg:min-w-[50%]"
                        />
                        <div className="grid grid-cols-2 gap-2">
                            {
                                blogs.slice(1, 5).map((blog, index) => (
                                    <MinorBlog 
                                        blog={blog}
                                        key={index}
                                        dontShowPreview={true}
                                        className="h-[220px] lg:h-[250px]"
                                    />
                                ))
                            }
                        </div>
                    </div>
                ): (
                    <Card className="w-full h-[500px] flex items-center justify-center">
                        <Heading2>Our blogs are being uploaded...</Heading2>
                    </Card>
                )
            }
        </SectionContainer>
    )
    
};

export default RecentBlogs; 
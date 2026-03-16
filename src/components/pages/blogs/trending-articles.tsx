// blogs

import { AppLink, SectionContainer } from "@/components/utils";
import { SectionSubtitle, SectionTitle } from "@/components/utils/section-container";
import { Separator } from "@/components/ui/separator";
import AppCarousel from "@/components/ui/app-carousel";
import MinorBlog from "@/components/utils/minor-blog";

import { BlogType } from "@/types";
import { getPosts } from "@/lib/blogs";
import { ArrowRight } from "lucide-react";

const TrendingArticles = async (
    {title, subtitle, start, count, href}: 
    {title: string; subtitle?: string, start?: number; count?: number, href?: string}
) => {
    const blogs: BlogType[] = await getPosts(start, count); 
    return (
        <>
            {
                blogs?.length ? (
                    <SectionContainer id="blogs">
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                            <div className="w-full">
                                <SectionTitle title={title}/>
                                {(subtitle || href) && (
                                    <div className="w-full flex justify-between items-center">
                                        {
                                            subtitle ? (
                                                <SectionSubtitle 
                                                    subtitle="Research, reports, and news"
                                                    className="text-lg lg:text-2xl"
                                                />
                                            ): <div className="w-5"/>
                                        }
                                    {href && (
                                        <AppLink 
                                            href={href}
                                            text="View more"
                                            title="more"
                                            className="font-bold"
                                            afterIcon={<ArrowRight size={20}/>}
                                        />

                                    )}
                                </div>
                                )}
                            </div>
                        </div>
                        <AppCarousel>
                            {
                                blogs.map((blog, index) => (
                                    <MinorBlog 
                                        key={index}
                                        blog={blog}
                                        className="min-w-[400px] max-w-[400px] lg:min-w-[450px] lg:max-w-[450px] h-[380px] lg:h-[480px]"
                                    />
                                ))
                            }
                        </AppCarousel>
                        <Separator className=""/>
                    </SectionContainer>
                ): <></>
            }
        </>
)};

export default TrendingArticles; 


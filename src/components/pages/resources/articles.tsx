// resources articles

import { ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/utils";
import { SectionSubtitle, SectionTitle } from "@/components/utils/section-container";
import { Separator } from "@/components/ui/separator";
 
import AppCarousel from "@/components/ui/app-carousel"; 
import MinorArticle from "@/components/utils/minor-article"; 
import { ArticlesSheet } from "@/components/sheets/articles";

import { articles } from "@/data";

const Articles = () => (
    <SectionContainer id="research">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end">
            <div>
                <SectionTitle title="Research articles"/>
                <SectionSubtitle subtitle="Explore Cutting-Edge Ocean Conservation Research"/>
            </div>
           <ArticlesSheet />
        </div>
        <AppCarousel>
            {
                articles.map((article, index) => (
                    <MinorArticle 
                        key={index}
                        article={article}
                    />
                ))
            }
        </AppCarousel>
        <Separator className=""/>
    </SectionContainer>
);

export default Articles; 



  
 
  
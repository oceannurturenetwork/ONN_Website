// page hero component 
"use client";

import { useRouter } from "next/navigation";
import { Card } from "../ui/card";
import AppImage from "./app-image";
import { Heading1, Heading3, Paragraph } from "./typography";
import { cn } from "@/lib/utils";
import AppLink from "./app-link";
import { ChevronLeft, ChevronsRight } from "lucide-react";
import { images } from "@/assets";
import { Button } from "../ui/button";

interface PageHeroProps {
    page: string; 
    href?: string; 
};


const PageHero: React.FC<PageHeroProps> = ({page, href}) => {
    let actualLink = page === "get involved" ? "involved": page === "about us" ? "about" : page; 
    const {back} = useRouter(); 

    return (
            <>
                <section className={cn("h-[400px] w-full relative ")}>
                    <div className="w-full h-full absolute top-0 left-0 bg-black-transparent z-[30]"/>
                    {/* hero image */}
                    <div 
                        style={{
                            background: `url(${images.pages_hero})`,
                            backgroundSize: "cover",
                            backgroundAttachment: "fixed"
                        }}
                        className="w-full h-full relative overflow-hidden">
                    </div>
                </section>
                <div className="-mt-[40px] mb-[4rem] lg:mb-[5rem] mx-auto w-full max-w-[1350px] h-[10px] relative z-[50]">
                    <Card className="flex flex-row items-center gap-2 p-4 w-fit rounded-none shadow-none border-none">
                        <Button className="gap-4 items-center" variant={"ghost"} onClick={back}>
                            <ChevronLeft />
                            <span>Back</span>
                        </Button>
                        <span>|</span>
                        <AppLink title="home" href="/" text="Home" className="uppercase font-bold"/>
                        <ChevronsRight size={20}/>
                        <AppLink title={page} href={href || `/${actualLink}`} text={page} className="uppercase text-primary-color font-bold"/>
                    </Card>

                </div>
            </>
    )
};

export default PageHero; 
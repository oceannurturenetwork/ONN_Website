"use client"; 

import React from "react";

import { useRouter } from "next/navigation";
import { Masonry, useInfiniteLoader } from "masonic";

import AppImage from "./app-image";
import useMediaQuery from "@/hooks/useMediaQuery";
import { shuffleArray } from "@/utils/array";
import useMounted from "@/hooks/useMounted";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Info, X } from "lucide-react";
import { Paragraph } from "./typography";

type ImageType = {src: string, description?: string}; 
interface ImagesProps {
    data: ImageType[];
}
const MasonryList: React.FC<ImagesProps> = ({data}) =>  { 
    const mounted = useMounted(); 
    const [items, setItems] = React.useState<ImageType[]>([])

    const tablet = useMediaQuery(850);
    const mobile = useMediaQuery(600);
    const smaller = useMediaQuery(400);
   
    React.useEffect(() => {
        if (!mounted) return; 
        setItems([...shuffleArray(data)])
    }, [mounted]);


    // const fetchMoreItems = async () => {
    //     if (!mounted) return; 
    //     setItems((current) => [...current, ...shuffleArray(data)]);
    // };
    // const maybeLoadMore = useInfiniteLoader(fetchMoreItems, {
    // isItemLoaded: (index: any, items: any) => !!items[index],
    // });

   

    if (!mounted) return <></>;

    return (
        <section>
            <Masonry 
                items={items} 
                render={MasonryCard} 
                // onRender={maybeLoadMore}
                columnCount={smaller ? 1 : mobile ? 2 : tablet ? 3 : 4}
                columnGutter={4}
                rowGutter={4}
            />

        </section>
    )
};

export default MasonryList; 

const MasonryCard = ({ index, data: {src, description} }: { index: number; data: {src: string, description?: string} }) => {
    const [opened, setOpened] = React.useState<boolean>(false);

    return (
        <>
            <div className={cn("flex items-center justify-ceter fixed top-0 left-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,.5)] z-[230] duration-700", opened ? "scale-[1]": "scale-[0]")}>
                <Button className="absolute top-0 right-0 m-4" variant={"secondary"} onClick={() => setOpened(false)}> 
                    <X />
                </Button>

                <div className="w-[90vw] h-[80vh] relative overflow-hidden">
                    <AppImage
                        alt={`image ${index}`}
                        title={`image ${index}`}
                        src={src}
                        fill
                        className="object-contain"
                    />
                </div>
                {description ? (
                    <div className="w-full absolute bottom-0 left-0 z-[500] py-7 bg-[rgba(0,0,0,.5)] px-4">
                        <Paragraph className="text-white ">{description}</Paragraph>
                    </div>
                ): (<></>)}
            </div>
            <div 
                className="w-fit h-fit relative overflow-hidden cursor-pointer hover:scale-[.98] transition-transform duration-700 group"
                onClick={() => setOpened(true)}
                
            >
                 
                <AppImage
                    alt={`image ${index}`}
                    title={`image ${index}`}
                    src={src}
                    width={500}
                    height={500}
                    className="object-contain"
                />
                {
                    description ? <Button variant="secondary" size="icon" className="absolute bottom-0 right-0 m-3"><Info className=""/></Button>: <></>
                }
            </div>
        </>
    );
};
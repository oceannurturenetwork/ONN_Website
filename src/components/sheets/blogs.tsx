// articles

import { ArrowRight } from "lucide-react"
import SheetContainer from "./container"
import { Heading2, Paragraph } from "../utils/typography"
import { Separator } from "../ui/separator"


export const BlogsSheet = () => {


    return (
        <SheetContainer
            trigger={ 
                <span className="self-end flex gap-3 items-center mt-4 lg:mt-0">
                    <span>More blogs</span>
                    <ArrowRight />
                </span>
            }
            title="Articles"
            width={"w-full max-w-[100vw] lg:max-w-[80vw]"}
        >
            <div className="p-4">
                <Heading2>Blogs & Updates</Heading2>
                <Paragraph>Get updated on the latest news from our organization and beyond.</Paragraph>
                <Separator className="my-2"/>

            </div>
        </SheetContainer>
    )
}




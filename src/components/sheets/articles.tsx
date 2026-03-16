// articles

import { ArrowRight } from "lucide-react"
import SheetContainer from "./container"
import { Heading2, Paragraph } from "../utils/typography"
import { Separator } from "../ui/separator"


export const ArticlesSheet = () => {


    return (
        <SheetContainer
            trigger={ 
                <span className="self-end flex items-center mt-4 lg:mt-0">
                    <span>More articles</span>
                    <ArrowRight />
                </span>
            }
            title="Articles"
            width={"w-full max-w-[100vw] lg:max-w-[80vw]"}
        >
            <div className="p-4">
                <Heading2>Articles</Heading2>
                <Paragraph>Read about the latest articles on ocean research and more.</Paragraph>
                <Separator className="my-2"/>

            </div>
        </SheetContainer>
    )
}




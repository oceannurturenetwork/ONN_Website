// categories

import { Separator } from "@/components/ui/separator"
import { SectionContainer } from "@/components/utils"
import { Paragraph } from "@/components/utils/typography"

interface CategoriesProps {
    categories: string[]
};


const Categories: React.FC<CategoriesProps> = ({categories}) => {

    return (
        <SectionContainer className="lg:max-w-[70%]">
            <Separator />
            <div className="my-3 flex flex-wrap gap-2">
                {
                    categories.map((category, index) => (
                        <Paragraph className="rounded-md py-2 px-4 border border-gray-300 text-sm lg:text-md" key={index}>{category}</Paragraph>
                    ))
                }

            </div>
        </SectionContainer>
    )
};

export default Categories; 
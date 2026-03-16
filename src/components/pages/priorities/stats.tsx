
import { Card } from "@/components/ui/card";
import { SectionContainer } from "@/components/utils";
import { Heading3, Paragraph } from "@/components/utils/typography";

type StatType = {
    title: string; 
    description:  string; 
    icon: any
}

interface StatsProps {
    cards: StatType[]
}; 


export const Stats: React.FC<StatsProps> = ({cards}) => {

    return (
        <SectionContainer className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            {
                cards.map((card, index) => (
                    <Card className="flex-1 flex flex-col gap-3 p-6 items-center justify-center" key={index}>
                        <card.icon  className="w-8 h-8 text-blue-500" />
                        <Heading3 >{card.title}</Heading3>
                        {/* <Separator /> */}
                        <Paragraph className="text-center">{card.description}</Paragraph>
                    </Card>
                ))
            }
        </SectionContainer>
    )
}
// after hero cards

import { icons } from "@/assets";
import { Card } from "@/components/ui/card";
import { AppImage, SectionContainer } from "@/components/utils";
import { Heading2 } from "@/components/utils/typography";


const Cards = () => (
    <SectionContainer className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <AfterHeroCard 
            text="5+ Coastal Counties Protected"
            icon={icons.precint}
        />
        <AfterHeroCard 
            text="100+ Community Members Empowered"
            icon={icons.partners}
        />
        <AfterHeroCard 
            text="2+ Marine Conservation Projects"
            icon={icons.clipboard}
        />
    </SectionContainer>
);

export default Cards; 

const AfterHeroCard = ({text, icon}: {text: string, icon: string}) => (
    <Card className="p-5 flex flex-col items-center">
        <AppImage 
            src={icon}
            title={text}
            alt={text}
            height={80}
            width={80}
        />
        <Heading2 className="font-extrabold text-xl lg:text-[20px] text-center max-w-[70%]">{text}</Heading2>
    </Card>
)
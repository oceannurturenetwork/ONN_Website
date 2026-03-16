import { SectionContainer } from "@/components/utils";
import { Heading2, Heading3, ListItem, Paragraph } from "@/components/utils/typography";
import AppLinkButton from "@/components/utils/app-link-button"; 
import { Separator } from "@/components/ui/separator"; 

interface CareerListProps extends CareerType {};

const CareerList: React.FC<CareerListProps> = (
    {position, role, keys, qualifications, vacancies}
) => {

    return (
        <SectionContainer className="flex flex-col gap-2">
            <Heading2>{position}</Heading2>
            <Paragraph>Positions: {vacancies}</Paragraph>
            <Heading3>Role</Heading3>
            <Paragraph>{role}</Paragraph>
            <Heading3>Key Duties and Responsibilities</Heading3>
            <ul className="ml-5 list-disc">
                {keys.map((list, index) => <ListItem key={index} className="my-2">{list}</ListItem>)}
            </ul>
            <Heading3>Qualification & Skills</Heading3>
            <ul className="ml-5 list-disc">
                {qualifications.map((list, index) => <ListItem key={index} className="my-2">{list}</ListItem>)}
            </ul>
            <AppLinkButton href={`/forms/volunteer?position=${position}`} className="rounded-full my-4 min-w-[130px]">
                Apply
            </AppLinkButton>
            <Separator />
        </SectionContainer>
    )
};

export default CareerList;
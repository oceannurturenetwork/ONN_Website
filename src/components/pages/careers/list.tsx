// career list 

import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { SectionContainer } from "@/components/utils"
import { Heading3 } from "@/components/utils/typography"
import { getCareers } from "@/lib/career";
import { CareerType } from "@/types";
import CareerList from "./career-list"; 

export const Careers = async () => {

    const careers: CareerType[] = await getCareers(); 
     
    return (
        <SectionContainer>
                <Heading3>{careers?.length || 0} vacancies available</Heading3>
                <Separator className="my-1"/>
                {
                    !careers?.length ? (
                        <Card className="min-h-[60vh] flex-1 w-full flex items-center justify-center">

                            <Heading3>There are no vacancies as of now.</Heading3>

                        </Card>

                    ): <></>
                }
                {
                    careers?.length ? (
                        <>
                            {
                                careers.map((career, index) => <CareerList key={index} {...career}/>)
                            }
                        </>
                    ): <></>
                }
        </SectionContainer>
    )
}
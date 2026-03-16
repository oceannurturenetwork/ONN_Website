// under construction 

import { Construction } from "lucide-react";
import { Card } from "../ui/card";
import SectionContainer from "./section-container";
import { Heading2 } from "./typography";

const UnderConstruction = () => (
    <SectionContainer className="mt-[150px]">
        <Card className="w-full h-[50vh] flex justify-center items-center">
            <Construction />
            <Heading2>Page under construction</Heading2>
        </Card>

    </SectionContainer>
);

export default UnderConstruction; 
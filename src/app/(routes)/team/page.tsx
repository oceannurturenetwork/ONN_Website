// team page

import { TeamContainer } from "@/components/pages/team";
import PageHero from "@/components/utils/page-hero";

import { generateStaticMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = generateStaticMetadata("The Team", "");
const Team = () => (
    <>
        <PageHero 
            page="team"
            // title="Our Team"
        />
        <TeamContainer  />
        
  
    </>
);

export default Team; 
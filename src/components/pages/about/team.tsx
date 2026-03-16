// our team

import { images } from "@/assets";
import { AppLink, AppLinkButton, SectionContainer } from "@/components/utils";
import { SectionSubtitle, SectionTitle } from "@/components/utils/section-container";
import { ArrowRight } from "lucide-react";

const Team = () => (

        <SectionContainer id="team" className="my-2 grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-white p-4 h-full">
                <SectionTitle title="Our Team" className="text"/>
                <SectionSubtitle 
                    subtitle="The Faces Behind the Mission"
                    className="my-5"
                />

                <div className="flex flex-col gap-3">
                    <AppLink 
                        text="Board of Advisors"
                        title="Board"
                        href={"/team?type=advisors"}
                        className="text-[##0000EE] hoveer:text-primary-color"
                    />
                    <AppLink 
                        text="Board of Directors"
                        title="Board"
                        href={"/team?type=directors"}
                        className="text-[##0000EE] hoveer:text-primary-color"
                    />
                    <AppLink 
                        text="Senior Leadership"
                        title="Senior Leadership"
                        href={"/team?type=leadership"}
                        className="text-[##0000EE] hoveer:text-primary-color"
                    />
                    {/* <AppLink 
                        text="Staff"
                        title="Staff"
                        href={"/team#staff"}
                        className="text-[##0000EE] hoveer:text-primary-color"
                    /> */}
                    {/* <AppLink 
                        text="Partners & Collaborators"
                        title="partners"
                        href={"/team#partners"}
                        className="text-[##0000EE] hoveer:text-primary-color"
                    /> */}
                    <AppLinkButton
                        href="/team"
                        className="rounded-full min-w-[150px] my-5"
                    >
                        <span>View all</span>
                        <ArrowRight size={20}/>
                    </AppLinkButton>
                </div>

            </div>
        </SectionContainer>
);
// </section>

export default Team;



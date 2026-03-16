// Events


import { SectionContainer } from "@/components/utils";
import { SectionSubtitle, SectionTitle } from "@/components/utils/section-container";
import { Separator } from "@/components/ui/separator";
import { events } from "@/data";
import Event from "@/components/utils/event";

const Events = () => (

    <SectionContainer id="events">
         
        <SectionTitle title="Events & Campaigns" className="text-center"/>
        <SectionSubtitle className="text-center" subtitle="Join Us for Ocean Conservation Initiatives and Awareness Campaigns"/>
             
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 my-3">
            {
                events.map((event, index) => (
                    <Event key={index} event={event}/>
                ))
            }

        </div>
        <Separator className=""/>
    </SectionContainer>
);

export default Events; 


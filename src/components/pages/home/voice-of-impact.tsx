// voices of impact
"use client";

import { useRef } from "react";
import { SectionContainer } from "@/components/utils";
import { SectionSubtitle, SectionTitle } from "@/components/utils/section-container";
import { Paragraph } from "@/components/utils/typography";
import { Play } from "lucide-react";

const VoicesOfImpact = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current?.play();
        }
    };

    return (
        <SectionContainer className="flex gap-2 flex-col lg:flex-row w-full">
            <div className="h-[325px] lg:min-w-[40%] w-full relative overflow-hidden rounded-lg">
                <video
                    ref={videoRef}
                    src="https://res.cloudinary.com/dyo0ezwgs/video/upload/v1746564172/onn/impact_vu3zgn.mp4" // replace with actual video path
                    title="voices"
                    className="w-full h-full object-cover"
                    playsInline
                    muted // optional, remove if you want sound on first play
                    controls={false}
                />
                <div
                    className="w-full h-full absolute top-0 left-0 flex items-center justify-center bg-black-transparent"
                    onClick={handlePlay}
                >
                    <Play size={35} className="text-primary-color cursor-pointer hover:text-white duration-700" />
                </div>
            </div>
            <div className="flex flex-col">
                <SectionTitle title={"Voices of impact"} />
                <SectionSubtitle
                    subtitle="Real stories, real change"
                    className="my-2"
                />

                <Paragraph className="flex-1 text-justify leading-8 my-3">
                    (ONN), we believe that youth are not just the future — we are the present force driving ocean resilience. From coastal communities to classrooms, from science to storytelling, our voices amplify the urgent need to protect our blue planet. This campaign, Voices of Impact, showcases the real people behind our mission — young ocean leaders turning passion into action. Join us as we inspire, educate, and mobilize communities for sustainable ocean stewardship. Because when we nurture the ocean, it nurtures us back.
                </Paragraph>

            </div>
        </SectionContainer>
    )
};

export default VoicesOfImpact; 
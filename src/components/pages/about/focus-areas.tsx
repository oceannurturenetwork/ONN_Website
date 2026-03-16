// focus areas
"use client"; 
import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { AppImage, AppLinkButton, SectionContainer } from "@/components/utils";
import {  SectionTitle } from "@/components/utils/section-container";
import { Heading4, Paragraph } from "@/components/utils/typography";
import { ArrowRight } from "lucide-react";
import { icons, images } from "@/assets"; 
import { gsap } from "gsap";

const FocusAreas = () => (
        <section
            className="my-[5rem] min-h-[60vh] py-3 flex flex-col items-center justify-center" 
            style={{
                background: `url(${images.team_about}) no-repeat center center / cover`,
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
            }}
        >
        <SectionContainer id="focus-areas">
            <SectionTitle title="Our Focus areas" className="text-black text-center"/>
            {/* <SectionSubtitle className="my-5 text-center" subtitle="Empowering Communities, Protecting Oceans: Our Key Areas of Impact" /> */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 my-4">
                <FocusArea
                    title={"1. Sustainable Fisheries"}
                    text="We are committed to promoting sustainable fishing practices that protect marine ecosystems while supportig local fishing communities. We advocate for responsible fishing methods, marine biodiversity conservation, and policies that ensure the long-term viability of fish stocks. By empowering coastal communities with knowledge and resources, we strive to create a balannce between economic livelihoods and environmental stewardship."
                    icon={icons.fisheries}
                />
                <FocusArea
                    title={"2. Blue Economy"}
                    text="We champion sustainable use of ocean resources to drive economic growth while preserving marine ecosystems. We support initiatives that promote eco-friendly maritime industries, responsible tourism, and innovative ocean-based livelihoods. By fostering a balance between economic development and conservation, we aim to create long-term benefits for coastal communities while safeguarding the health of our oceans."
                    icon={icons.blue_economy}
                />
                <FocusArea
                    title={"3. Marine Conservations"}
                    text="We are dedicated to protecting and restoring marine ecosystems through capacity building, researchh, and community-led conservation initiatives. Our efforts focus on combatting pollution, safeguarding endangered marine species, and promoting marine habitat restoration. By cultivating strategic partnerships and raising public awareness, we aim to ensure a thriving and resilient ocean for future generations."
                    icon={icons.oceans}
                />
                <FocusArea
                    title={"4. Climate Adaptation & Resilience"}
                    text="We equip communities with innovative ocean-based solutions. We drive the adoption of climate resilient coastal infrastructure, promote sustainable resources management, and establish robust disaster preparedness strategies to combat rising sea levels, extreme weather, and ocean acidification. Through the convergence of science, policy, and community driven action, we are constructig a future where bothh people and marine ecosystems thrive."
                    icon={icons.climate}
                />
            </div>
            <div className="flex justify-center">
                <AppLinkButton href="/involved" className="rounded-full min-w-[150px] gap-4 my-7" type="secondary">
                    <span>Join us</span>
                    <ArrowRight />
                </AppLinkButton>
            </div>
            
        
        </SectionContainer>
    </section>
);


export default FocusAreas;

const FocusArea = ({ title, text, icon}: { title: string, text: string, icon: string }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const frontRef = useRef<HTMLDivElement>(null);
    const backRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!cardRef.current || !frontRef.current || !backRef.current) return;

        gsap.set(cardRef.current, { transformStyle: "preserve-3d" });
        gsap.set(frontRef.current, { backfaceVisibility: "hidden" });
        gsap.set(backRef.current, { backfaceVisibility: "hidden", rotationY: 180 });

        cardRef.current.addEventListener("mouseenter", () => {
            gsap.to(cardRef.current, { rotationY: 180, duration: 0.5, ease: "power2.inOut" });
        });

        cardRef.current.addEventListener("mouseleave", () => {
            gsap.to(cardRef.current, { rotationY: 0, duration: 0.5, ease: "power2.inOut" });
        });
    }, []);
    
    return (
    <div className="flex-1 h-[270px] relative perspective-1000">
        <Card className="p-3 py-5 w-full h-full transition-transform" ref={cardRef}>
            <div className="flex flex-col items-center justify-center gap-3 " ref={frontRef}>
                <AppImage 
                    title={title}
                    alt={title}
                    src={icon}
                    width={80}
                    height={80}
                    className="my-4"
                />
                <Heading4 className="text-center text-md lg:text-base">{title}</Heading4>
            </div>
            <div ref={backRef} className="absolute top-0 left-0 px-5 z-[20] w-full h-full flex flex-col items-center justify-center rotate-y-180">
                <Paragraph className="text-justify text-xs lg:text-md leading-6">{text}</Paragraph>
            </div>
        </Card>

    </div>
)}

// const FocusArea = ({ title, text, icon }: { title: string, text: string, icon: string }) => (
//     <div className="perspective-[1000px] w-full flex-1">
//       <div className="relative w-full h-64 transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
        
//         {/* Front Side */}
//         <div className="absolute inset-0 backface-hidden">
//           <Card className="w-full h-full p-3 py-5 flex flex-col items-center gap-3">
//             <AppImage
//               title={title}
//               alt={title}
//               src={icon}
//               width={80}
//               height={80}
//               className="my-4"
//             />
//             <Heading4 className="text-center text-md lg:text-base">{title}</Heading4>
//           </Card>
//         </div>
  
//         {/* Back Side */}
//         <div className="absolute inset-0 rotate-y-180 backface-hidden bg-black">
//           <Card className="w-full h-full p-6 flex items-center justify-center">
//             <Paragraph className="text-center text-xs lg:text-md leading-6">{text}</Paragraph>
//           </Card>
//         </div>
        
//       </div>
//     </div>
//   );
  
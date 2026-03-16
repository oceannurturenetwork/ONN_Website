'use client';

import { Card } from "@/components/ui/card";
import { AppImage, AppLinkButton, SectionContainer } from "@/components/utils";
import { SectionSubtitle, SectionTitle } from "@/components/utils/section-container";
import { Heading3, Paragraph } from "@/components/utils/typography";
import { motion } from "framer-motion";
import { DonateModalButton } from "../../utils/donate";

const Movement = () => (
  <section className="w-full bg-secondary-color py-8">
    <SectionContainer className="flex flex-col gap-8">
      <SectionTitle
        title="Join the Network"
        className="uppercase text-primary-color text-center"
      />
      <SectionSubtitle
        subtitle="Protecting the Ocean Starts with You"
        className="text-center text-lg lg:text-2xl"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {plates.map((plate, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Plate {...plate} />
          </motion.div>
        ))}
      </div>

      {/* <Testimonials />s */}
      <ImpactMeter />
    </SectionContainer>
  </section>
);

export default Movement;

const Plate = ({
  title,
  icon,
  text,
  href,
  buttonText,
  button
}: {
  title: string;
  icon: string;
  text: string;
  href?: string;
  buttonText?: string;
  button?: React.ReactNode
}) => (
  <Card className="p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.03]">
    <Paragraph className="text-3xl lg:text-5xl">{icon}</Paragraph>
    <Heading3>{title}</Heading3>
    <Paragraph className="text-center line-clamp-3 min-h-[70px]">{text}</Paragraph>
    {
      button ? <>{button}</>: (
        <AppLinkButton href={href} className="rounded-full min-w-[150px]">
          {buttonText}
        </AppLinkButton>

      )
    }
  </Card>
);

const plates = [
  {
    icon: "🌍",
    title: "Become a Member",
    text: "Join a growing network of ocean advocates. Stay informed, attend events, and amplify your voice.",
    href: "/forms/membership",
    buttonText: "Join Now",
  },
  {
    icon: "🤝",
    title: "Volunteer With Us",
    text: "Contribute your time and skills to community clean-ups, education, fieldwork, and more.",
    href: "/forms/volunteer",
    buttonText: "Sign Up to Volunteer",
  },
  {
    icon: "💙",
    title: "Donate to Make Waves",
    text: "Your support powers marine conservation, youth leadership, and blue economy innovation.",
    button: <DonateModalButton className="rounded-full"/>,
  },
];

const Testimonials = () => (
  <div className="mt-10">
    <Heading3 className="text-center mb-4">What Our Community Says</Heading3>
    <div className="flex flex-col lg:flex-row gap-4 justify-center items-center text-center">
      {[
        `"Joining ONN changed the trajectory of my career in marine science." – Aisha, Kenya`,
        `"Volunteering helped me find purpose and friends who care about the planet." – Daniel, Ghana`,
        `"My $50 donation helped train 3 youth leaders in coastal sustainability." – Maria, Spain`,
      ].map((quote, idx) => (
        <Card
          key={idx}
          className="p-4 max-w-md bg-background text-foreground shadow-md"
        >
          <Paragraph className="italic">"{quote}"</Paragraph>
        </Card>
      ))}
    </div>
  </div>
);

const ImpactMeter = () => (
  <div className="mt-10 text-center space-y-4">
    <Heading3>How Your Donation Makes Waves</Heading3>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs lg:text-base">
      <Card className="p-4">
        <Paragraph><span className="font-bold">$3</span> plants 1 mangrove seedling</Paragraph>
      </Card>
      <Card className="p-4">
        <Paragraph><span className="font-bold">$50</span> trains 5 youth leaders</Paragraph>
      </Card>
      <Card className="p-4">
        <Paragraph><span className="font-bold">$100</span> funds a full-day ocean clean-up</Paragraph>
      </Card>
    </div>
  </div>
);





// // movemennt item 

// import { Card } from "@/components/ui/card";
// import { AppImage, AppLinkButton, SectionContainer } from "@/components/utils";
// import { SectionSubtitle, SectionTitle } from "@/components/utils/section-container";
// import { Heading3, Paragraph } from "@/components/utils/typography";
// import { ArrowRight } from "lucide-react";


// const Movement = () => (
//     <section className=" w-full bg-secondary-color py-4">
//         <SectionContainer className="flex flex-col gap-4">
//             <SectionTitle 
//                 title="Join the Network"
//                 className="uppercase text-primary-color text-center"
//             />
//             <SectionSubtitle 
//                 subtitle="Protecting the Ocean Starts with You"
//                 className="text-center text-lg lg:text-2xl"
//             />
            

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
//                 {plates.map((plate, index) => (
//                     <Plate 
//                         key={index}
//                         title={plate.title}
//                         icon={plate.icon}
//                         text={plate.text}
//                         href={plate.href}
//                         buttonText={plate.buttonText}
//                     />
//                 ))}
//             </div>
            
//         </SectionContainer>
//     </section>
// );

// export default Movement; 


 

// const Plate = (
//     {title, icon, text, href, buttonText}: 
//     {
//         title: string; 
//         icon: string; 
//         text: string; 
//         href: string; 
//         buttonText: string;  
//     }
// ) => (
//     <Card className="p-6 flex flex-col items-center gap-4">
//         <Paragraph className="text-5xl lg:text-5xl">{icon}</Paragraph>
//         <Heading3>{title}</Heading3>
//         <Paragraph className="text-center line-clamp-3 min-h-[70px]">{text}</Paragraph>
//         <AppLinkButton href={href} className="rounded-full min-w-[150px]">
//             {buttonText}
//         </AppLinkButton>
//     </Card>
// ); 


// const plates = [
//     {
//         icon: "🌍",
//         title: "Become a Member",
//         text: "Join a growing network of ocean advocates. Stay informed, attend events, and amplify your voice.",
//         href: "/",
//         buttonText: "Join Now"
//     },
//     {
//         icon: "🤝",
//         title: "Volunteer With Us",
//         text: "Contribute your time and skills to community clean-ups, education, fieldwork, and more.",
//         href: "/",
//         buttonText: "Sign Up to Volunteer"
//     },
//     {
//         icon: "💙",
//         title: "Donate to Make Waves",
//         text: "Your support powers marine conservation, youth leadership, and blue economy innovation.",
//         href: "/",
//         buttonText: "Donate Today"
//     },
   
// ]
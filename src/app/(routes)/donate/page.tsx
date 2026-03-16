// donate page
import { Hero } from "@/components/pages/donate";
import { AppImage, AppLinkButton, SectionContainer } from "@/components/utils";
import PageHero from "@/components/utils/page-hero";
import {
  Heading1,
  Heading2,
  Heading3,
  ListItem,
  Paragraph,
} from "@/components/utils/typography";
import { generateStaticMetadata } from "@/lib/metadata";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = generateStaticMetadata("Donate", "");
const Page = () => {
  return (
    <>
      <PageHero page="donate" />

      <SectionContainer className="mt-[100px] flex gap-10 flex-col lg:flex-row lg:items-start">
        <div className="lg:max-w-[60%] flex flex-col lg:gap-4 gap-2">
          <Heading1 className="my-3 text-lg lg:text-2xl uppercase font-semibold leading-12">
            Nurture the Ocean’s Legacy
          </Heading1>
          <div className="h-[300px] lg:h-[400px] w-full flex justify-cennter items-center">
            <AppImage
              alt="donate hero"
              title="donate hero"
              src={
                "https://res.cloudinary.com/dyo0ezwgs/image/upload/v1749223174/onn/WhatsApp_Image_2025-06-06_at_18.07.51_cclfjw.jpg"
              }
              width={150}
              height={100}
              objectFit="cover"
              className="w-full h-full self-center"
            />
          </div>
          <Paragraph className="text-md lg:text-base">
            Your gift supports marine conservation, coastal resilience, and a
            sustainable blue economy.
          </Paragraph>
          <AppLinkButton
            href="/contact"
            className="rounded-full min-w-[150px] gap-2"
          >
            Let's connect
            <ArrowRight size={20} />
          </AppLinkButton>
        </div>

        <Hero />
      </SectionContainer>

      <SectionContainer>
        <Heading2 className="text-center my-12">
          Why Your Donation Matters
        </Heading2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
          <div className="space-y-8">
            {facts.slice(0, 2).map((fact: any, index) => (
              <div key={index} className="space-y-8">
                <Heading3>{fact.title}</Heading3>
                <ul className="space-y-4 list-disc ml-5">
                  {fact.points.map((point: string, i: number) => (
                    <ListItem key={i}>{point}</ListItem>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex-1">
            <AppImage
              alt="donation 1"
              title="donation 1"
              src="https://res.cloudinary.com/dyo0ezwgs/image/upload/v1749221281/onn/2151002014_dgtwbd.jpg"
              width={150}
              height={100}
              objectFit="cover"
              className="w-full h-full self-center"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
          <div className="flex-1">
            <AppImage
              alt="why your donation matters"
              title="why your donation matters"
              src="https://res.cloudinary.com/dyo0ezwgs/image/upload/v1749221281/onn/2151682917_rlavvp.jpg"
              width={150}
              height={100}
              objectFit="cover"
              className="w-full h-full self-center"
            />
          </div>
          <div className="space-y-8">
            {facts.slice(2).map((fact: any, index) => (
              <div key={index} className="space-y-8">
                <Heading3>{fact.title}</Heading3>
                <ul className="space-y-4 list-disc ml-5">
                  {fact.points.map((point: string, i: number) => (
                    <ListItem key={i}>{point}</ListItem>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default Page;

const facts = [
  {
    title: "Ocean Health Is in Decline",
    points: [
      "Over 8 million tons of plastic enter the ocean every year.",
      "More than 1/3 of fish stocks are overfished.",
      "50% of coral reefs have been lost in the past 30 years.",
    ],
  },
  {
    title: "Marine Life Needs Urgent Protection",
    points: [
      "Over 1,000 marine species are endangered or threatened.",
      "Sea turtle populations have declined by more than 90%.",
      "Over 100,000 marine animals die annually due to plastic waste.",
    ],
  },
  {
    title: "Oceans Support Life Everywhere",
    points: [
      "Oceans produce over 50% of the oxygen we breathe.",
      "They absorb around 25% of global carbon emissions.",
      "Over 3 billion people rely on the ocean economy.",
    ],
  },
  {
    title: "Your Donation Helps",
    points: [
      "Fund beach cleanups and plastic removal.",
      "Support marine wildlife rescue and rehabilitation.",
      "Restore coral reefs and other ecosystems.",
    ],
  },
];

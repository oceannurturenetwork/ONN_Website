"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { SectionContainer, AppLinkButton } from "@/components/utils";
import { SectionTitle } from "@/components/utils/section-container";
import { cn } from "@/lib/utils";
import { AppImage } from "@/components/utils";

interface FlipCardProps {
  title: string;
  image: string;
  backText: string;
  buttonText: string;
  buttonHref: string;
}

const FlipCard = ({
  title,
  image,
  backText,
  buttonText,
  buttonHref,
}: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="[perspective:1000px] h-[350px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]",
          flipped ? "[transform:rotateY(180deg)]" : "",
        )}
      >
        {/* Front */}
        <Card className="absolute w-full h-full [backface-visibility:hidden] overflow-hidden p-0">
          <AppImage
            title={title}
            alt={title}
            src={image}
            className="w-full h-full"
            objectFit="cover"
          />
        </Card>

        {/* Back */}
        <Card className="absolute w-full h-full bg-white p-6 flex flex-col justify-center items-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <h3 className="text-lg font-semibold mb-4">{title}</h3>
          <p className="text-sm mb-4 text-muted-foreground">{backText}</p>
          <AppLinkButton href={buttonHref} className="rounded-full">
            {buttonText}
          </AppLinkButton>
        </Card>
      </div>
    </div>
  );
};

const FlipCards = ({ cards, title }: { cards: any; title?: string }) => {
  return (
    <SectionContainer className="flex flex-col gap-4">
      <SectionTitle
        title={
          title ||
          "Building a Resilient Coastline: Protecting Our Oceans and Communities"
        }
        className="text-center my-4"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card: any, index: number) => (
          <FlipCard key={index} {...card} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default FlipCards;

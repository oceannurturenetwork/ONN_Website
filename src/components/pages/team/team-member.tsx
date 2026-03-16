// team-member

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AppImage, AppLink } from "@/components/utils";
import { Heading4, Paragraph } from "@/components/utils/typography";
import { cn } from "@/lib/utils";
import { TeamMemberType } from "@/types";
import { Info, Mail, X } from "lucide-react";
import React from "react";

const TeamMember = ({ person }: { person: TeamMemberType }) => {
  const [opened, setOpened] = React.useState<boolean>(false);

  return (
    <>
      <div
        className={cn(
          "duration-700 bg-black-transparent flex items-center justify-center fixed top-0 left-0 w-[100vw] h-[100vh] z-[230]",
          opened ? "scale-[1]" : "scale-[0]",
        )}
      >
        <Button
          variant="secondary"
          className="absolute top-0 right-0 m-4"
          onClick={() => setOpened(false)}
        >
          <X />
        </Button>
        <Card className="absolute max-w-[50vw] max-h-[70vh] overflow-y-auto  p-6 flex flex-col">
          <Heading4 className="mb-1">Bio of {person.name}</Heading4>
          <Paragraph className="text-sm lg:text-sm text-justify">
            {person.bio}
          </Paragraph>
        </Card>
      </div>

      <Card className="p-0 w-full  h-[450px] relative overflow-hidden">
        <AppImage
          alt={person.name}
          title={person.name}
          src={person.portrait}
          className="h-full w-full object-cover"
          objectFit="cover"
          height={450}
          width={450}
        />
        <div className="absolute bottom-0 left-0 w-full h-full flex justify-center items-end pb-4">
          <div className="bg-black-transparent w-[96%] p-3 rounded-sm flex flex-col lg:flex-row lg:justify-between lg:items-center">
            <div className="text-white">
              <Heading4>{person.name}</Heading4>
              <Paragraph className="text-gray-50">{person.position}</Paragraph>
            </div>
            <div className="flex items-center gap-3">
              {person.email && (
                <AppLink
                  icon={<Mail size={20} />}
                  title={"Mail"}
                  href="/"
                  target="_blank"
                  className="text-white hover:text-primary-color"
                />
              )}
              <Button onClick={() => setOpened(true)} variant="secondary">
                <Info />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default TeamMember;

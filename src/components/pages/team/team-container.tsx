// team container
"use client";

import React from "react";
import { SectionContainer } from "@/components/utils";
// import { SectionSubtitle } from "@/components/utils/section-container";
import TeamMember from "./team-member";
import { Heading1 } from "@/components/utils/typography";
import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";

import useSearch from "@/hooks/useSearchParams";
import useMounted from "@/hooks/useMounted";
import { TeamMemberType } from "@/types";
import { cn } from "@/lib/utils";
import { team } from "@/data";
import { useRouter } from "next/navigation";

// interface TeamContainerProps {
//     title: string;
//     team: TeamMemberType[];
//     id: string;
// };

const TeamContainer = () => {
  const type: any = useSearch()?.get("type") || "leadership";
  const mounted = useMounted();
  const { push } = useRouter();
  const [list, setList] = React.useState<TeamMemberType[]>([]);
  const [title, setTitle] = React.useState<string>("Senior Leadership");

  React.useEffect(() => {
    if (!mounted) {
      setList(team.leadership);
      return;
    }
    let tm: any = team[type] || [];
    let ttle: string =
      type === "leadership"
        ? "Senior Leadership"
        : type === "advisors"
          ? "Board of Advisors"
          : "Board of Directors";
    setList([]);
    setList(tm);
    setTitle(ttle);
  }, [mounted, type]);

  return (
    <SectionContainer>
      <Heading1 className="text-center my-3">Our Dedicated Team</Heading1>
      <div className="px-4 py-2 rounded-lg w-full h-[150px] flex items-center justify-end gap-3 overflow-hidden">
        {[
          { title: "Board of Advisors", href: "/team?type=advisors" },
          { title: "Board of Directors", href: "/team?type=directors" },
          { title: "Senior Leadership", href: "/team?type=leadership" },
        ].map((psn, index) => (
          <Button
            onClick={() => push(psn.href)}
            key={index}
            variant={psn.title === title ? "default" : "outline"}
            className={cn(
              "rounded-full cursor-pointer hover:text-primary-color",
              psn.title === title ? "text-primary-color" : "",
            )}
          >
            {psn.title}
          </Button>
        ))}
      </div>
      {/* <SectionSubtitle subtitle={title} className="text-center my-5"/> */}
      <div className="gap-2 grid grid-cols-1 lg:grid-cols-3">
        {list.map((person, index) => (
          <TeamMember person={person} key={index} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default TeamContainer;

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionContainer } from "@/components/utils";
import { Heading1 } from "@/components/utils/typography";

export const CareerHeader = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "vacancies";

  const handleTabChange = (tab: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set("tab", tab);
    router.push(url.toString());
  };

  return (
    <SectionContainer className="my-4 mt-[8rem]">
      <Heading1 className="mb-6">Join Our Team</Heading1>
      <Tabs defaultValue={activeTab} onValueChange={handleTabChange}>
        <TabsList>
          <TabsTrigger value="vacancies">Vacancies</TabsTrigger>
          <TabsTrigger value="careers">Careers</TabsTrigger>
        </TabsList>
      </Tabs>
    </SectionContainer>
  );
};

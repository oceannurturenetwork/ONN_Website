// nav links
"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import LinkItem from "./link-item";
import {
  involved_links,
  LinkItemType,
  resources_links,
  work_links,
} from "../footer";

const Links = ({ menu }: { menu?: boolean }) => {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "gap-5",
        menu
          ? "flex flex-col"
          : "lg:flex lg:ml-[4rem] lg:flex-1 lg:justify-start hidden items-center",
      )}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      {links.map((link, index) => (
        <LinkItem
          link={link}
          key={index}
          active={pathname}
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
          menu={menu}
        />
      ))}
    </div>
  );
};

export default Links;

const links: LinkItemType[] = [
  {
    text: "About Us",
    title: "About",
    href: "/about",
    // links: about_links
  },
  {
    text: "Our Priorities",
    title: "Work",
    href: "#",
    links: work_links,
  },
  {
    text: "Get Involved",
    title: "Involved",
    href: "#",
    links: involved_links,
  },
  {
    text: "Resources & Updates",
    title: "Resources",
    href: "#",
    links: resources_links,
  },
];

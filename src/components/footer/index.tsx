// footer component

import { Copyright } from "lucide-react";
import Logo from "../nav/logo";
import { Separator } from "../ui/separator";
import { AppLink, SectionContainer } from "../utils";
import { Heading2, Heading3, Paragraph } from "../utils/typography";
import Subscribe from "./subscribe";

const Footer = () => (
  <section className="footerbg-color w-full pt-2">
    <SectionContainer>
      <div className="flex flex-col lg:flex-row justify-between items-start">
        <div>
          <Logo text={false} textClassName="" />
          <Heading2 className="my-2 font-extrabold text-white notranslate">
            OCEAN NURTURE NETWORK
          </Heading2>
          <Paragraph className="text-white text-md lg:text-base notranslate">
            Protecting Oceans, Inspiring Futures
          </Paragraph>
        </div>
        <Subscribe />
      </div>
      <Separator className="my-3" />

      <div className="grid grid-cols-1 lg:grid-cols-4">
        <FooterColumn title="About Us" links={about_links} />
        <FooterColumn title="Our Priorities" links={work_links} />
        <FooterColumn title="Get Involved" links={involved_links} />
        <FooterColumn title="Resources & Updates" links={resources_links} />
      </div>

      <Separator className="my-3" />

      <Paragraph className="flex items-center gap-1 text-white justify-center text-sm lg:text-md font-bold">
        <Copyright size={18} />
        <span>{new Date().getFullYear()}.</span>
        <span>All Rights Reserved.</span>
      </Paragraph>
    </SectionContainer>
  </section>
);

export default Footer;

const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: LinkItemType[];
}) => (
  <div className="py-2">
    <Heading3 className="my-4 text-white">{title}</Heading3>

    <div className="flex flex-col gap-3">
      {links.map((link, index) => (
        <AppLink
          key={index}
          text={link.text}
          title={link.title}
          className="text-white hover:text-primary-color capitalize"
          href={link.href}
        />
      ))}
    </div>
  </div>
);

export type LinkItemType = {
  text: string;
  title: string;
  href: string;
  links?: LinkItemType[];
};

export const about_links: LinkItemType[] = [
  { text: "Our Story", title: "Our Story", href: "/about#our-story" },
  {
    text: "Our Mission, Vision, & Core Values",
    title: "Our Mission",
    href: "/about#mission",
  },
  { text: "Focus Areas", title: "Focus Areas", href: "/about#focus-areas" },
  { text: "Our Team", title: "Our Team", href: "/team" },
];

export const work_links: LinkItemType[] = [
  {
    title: "Climate Resilience",
    text: "Climate Resilience",
    href: "/climate-resilience",
  },
  {
    title: "Coastal Protection",
    text: "Coastal Protection",
    href: "/coastal-protection",
  },
  {
    title: "Blue Economy",
    text: "Blue Economy",
    href: "/blue-economy-development",
  },
  {
    title: "Sustainable fisheries",
    text: "Sustainable fisheries",
    href: "/sustainable-fisheries-management",
  },
];

export const involved_links: LinkItemType[] = [
  // {title: "Internships & Attachments", text: "Internships & Attachments", href: "/involved#internships"},
  { title: "Membership", text: "Membership", href: "/forms/membership" },
  {
    title: "Vacancies & Careers",
    text: "Vacancies & Careers",
    href: "/careers",
  },
  // {title: "Volunteer Opportunities", text: "Volunteer Opportunities", href: "/involved#volunteer"},
  {
    title: "Partnerships & Collaboration",
    text: "Partnerships & Collaboration",
    href: "/partners",
  },
  { title: "Contact us", text: "Contact us", href: "/contact" },
];

export const resources_links: LinkItemType[] = [
  {
    title: "Scientific Research & Reports",
    text: "Scientific Research & Reports",
    href: "/research",
  },
  { title: "Blog & Articles", text: "Blog & Articles", href: "/blogs" },
  { title: "Events & Campaigns", text: "Events & Campaigns", href: "/events" },
  { title: "Merchandise", text: "Merchandise", href: "/merchandise" },
  { title: "Gallery", text: "Gallery", href: "/gallery" },
  { title: "Privacy Policy", text: "Privacy Policy", href: "/privacy-policy" },
  { title: "FAQS", text: "FAQS", href: "/faqs" },
];

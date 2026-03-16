import PageHero from "@/components/utils/page-hero";
import SectionContainer from "@/components/utils/section-container";
import {
  Heading1,
  Heading2,
  ListItem,
  Paragraph,
} from "@/components/utils/typography";
import { AppLinkButton } from "@/components/utils";
import { generateStaticMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = generateStaticMetadata("Partnership", "");
const Page = () => {
  return (
    <>
      <PageHero page="Partners" />
      <SectionContainer>
        <Heading1>Our Partners</Heading1>

        <AppLinkButton
          href="/contact"
          className="rounded-full min-w-[130px] my-5"
        >
          Become a partner
        </AppLinkButton>
      </SectionContainer>
      <SectionContainer className="space-y-4">
        <Separator />
        <Heading2>Our Consultancy Services</Heading2>

        <Paragraph className="my-3">Our Purpose-Driven Approach</Paragraph>

        <Paragraph className="leading-8 text-justify">
          At ONN, all proceeds from our consultancy services directly support
          our core mission: to empower coastal communities, drive marine
          conservation, and build sustainable blue economies. We operate as a
          non-profit organization, and every dollar earned goes toward funding
          our programs, community initiatives, and operational costs ensuring
          that the benefits of our work reach those who need it most.
        </Paragraph>
        <Paragraph className="leading-8 text-justify">
          Your partnership with ONN invests in ocean sustainability and
          community resilience, not profit-making. We are committed to making a
          lasting impact, and every service rendered helps us continue to
          nurture a healthier, more equitable ocean for all.
        </Paragraph>
        <Paragraph>
          ONN offers expert, mission-aligned consultancy in:
        </Paragraph>
        <ul className="list-dic ml-5 flex flex-col gap-3">
          <ListItem>🌍 GIS & Remote Sensing</ListItem>
          <ListItem>🐟 Marine Conservation & Fisheries</ListItem>
          <ListItem>🌱 Blue Economy Strategy & Policy</ListItem>
          <ListItem>🚀 Enterprise Development & Market Systems</ListItem>
          <ListItem>🌊 Aquaculture & Coastal Resource Management</ListItem>
          <ListItem>📚 Capacity Building & Training</ListItem>
          <ListItem>📈 Monitoring, Evaluation & Learning (MEL)</ListItem>
        </ul>
        <Heading2 className="my-5">💙 Why Choose ONN?</Heading2>
        <Paragraph className="leading-8 text-justify">
          ONN is a non-profit organization committed to advancing
          sustainability, equity, and innovation in coastal and marine spaces.
          When you partner with us, you're not just hiring consultants — you're
          investing in real impact.
        </Paragraph>
        <ul className="ml-5 flex flex-col gap-3">
          <ListItem>
            ✅ All proceeds support our community-driven initiatives and NGO
            operations — not profits.
          </ListItem>
          <ListItem>
            ✅ We are youth-led and community-centered, building local capacity
            from the ground up.
          </ListItem>
          <ListItem></ListItem>
          <ListItem>
            ✅ Grounded in science, driven by innovation, and passionate about
            ocean stewardship.
          </ListItem>
          <ListItem>
            ✅ Deep experience across Kenya and the Western Indian Ocean region.
          </ListItem>
          <ListItem>
            ✅ Our work delivers tangible benefits to coastal communities,
            ecosystems, and blue economy actors.
          </ListItem>
        </ul>
      </SectionContainer>
    </>
  );
};

export default Page;

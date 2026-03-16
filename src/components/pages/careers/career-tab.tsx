import { SectionContainer } from "@/components/utils";
import { Heading1, Heading2, Paragraph } from "@/components/utils/typography";
import AppLinkButton from "@/components/utils/app-link-button";
import Link from "next/link";

export const CareerTab = () => (
  <SectionContainer className="flex flex-col gap-3 my-2">
    <Heading2>Internship, Volunteer, & Attachment</Heading2>
    {/* <Heading2 className="my-3">Empowering Young Voices for Ocean Stewardship</Heading2> */}
    <Paragraph className="text-justify my-4">
      ONN is inviting passionate and self-driven early-career professionals to
      join our team as volunteers in the following key roles. These positions
      provide excellent platforms for professional growth, mentorship, and
      impact in the ocean and blue economy space.
      {/* ONN is an equal-opportunity organization. We are committed to diversity, equity, and inclusion in all our work. We strongly encourage early-career professionals, women, and persons with disabilities (PWDs) to apply and grow with us as we nurture a sustainable ocean future */}
    </Paragraph>
    <Paragraph className="leading-8 text-justify">
      The Ocean Nurture Network (ONN) is seeking passionate and dedicated
      individuals to join our team on a voluntary basis to support our mission
      of advancing ocean conservation and sustainable blue economy initiatives.
      This is a unique opportunity to contribute meaningfully while gaining
      experience in marine and coastal stewardship. ONN is an equal opportunity
      organization and strongly encourages applications from women, persons with
      disabilities (PWDs), and individuals from marginalized communities.
      <br />
      Interested applicants should submit their CV, cover letter, academic
      certificates (degree/diploma), or contact{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-primary-color underline underline-offset-4"
        href="mailto:info@oceannurturenetwork.org"
      >
        info@oceannurturenetwork.org
      </a>{" "}
      to seek clarification or inquiries regarding the application by June 6,
      2025. Please note that only shortlisted candidates will be contacted. Come
      be part of a youth-led movement nurturing the ocean that sustains us all.
    </Paragraph>
    <AppLinkButton
      href={`/forms/internship`}
      className="rounded-full my-4 min-w-[130px]"
    >
      Apply
    </AppLinkButton>
  </SectionContainer>
);

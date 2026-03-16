// forms pages
import { SectionContainer } from "@/components/utils";
import PageHero from "@/components/utils/page-hero";
import { Heading1, Paragraph } from "@/components/utils/typography";
import { Separator } from "@/components/ui/separator";
import MemberForm from "@/components/forms/membership";
import InternshipForm from "@/components/forms/internships";
import VolunteerForm from "@/components/forms/volunteer";
import {
  Internships,
  Membership,
  Volunteer,
} from "@/components/pages/involved";
import Link from "next/link";

const Page = async ({ params }: { params: Promise<{ type: string }> }) => {
  const type = (await params).type;

  return (
    <>
      <PageHero page={type} href={`/forms/${type}`} />
      <SectionContainer>
        <Heading1 className="text-center">
          {type === "internship" && "Internship & Attachments"}
          {type === "membership" && "Where Passion Meets Ocean Action"}
          {type === "volunteer" && "Volunteer to help keep our oceans clean"}
        </Heading1>
        <Paragraph className="my-4">
          Please ensure all fields are filled in before submitting the form.
          Incomplete information may delay the processing of your application or
          request. Providing accurate and complete details helps us serve you
          better and ensures smooth communication.
        </Paragraph>
        {type === "volunteer" && (
          <Paragraph className="my-3 leading-8 text-justify">
            The Ocean Nurture Network (ONN) is seeking passionate and dedicated
            individuals to join our team on a voluntary basis to support our
            mission of advancing ocean conservation and sustainable blue economy
            initiatives. This is a unique opportunity to contribute meaningfully
            while gaining experience in marine and coastal stewardship. ONN is
            an equal opportunity organization and strongly encourages
            applications from women, persons with disabilities (PWDs), and
            individuals from marginalized communities. <br />
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
            to seek clarification or inquiries regarding the application by June
            6, 2025. Please note that only shortlisted candidates will be
            contacted. Come be part of a youth-led movement nurturing the ocean
            that sustains us all.
          </Paragraph>
        )}
        <Separator className="" />
        {/* {type === "internship" && <Internships page={true}/>}
                {type === "membership" && <Membership page={true}/>}
                {type === "volunteer" && <Volunteer page={true}/>}
                <Separator className=""/> */}
      </SectionContainer>
      <SectionContainer className="w-full">
        {type === "membership" && <MemberForm />}
        {type === "internship" && <InternshipForm />}
        {type === "volunteer" && <VolunteerForm />}
      </SectionContainer>
    </>
  );
};

export default Page;

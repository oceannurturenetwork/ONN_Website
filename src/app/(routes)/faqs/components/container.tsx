'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useSearchParams } from 'next/navigation';
import { SectionContainer } from '@/components/utils';

const faqData = {
  internships: [
    {
      title: 'Does ONN offer internships and industrial attachments?',
      answer: 'Yes, ONN provides internship and attachment opportunities for students and young professionals interested in marine science, fisheries, blue economy, GIS, remote sensing, and ocean governance.',
    },
    {
      title: 'Who is eligible for ONN internships?',
      answer: 'ONN internships are open to undergraduate and postgraduate students pursuing degrees in marine sciences, fisheries, environmental science, GIS, oceanography, and related fields.',
    },
    {
      title: 'How long do internships and attachments last?',
      answer: 'Internships typically last between 3 to 6 months, while industrial attachments vary based on institutional requirements but generally range from 6 weeks to 3 months.',
    },
    {
      title: 'How can I apply for an internship or attachment at ONN?',
      answer: 'Interested candidates should send a cover letter, CV, and a letter from their institution (for attachments) to our official email. Application calls are announced on our website and social media platforms.',
    },
    {
      title: 'Is the internship/attachment paid?',
      answer: 'ONN internships and attachments are primarily unpaid, but interns may receive stipends or allowances depending on available funding and project involvement.',
    },
    {
      title: 'What kind of projects do interns work on?',
      answer: 'Interns participate in field research, data collection, GIS mapping, report writing, policy analysis, and community engagement initiatives related to ocean conservation and the blue economy.',
    },
    {
      title: 'Are remote internships available?',
      answer: 'Yes, ONN offers remote internships for roles in data analysis, GIS, policy research, and science communication.',
    },
    {
      title: 'Do interns receive a certificate upon completion?',
      answer: 'Yes, all interns receive a certificate of completion and a recommendation letter based on performance.',
    },
  ],
  funding: [
    {
      title: 'Does ONN provide funding for research or community projects?',
      answer: 'ONN does not provide direct funding but works with partners to secure grants and support community-led marine conservation projects.',
    },
    {
      title: 'How can I apply for funding through ONN?',
      answer: 'ONN collaborates with funding organizations and issues calls for proposals when funding opportunities arise. Interested individuals or groups can apply based on the provided guidelines.',
    },
    {
      title: 'Does ONN offer financial support for student research projects?',
      answer: 'ONN supports student research by providing mentorship, networking opportunities, and assistance in securing external funding, but it does not offer direct financial grants.',
    },
    {
      title: 'Can ONN help me find funding for my blue economy startup?',
      answer: 'ONN connects young entrepreneurs with funding opportunities, provides training on grant writing, and supports access to investment networks but does not directly fund startups.',
    },
  ],
  partnerships: [
    {
      title: 'How can my organization partner with ONN?',
      answer: 'Organizations interested in partnering with ONN can reach out via email with a proposal outlining potential collaboration areas. ONN welcomes partnerships in research, advocacy, community outreach, and capacity building.',
    },
    {
      title: 'Does ONN collaborate with universities and research institutions?',
      answer: 'Yes, ONN actively partners with universities, research institutions, and think tanks to support marine science research and blue economy development.',
    },
    {
      title: 'Can ONN support policy advocacy efforts?',
      answer: 'ONN engages in policy advocacy for sustainable ocean governance and collaborates with stakeholders to influence policies related to marine conservation and the blue economy.',
    },
    {
      title: 'Does ONN work with international organizations?',
      answer: 'Yes, ONN collaborates with regional and international organizations to promote global ocean sustainability goals.',
    },
  ],
  research: [
    {
      title: 'What are ONN’s key research focus areas?',
      answer: 'ONN focuses on marine biodiversity conservation, fisheries management, ocean governance, blue carbon ecosystems, and climate change adaptation.',
    },
    {
      title: 'Can ONN assist in conducting marine research?',
      answer: 'ONN supports research by providing field logistics, data collection support, and access to expertise in ocean science.',
    },
    {
      title: 'Does ONN offer training or workshops on marine research?',
      answer: 'Yes, ONN organizes workshops, webinars, and field training sessions on marine science, GIS, remote sensing, and sustainable fisheries management.',
    },
    {
      title: 'Can I collaborate with ONN on a research project?',
      answer: 'ONN welcomes research collaborations from individuals, institutions, and organizations working on ocean and coastal sustainability.',
    },
  ],
  membership: [
    {
      title: 'How can I become a member of ONN?',
      answer: 'Interested individuals can apply for membership through our website or by contacting our team via email. Membership categories include student, professional, and institutional partners.',
    },
    {
      title: 'Are there membership fees?',
      answer: 'ONN membership fees vary depending on the category (e.g., student, professional, institutional). Specific details are provided upon application.',
    },
    {
      title: 'What are the benefits of ONN membership?',
      answer: 'Members gain access to exclusive networking opportunities, training sessions, mentorship, and updates on funding and research opportunities in marine conservation and the blue economy.',
    },
    {
      title: 'Can I volunteer with ONN?',
      answer: 'Yes, ONN welcomes volunteers for field research, community outreach, capacity-building programs, and science communication initiatives.',
    },
    {
      title: 'What are the requirements to volunteer at ONN?',
      answer: 'Volunteers should have a passion for ocean conservation and be willing to commit time to ONN activities. Specific skills in research, communication, GIS, or policy advocacy are an added advantage.',
    },
  ],
  projects: [
    {
      title: 'What are some of ONN’s flagship projects?',
      answer: 'ONN runs projects in marine ecosystem restoration, blue economy capacity-building, sustainable fisheries management, and coastal community resilience programs.',
    },
    {
      title: 'How can I participate in ONN projects?',
      answer: 'Participation depends on the project scope. Calls for participation are shared on our website and social media pages. Interested individuals can also reach out to ONN directly.',
    },
    {
      title: 'Does ONN engage in ocean governance and policy work?',
      answer: 'Yes, ONN is actively involved in policy advocacy, marine spatial planning, and blue economy governance initiatives at national and regional levels.',
    },
    {
      title: 'How does ONN support coastal communities?',
      answer: 'ONN provides training on sustainable livelihoods, supports community-led marine conservation efforts, and connects communities with funding and technical expertise.',
    },
    {
      title: 'Can ONN help implement marine conservation projects in my area?',
      answer: 'ONN is open to collaborations on conservation initiatives. Interested community groups or organizations can submit proposals for potential partnership.',
    },
  ],
};

export const FAQs = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') ?? 'internships';
 

  return (
    <SectionContainer>
      <Tabs defaultValue={tab} className="w-full">
      <TabsList className="flex flex-wrap gap-2">
        {Object.keys(faqData).map((key) => (
          <TabsTrigger key={key} value={key} className="capitalize">
            {key.replace('-', ' ')}
          </TabsTrigger>
        ))}
      </TabsList>

      {Object.entries(faqData).map(([key, questions]) => (
        <TabsContent key={key} value={key}>
          <Accordion type="single" collapsible className="w-full">
            {questions.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="cursor-pointer text-md lg:text-base font-bold">
                  {index + 1}. &nbsp;{item.title}
                </AccordionTrigger>
                <AccordionContent className="ml-3">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>
      ))}
    </Tabs>
    </SectionContainer>
  );
};

type FAQType = {
  title: string;
  answer: React.ReactNode;
}

// const general: FAQType[] = [
//   {
//     title: "What is the process of buying a house in Nairobi?",
//     answer: (
//       <>
//         <Paragraph>The steps include:</Paragraph>
//         <ol className='my-4 ml-7 list-decimal flex flex-col gap-2'>
//           <ListItem>Identify a property and schedule a viewing (Virtual options available)</ListItem>
//           <ListItem>Conduct due diligence on the title and property ownership.</ListItem>
//           <ListItem>Sign a Sale Agreement and pay a deposit (10-20%).</ListItem>
//           <ListItem>Finalize financing (if applicable).</ListItem>
//           <ListItem>Complete the transfer process and make the final payment.</ListItem>
//         </ol>
//         <Paragraph>Our team will guide you every step of the way.</Paragraph>
//       </>
//     )
//   },
//   {
//     title: "What are the costs involved in buying property?",
//     answer: (
//       <>
//         <Paragraph>In addition to the purchase price, expect:</Paragraph>
//         <ul className='my-4 ml-5 list-disc flex flex-col gap-2'>
//           <ListItem>Stamp duty: 2-4% of property value.</ListItem>
//           <ListItem>Legal fees: 1-2% of the property value.</ListItem>
//           <ListItem>Valuation fees: Approximately KES 20,000–50,000.</ListItem>
//           <ListItem>Valuation fees: Approximately KES 20,000–50,000.</ListItem>
//         </ul>
//         <Paragraph>We provide a full breakdown of costs upfront.</Paragraph>
//       </>
//     )
//   },
//   {
//     title: "What is a sectional title, and why is it important?",
//     answer: (<Paragraph>A sectional title allows you to own an individual unit in a shared property, such as an apartment, while jointly owning common areas like parking or gardens. It’s a secure form of ownership and ideal for buyers in gated communities.</Paragraph>)
//   },
//   {
//     title: "What are the best areas to buy property in Nairobi?",
//     answer: (
//       <>
//         <div>
//           <Heading4 className="text-md lg:text-base my-2 font-bold">* For Investment:</Heading4>
//           <Paragraph className='ml-3'>Prime areas like Kilimani, Kileleshwa, Westlands, Lavington, and Upper Hill offer excellent rental yields and are ideal for high-value investments or premium living.</Paragraph>
//         </div>
//         <div>
//           <Heading4 className="text-md lg:text-base my-2 font-bold">* For Affordablee Options:</Heading4>
//           <Paragraph className='ml-3'>Locations such as Mombasa Road, Kiambu Road, Ngong Road, and Thika Road provide budget-friendly entry points into real estate while still delivering strong returns. These areas are perfect for middle-class family living, offering security, space, and convenience.</Paragraph>
//         </div>
//         <div>
//           <Heading4 className="text-md lg:text-base my-2 font-bold">* For Luxurious Living:</Heading4>
//           <Paragraph className='ml-3'>Leafy suburbs like Karen, Runda, Muthaiga, Loresho, Kitisuru, Nyari, and Spring Valley are perfect for wealthy clients seeking high-end townhouses and villas in serene, upscale environments.</Paragraph>
//         </div>
//       </>
//     )
//   },
//   {
//     title: "Can I get financing to buy a home in Kenya?",
//     answer: (
//       <Paragraph>Yes, many banks and mortgage providers in Kenya offer home loans to residents and expatriates. We can connect you to trusted lenders and guide you through the application process.</Paragraph>
//     )
//   },
//   {
//     title: "Can expatriates buy property in Nairobi?",
//     answer: (
//       <Paragraph>Yes, expatriates can buy property in Kenya under leasehold agreements (up to 99 years). We’ll help you navigate the legal and payment processes smoothly.</Paragraph>
//     )
//   },
//   {
//     title: "How long does it take to buy a house in Nairobi?",
//     answer: (
//       <Paragraph>The process typically takes 60-90 days, depending on financing and title transfer timelines.</Paragraph>
//     )
//   }
// ]
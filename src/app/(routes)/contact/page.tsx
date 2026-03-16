// donate page 
import { ContactForm } from "@/components/pages/contact";
import { generateStaticMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = generateStaticMetadata("Contact us", "");
const Page = () => {

    return (
        <>
            <ContactForm />
        </>
    )
}

export default Page; 
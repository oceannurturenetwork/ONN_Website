import { Card } from "@/components/ui/card";
import { AppLinkButton, SectionContainer } from "@/components/utils";
import { Heading2, Paragraph } from "@/components/utils/typography";

const UploadArticles = () => (
    <section 
        className="w-full h-[500px] flex justify-center items-center" 
        style={{
            background: `url(https://res.cloudinary.com/dyo0ezwgs/image/upload/v1743248634/onn/10261_1_v5fygo.jpg)`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover"
        }}
    >
        <SectionContainer className="flex items-center justify-center">
            <Card className="p-5 py-7 flex flex-col items-center gap-4 w-fit">
                <Heading2>Are you passionate about the oceans & would like to write about them?</Heading2>
                <Paragraph>Become a guest writer and get your articles read by hundreds of people</Paragraph>
                <AppLinkButton href="/contact" className="rounded-full min-w-[150px]">
                    Contact us 
                </AppLinkButton>
            </Card>
        </SectionContainer>
    </section>
);

export default UploadArticles; 
import { AppLink, SectionContainer } from "@/components/utils";
import { ChevronRight } from "lucide-react";



const BlogNav = ({title, slug}: {title: string, slug: string}) => (
    <SectionContainer className="mt-[180px] w-full bg-gray-300 flex gap-2 items-center py-4">
        <AppLink 
            href="/"
            text="Home"
            title="Home"
            className="font-bold"
        />
        <ChevronRight size={20}/>
        <AppLink 
            href="/blogs"
            text="Blogs"
            title="Blogs"
            className="font-bold"
        />
        <ChevronRight size={20}/>
        <AppLink 
            href={`/blogs/${slug}`}
            text={title}
            title={title}
            className="text-primary-color font-bold"
        />
    </SectionContainer>
);

export default BlogNav; 
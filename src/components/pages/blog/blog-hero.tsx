// blog hero
import dayjs from "dayjs";

import { AppImage, SectionContainer } from "@/components/utils";
import { Heading1, Paragraph } from "@/components/utils/typography";
import { AuthorType } from "@/types";
import SocialShare from "./social-share";

interface BlogHeroProps {
  categories: string[];
  createdAt: Date;
  slug: string;
  title: string;
  author?: AuthorType;
  banner: string;
}
const BlogHero: React.FC<BlogHeroProps> = ({
  categories,
  createdAt,
  slug,
  title,
  author,
  banner,
}) => {
  return (
    <SectionContainer className="flex flex-col gap-3">
      <Paragraph className="uppercase text-gray-500 text-center">
        {categories[0]} | {dayjs(new Date(createdAt)).format("DD-MM-YYYY")}
      </Paragraph>
      <Heading1 className="text-center lg:max-w-[70%] mx-auto">
        {title}
      </Heading1>
      <Paragraph className="text-center">by {author?.name}</Paragraph>
      <div className="w-full mx-auto flex items-center justify-between">
        <Paragraph>Share article</Paragraph>
        <SocialShare ttle={title} slug={slug} categories={categories} />
      </div>
      <div className="w-full h-[500px] relative overflow-hidden">
        <AppImage
          src={banner}
          title={title}
          alt={title}
          objectFit="cover"
          className="w-full h-full object-cover"
        />
      </div>
    </SectionContainer>
  );
};

export default BlogHero;

// blog item
// "use client"
import dayjs from "dayjs";

import { BlogType } from "@/types";
import { Card } from "../ui/card";
import AppImage from "./app-image";
import { Heading3, Paragraph } from "./typography";
import { ArrowRight, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import AppLink from "./app-link";

interface MinorBlogProps {
  blog: BlogType;
  className?: string;
  dontShowPreview?: boolean;
}

const MinorBlog: React.FC<MinorBlogProps> = ({
  blog,
  className,
  dontShowPreview,
}) => {
  return (
    <Card className={cn("h-[480px] w-full p-0 overflow-hidden", className)}>
      <div className="min-h-[50%] flex-1 w-full relative overflow-hidden">
        <AppImage
          src={blog.banner}
          alt={blog.title}
          title={blog.title}
          className="w-full h-full"
          objectFit="cover"
        />
      </div>
      <div className="px-3 pb-2 flex flex-col gap-2">
        <Heading3
          className={cn(
            "text-md lg:text-lg",
            dontShowPreview ? "line-clamp-1" : "line-clamp-1 lg:line-clamp-2",
          )}
        >
          {blog.title}
        </Heading3>
        {!dontShowPreview && (
          <Paragraph className="text-sm lg:text-md line-clamp-2 lg:line-clamp-2">
            {blog.preview}
          </Paragraph>
        )}
        <Paragraph className="text-xs lg:text-sm text-gray-300">
          Posted: {dayjs(new Date(blog.createdAt)).format("DD-MM-YYYY")}
        </Paragraph>
        <AppLink
          title={"link"}
          text="Read more"
          afterIcon={<ArrowRight />}
          href={`/blogs/${blog.slug}`}
          className="font-bold text-xs lg:text-sm self-end uppercase text-blue-500"
        />
        {/* <AppLinkButton
                    href="/"
                    className="rounded-full gap-3 self-end"
                >
                    <span>Read more</span>
                    <Info size={20}/>
                </AppLinkButton> */}
      </div>
    </Card>
  );
};

export default MinorBlog;

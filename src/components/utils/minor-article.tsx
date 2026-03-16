// article component
import dayjs from 'dayjs';

import { ArticleType } from "@/types";
import { Card } from "../ui/card";
import AppImage from "./app-image";
import { images } from "@/assets";
import { Heading3, Paragraph } from "./typography";


interface ArticleProps {
    article: ArticleType; 
};


const MinorArticle: React.FC<ArticleProps> = ({article}) => {

    return (
        <Card className="min-w-[300px] lg:min-w-[400px] h-[250px] lg:h-[350px] flex flex-col">
            <div className="flex-1 w-full relative overflow-hidden">
                <AppImage 
                    title={article.title}
                    alt={article.title}
                    src={article.banner || images.img_placeholder}
                    className="object-contain"
                    fill
                />
            </div>
            <div className="flex p-4 flex-col gap-1">
                <Paragraph className="text-gray-500 uppercase text-xs lg:text-sm">{article.category}</Paragraph>
                <Heading3 className="line-clamp-1">{article.title}</Heading3>
                <Paragraph className='font-bold'>{article.author}</Paragraph>
                <Paragraph>Posted on: {dayjs(new Date(article.createdAt)).format("DD-MM-YYYY")}</Paragraph>
            </div>
        </Card>
    )
};

export default MinorArticle; 
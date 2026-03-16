// logo 

import { images } from "@/assets";
import { AppImage, AppLink } from "../utils";
import { Paragraph } from "../utils/typography";
import { cn } from "@/lib/utils";

const Logo = ({text, textClassName}: {text: boolean, textClassName: string}) => (
    <AppLink
        href="/"
        title="Home"
        className={cn("flex items-center gap-2 font-bold text-white hover:text-primary-color", textClassName)}
    >
        <AppImage 
            src={images.logo}
            title="logo"
            alt="logo"
            width={50}
            height={50}
        />
        {text && (
            <Paragraph className="flex flex-col font-extrabold text-base lg:text-lg notranslate">
                <span>Ocean Nurture</span>
                <span className="block -mt-1">Network</span>
            </Paragraph>
        )}
    </AppLink>
);

export default Logo; 
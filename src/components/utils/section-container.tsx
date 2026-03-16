// "use client";

import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
// import { motion } from "framer-motion";
import { Heading2, Paragraph } from "./typography";

// import { fadeIn } from "@/utils/motion"; 

const SectionContainer = (
    { children, className, id }: 
    { className?: string, id?: string } & PropsWithChildren
) => (
    <>
        {id && <span id={id} />}
        <section className={cn("w-full max-w-[1350px] mx-auto px-2 my-[3rem]", className)}>
            {children}
        </section>
    </>
);

// motion.section
//             className={cn("w-full max-w-[1350px] mx-auto px-2 my-[3rem]", className)}
//             variants={fadeIn("up", "spring", 0.1, 1.5)}
//             initial={"hidden"}
//             whileInView={"show"}
//             viewport={{once: true, amount: 0.25}}
        

export default SectionContainer;

export const SectionSubtitle = ({ subtitle, className }: { subtitle: string, className?: string }) => (
    <Paragraph className={cn("text-base lg:text-lg font-bold", className)}>{subtitle}</Paragraph>
);

export const SectionTitle = ({ title, className }: { title: string, className?: string }) => (
    <Heading2 className={cn("text-sm lg:text-base font-bold text-secondary-color uppercase", className)}>
        {title}
    </Heading2>
);



// // section containers 
// import { PropsWithChildren } from "react";
// import { cn } from "@/lib/utils";
// import { Heading2, Paragraph } from "./typography";

// const SectionContainer = (
//     {children, className, id}: 
//     {className?: string, id?: string} & PropsWithChildren
// ) => (
//     <>
//         {id && <span id={id}/>}
//         <section className={cn("w-full max-w-[1350px] mx-auto px-2 my-[3rem]", className)}>
//             {children}
//         </section>
//     </>
// );

// export default SectionContainer; 

// export const SectionSubtitle = ({subtitle, className}: {subtitle: string, className?: string}) => (
//     <Paragraph className={cn("text-base lg:text-lg font-bold", className)}>{subtitle}</Paragraph>
// );

// export const SectionTitle = ({title, className}: {title: string, className?: string}) => (
//     <Heading2 className={cn("text-sm lg:text-base font-bold text-secondary-color uppercase", className)}>{title}</Heading2>
// );
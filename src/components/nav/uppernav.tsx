// // upper nav 
 
// import { AppLink } from "../utils";
// import { cn } from "@/lib/utils";
// import { Languages } from "./lang";
// import {QuickLinks} from "./quick-links";
 
// import React from "react";
// import { IoMdMail } from "react-icons/io";
// import { Socials } from "../utils/socials";

// const cls = " hover:text-primary-color"
// const ICON_SIZE=18; 
// const UpperNav = () => (
//     <div className="w-full py-3 flex lg:gap-5 gap-4 justify-end lg:items-center items-end max-w-[1350px]">
         
//         <Socials />
//         <div className="flex flex-col lg:flex-row items-end gap-2">
//             <AppLink
//                 href="/"
//                 icon={<FaPhone size={ICON_SIZE}/>}
//                 text={process.env.NEXT_PUBLIC_PHONE}
//                 title={"Phone"}
//                 className={cn(cls, "text-black text-xs lg:text-sm")}
//             />
//             <AppLink
//                 href="mailto:info@oceannurturenetwork.org"
//                 icon={<IoMdMail size={ICON_SIZE}/>}
//                 text={process.env.NEXT_PUBLIC_EMAIL}
//                 title={"Email"}
//                 className={cn(cls, "text-xs lg:text-sm text-black notranslate")}
//             />

//         </div>
//         <QuickLinks />
//         <Languages />
//     </div>
// );

// export default UpperNav;
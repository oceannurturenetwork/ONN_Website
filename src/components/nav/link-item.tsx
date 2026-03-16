import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { cn } from "@/lib/utils";
import { AppLink } from "../utils";
import { LinkItemType } from "../footer";

const LinkItem = (
  {
    link,
    active,
    
    activeDropdown,
    setActiveDropdown,
    menu
  }: {
    link: LinkItemType;
    active: string;
    
    activeDropdown: string | null;
    setActiveDropdown: (value: string | null) => void;
    menu?: boolean;
  }
) => {
  const isActive = active === link.href;
  const isDropdownOpen = activeDropdown === link.title;

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (menu) {
      setMenuOpen((prev) => !prev);
    } else {
      setActiveDropdown(link.title);
    }
  };

  return (
    <div className="relative">
      <div onClick={toggleMenu} className="cursor-pointer flex items-end gap-1">
        <AppLink
          title={link.title}
          text={link.text}
          href={link.href}
          className={cn(
            "text-sm lg:text-md hover:text-primary-color hover:underline underline-offset-4 duration-700",
            // scrolled ? "text-black" : "text-white",
            isActive ? "text-primary-color underline underline-offset-4" : ""
          )}
          afterIcon={link.links ? (
            menu ? (
              menuOpen ? <TiArrowSortedUp size={16}/> : <TiArrowSortedDown size={16}/>
            ) : <TiArrowSortedDown className="-ml-1 max-md:hidden" size={20} />
          ) : null}
        />
      </div>

      {/* Collapsible menu version */}
      {menu && menuOpen && link.links && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="p-4 space-y-2"
        >
          {link.links.map((itm, index) => (
            <AppLink
              href={itm.href}
              title={itm.title}
              text={itm.text}
              key={index}
              className="my-1 text-sm lg:text-sm capitalize"
            />
          ))}
        </motion.div>
      )}

      {/* Hoverable mega dropdown for desktop */}
      {!menu && link.links && isDropdownOpen && (
        <div
          className={cn(
            "lg:flex flex-col hidden absolute min-w-[350px] bg-white shadow-lg rounded-lg overflow-hidden pointer-events-auto",
            link.title === "About" ? "left-0" : "right-0"
          )}
          onMouseEnter={() => setActiveDropdown(link.title)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="w-full bg-secondary-color h-[20px]" />
            <div className="flex h-full">
              <div className={cn("p-4")}>
                {link.links.map((itm, index) => (
                  <AppLink
                    href={itm.href}
                    title={itm.title}
                    text={itm.text}
                    key={index}
                    className="font-bold my-2 text-md lg:text-base capitalize"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default LinkItem;


// import { useState } from "react";
// import { motion } from "framer-motion";
// import { ChevronDown } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { AppLink } from "../utils";
// import { LinkItemType } from "../footer";

// const LinkItem = (
//     { link, active, scrolled, activeDropdown,
//         setActiveDropdown, menu }: 
//     { 
//         link: LinkItemType; 
//         active: string; 
//         scrolled: boolean;
//         activeDropdown: string | null; 
//         setActiveDropdown: (value: string | null) => void; 
//         menu?: boolean; 
//     }
// ) => {
     
//     const isActive = active === link.href;
//     const isDropdownOpen = activeDropdown === link.title;

//     return (
//         <div 
//             className="relative"
//             onMouseEnter={() => setActiveDropdown(link.title)}
//         >
//             <AppLink 
//                 title={link.title}
//                 text={link.text}
//                 href={link.href}
//                 className={cn(
//                     "text-md lg:text-base font-bold hover:text-primary-color hover:underline underline-offset-4 duration-700",
//                     scrolled ? "text-black" : "text-white",
//                     isActive ? "text-primary-color underline underline-offset-4" : ""
//                 )}
//                 afterIcon={link.links ? <ChevronDown className="-ml-1 max-md:hidden" size={28}/> : <></>}
//             />
//             {
//                 menu && (
//                     <div className={cn("p-4")}>
//                         {link.links?.map((itm, index) => (
//                             <AppLink 
//                                 href={itm.href}
//                                 title={itm.title}
//                                 text={itm.text}
//                                 key={index}
//                                 className="my-1 text-md lg:text-base capitalize"
//                             />
//                         ))}
//                     </div>
//                 )
//             }
//             {link.links && isDropdownOpen && (
//                 <div 
//                     className={cn(
//                         "lg:flex flex-col hidden absolute min-w-[350px] bg-white shadow-lg rounded-lg overflow-hidden pointer-events-auto",
//                         link.title === "About" ? "left-0": "right-0"
//                     )}
//                     onMouseEnter={() => setActiveDropdown(link.title)}
//                     onMouseLeave={() => setActiveDropdown(null)}
//                 >
                      
//                     <motion.div
//                         initial={{ opacity: 0, y: -10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -10 }}
//                         transition={{ duration: 0.3, ease: "easeOut" }}
//                     >
//                         <div className="w-full bg-secondary-color h-[20px]"/>
//                         <div className="flex h-full">
//                             <div className={cn("p-4")}>
//                                 {link.links?.map((itm, index) => (
//                                     <AppLink 
//                                         href={itm.href}
//                                         title={itm.title}
//                                         text={itm.text}
//                                         key={index}
//                                         className="font-bold my-2 text-md lg:text-base capitalize"
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//                     </motion.div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default LinkItem;

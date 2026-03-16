"use client";
import React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import useMounted from "@/hooks/useMounted";
import useSearch from "@/hooks/useSearchParams";
import { useRouter } from "next/navigation";

const languages = [
  { value: "en", label: "English" },
  { value: "fr", label: "French" },
  { value: "de", label: "German" },
  { value: "es", label: "Spanish" },
  { value: "sw", label: "Swahili" },
  { value: "pt", label: "Portuguese" },
  { value: "zh-CN", label: "Chinese" },
  { value: "ar", label: "Arabic" },
  { value: "ja", label: "Japanese" },
  { value: "ko", label: "Korean" },
  { value: "hi", label: "Hindi" },
];

export function Languages() {
  const [open, setOpen] = React.useState(false);
  const lang = useSearch()?.get("lang") || "en";
  const [value, setValue] = React.useState(lang);
  const mounted = useMounted();
  const router = useRouter();

  const initializeGoogleTranslate = () => {
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: value, autoDisplay: false },
        "google_translate_element"
      );
    };
  };

  React.useEffect(() => {
    if (!mounted) return;
    setValue(lang);
    initializeGoogleTranslate();
  }, [mounted]);

  React.useEffect(() => {
    if (!mounted) return;

    router.push(`?lang=${value}`, { scroll: false });

    setTimeout(() => {
      const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
      if (select) {
        select.value = value;
        select.dispatchEvent(new Event("change"));
      }
    }, 1000);
  }, [value]);

  const handleLanguageChange = (lang: string) => {
    setValue(lang);
    setOpen(false);
    setTimeout(() => window.location.reload(), 2000);
  };

  return (
    <>
      <div id="google_translate_element" className="hidden"></div>

      {/* Fixed, centered container */}
      <div className="">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="justify-between cursor-pointer notranslate"
            >
              <span className="lg:flex hidden">
                {languages.find((language) => language.value === value)?.label ??
                  "Lang..."}
              </span>
              <span className="lg:hidden flex uppercase">
                {languages.find((language) => language.value === value)?.value ??
                  "Lang..."}
              </span>
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              {/* <CommandInput placeholder="Search language..." /> */}
              <CommandList>
                <CommandEmpty>No language found.</CommandEmpty>
                <CommandGroup>
                  {languages.map((language) => (
                    <CommandItem
                      key={language.value}
                      value={language.value}
                      onSelect={() => handleLanguageChange(language.value)}
                      className={cn(
                        "cursor-pointer hover:text-primary-color notranslate",
                        value === language.value ? "text-primary-color" : ""
                      )}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === language.value
                            ? "opacity-100 text-primary-color"
                            : "opacity-0"
                        )}
                      />
                      {language.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}

// "use client";
// import React from "react";

// // import * as React from "react";
// import { Check, ChevronsUpDown } from "lucide-react";

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import useMounted from "@/hooks/useMounted";
// import useSearch from "@/hooks/useSearchParams";
// import { useRouter } from "next/navigation";

// const languages = [
//   { value: "en", label: "English" },
//   { value: "fr", label: "French" },
//   { value: "de", label: "German" },
//   { value: "es", label: "Spanish" },
//   { value: "sw", label: "Swahili" },
//   { value: "pt", label: "Portuguese" },
//   { value: "zh-CN", label: "Chinese" },
//   { value: "ar", label: "Arabic" },
//   { value: "ja", label: "Japanese" },
//   { value: "ko", label: "Korean" },
//   { value: "hi", label: "Hindi" },
// ];
// export function Languages() {
//   const [open, setOpen] = React.useState(false);
//   const lang = useSearch()?.get("lang") || "en";
//   const [value, setValue] = React.useState(lang);
//   const mounted = useMounted();
//   const router = useRouter();

//   // Function to initialize Google Translate
//   const initializeGoogleTranslate = () => {
//     if (!document.getElementById("google-translate-script")) {
//       const script = document.createElement("script");
//       script.id = "google-translate-script";
//       script.src =
//         "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//       script.async = true;
//       document.body.appendChild(script);
//     }

//     window.googleTranslateElementInit = () => {
//       new window.google.translate.TranslateElement(
//         { pageLanguage: value, autoDisplay: false },
//         "google_translate_element"
//       );
//     };
//   };

//   // Load Google Translate on mount
//   React.useEffect(() => {
//     if (!mounted) return;
//     setValue(lang);
//     initializeGoogleTranslate();
//   }, [mounted]);

//   // Update the language dynamically
//   React.useEffect(() => {
//     if (!mounted) return;

//     router.push(`?lang=${value}`, { scroll: false });

//     setTimeout(() => {
//       const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
//       if (select) {
//         select.value = value;
//         select.dispatchEvent(new Event("change"));
//       }
//     }, 1000);
//   }, [value]);

//   const handleLanguageChange = (lang: string) => {
//     setValue(lang);
//     setOpen(false);

//     setTimeout(() => window.location.reload(), 2000);
//   };

//   return (
//     <>
//       <div id="google_translate_element" className="hidden"></div>

//       <Popover open={open} onOpenChange={setOpen}>
//         <PopoverTrigger asChild>
//           <Button
//             variant="outline"
//             role="combobox"
//             aria-expanded={open}
//             className="w-fit justify-between cursor-pointer notranslate"
//           >
//             {languages.find((language) => language.value === value)?.label ??
//               "Select language..."}
//             <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//           </Button>
//         </PopoverTrigger>
//         <PopoverContent className="w-fit p-0">
//           <Command>
//             <CommandInput placeholder="Search language..." />
//             <CommandList>
//               <CommandEmpty>No language found.</CommandEmpty>
//               <CommandGroup>
//                 {languages.map((language) => (
//                   <CommandItem
//                     key={language.value}
//                     value={language.value}
//                     onSelect={() => handleLanguageChange(language.value)}
//                     className={cn(
//                       "cursor-pointer hover:text-primary-color notranslate",
//                       value === language.value ? "text-primary-color" : ""
//                     )}
//                   >
//                     <Check
//                       className={cn(
//                         "mr-2 h-4 w-4",
//                         value === language.value
//                           ? "opacity-100 text-primary-color"
//                           : "opacity-0"
//                       )}
//                     />
//                     {language.label}
//                   </CommandItem>
//                 ))}
//               </CommandGroup>
//             </CommandList>
//           </Command>
//         </PopoverContent>
//       </Popover>
//     </>
//   );
// }
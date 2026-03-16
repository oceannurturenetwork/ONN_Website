// quick life
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

const links = [
    {value: "", label: "Quick links"},
    // {value: "/donate", label: "Donate"},
    {value: "/merchandise", label: "Merchandise"},
    {value: "/research", label: "Scientific Reports"},
    {value: "/blogs", label: "Blogs & Article"},
    {value: "/contact", label: "Contact us"},
    {value: "/partners", label: "Become a Partner"},
    {value: "/faqs", label: "FAQs"},

]
export const QuickLinks = () => {
    const [open, setOpen] = React.useState(false);
    
    const [value, setValue] = React.useState<string>(links[0].value);
    const mounted = useMounted();
    const { push } = useRouter(); 

    const handleLanguageChange = (lang: string) => {
        // setValue(lang);
        push(lang); 
        // setValue
        setOpen(false);
    
        // setTimeout(() => window.location.reload(), 2000);
      };

    return (
     <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="lg:flex hidden rounded-full w-fit justify-between cursor-pointer notranslate"
          >
            {links.find((link) => link.value === value)?.label ??
              "Select link..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-fit p-0">
          <Command>
            <CommandInput placeholder="Search link..." />
            <CommandList>
              <CommandEmpty>No link found.</CommandEmpty>
              <CommandGroup>
                {links.map((link) => (
                  <CommandItem
                    key={link.value}
                    value={link.value}
                    onSelect={() => handleLanguageChange(link.value)}
                    className={cn(
                      "cursor-pointer hover:text-primary-color notranslate",
                      value === link.value ? "text-primary-color" : ""
                    )}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === link.value
                          ? "opacity-100 text-primary-color"
                          : "opacity-0"
                      )}
                    />
                    {link.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    )
};

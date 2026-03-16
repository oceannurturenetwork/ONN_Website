// search field 
"use client";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/utils";
import AppInput from "@/components/utils/app-input";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import React from "react";
 

const Search = ({placeholder, className}: {placeholder?: string, className?: string}) => {
    const [search, setSearch] = React.useState<string>(""); 
    return (
        <SectionContainer className={cn("flex justify-end", className)}>
            <AppInput 
                value={search}
                setValue={setSearch}
                placeholder={placeholder || "Search blog or article"}
                containerClassName="min-w-[300px]"
                button={<Button variant={"ghost"} size="icon"><SearchIcon /></Button>}
            />
        </SectionContainer>
    )
};

export default Search; 
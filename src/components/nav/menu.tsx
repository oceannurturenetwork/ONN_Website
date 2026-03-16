"use client";

import React, { useEffect, useState } from "react";
import { Menu as MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
 
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Links from "./links";
import { ScrollArea } from "../ui/scroll-area";

const Menu = ({  }: { }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close sheet on pathname change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="lg:hidden block">
        <span
          className={cn(
            "block border-[2px] p-1 border-gray-500 cursor-pointer ml-1 duration-700",
            "text-black",
            "hover:text-primary-color"
          )}
        >
          <MenuIcon size={25} />
        </span>
      </SheetTrigger>
      <SheetContent className="pt-[2rem] px-5">
        <SheetHeader />
        <ScrollArea className="h-[90vh]">
          <Links menu={true} />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default Menu;

"use client";
import { useState, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";

import AppImage from "./app-image";
import { cn } from "@/lib/utils";
import AppLinkButton from "./app-link-button";
import { useRouter } from "next/navigation";
import { Card } from "../ui/card";
import { Heading2, Paragraph } from "./typography";

export const RaiseModal = () => {
  const [opened, setOpened] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    let tm = setTimeout(() => {
      setOpened(true);
    }, 1000);
    return () => clearTimeout(tm);
  }, []);

  return (
    <div
      className={cn(
        "z-[400] flex flex-col items-center justify-center fixed top-0 left-0 w-full h-full bg-black-transparent duration-700",
        opened ? "scale-100" : "scale-0",
      )}
    >
      <Card className="w-full max-w-md relative py-0">
        <span
          onClick={() => setOpened(false)}
          className="absolute top-0 right-0 flex flex-col items-center justify-center text-black border bg-card w-8 h-8 rounded-full self-end m-3 cursor-pointer hover:text-destructive z-[100]"
        >
          <X />
        </span>
        <div>
          <div className="w-full">
            <AppImage
              src="https://res.cloudinary.com/dyo0ezwgs/image/upload/v1749223100/onn/WhatsApp_Image_2025-06-06_at_17.58.21_1_obmzuu.jpg"
              alt="Ocean Image"
              title="Ocean Image"
              className="w-full h-[200px] object-cover"
              objectFit="cover"
            />
          </div>
          <div className="px-3 mt-3">
            <Heading2 className="capitalize">
              Support a Sustainable Blue Future
            </Heading2>
            <Paragraph className="text-center">
              Protect coasts. Power innovation. Train ocean leaders. Your gift
              drives lasting impact!
            </Paragraph>
          </div>
        </div>
        <AppLinkButton
          onClick={() => {
            setOpened(false);
            push("/donate");
          }}
          className="self-center mb-5 min-w-[100px] gap-4 rounded-full text-base lg:text-lg"
        >
          Donate
          <ArrowRight />
        </AppLinkButton>
      </Card>
      {/* <div className="flex justify-center items-center ">
        <AppImage
          src="https://res.cloudinary.com/dtdlhuu3x/image/upload/v1748997071/WhatsApp_Image_2025-05-15_at_00.57.52_ynbsxm.jpg"
          alt="Raise"
          title="Raise"
          className="w-[90vw] h-[70vh] object-contain"
          objectFit="contain"
        />
      </div> */}
    </div>
  );
};

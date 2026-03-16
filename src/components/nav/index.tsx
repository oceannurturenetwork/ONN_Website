"use client";

import React from "react";
import LowerNav from "./lowernav";
import { cn } from "@/lib/utils";

import useGoogleTranslate from "@/hooks/useGoogleTranslate";

const Nav = () => {
  useGoogleTranslate();

  return (
    <section
      className={cn(
        "px-4 fixed top-0 w-full z-[60] duration-700 flex flex-col items-center bg-white shadow-sm",
      )}
      id="nav-container"
    >
      <LowerNav />
    </section>
  );
};

export default Nav;

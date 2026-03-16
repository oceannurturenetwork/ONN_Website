// lower nav
"use client";
import { DonateModalButton } from "../utils/donate";
import Links from "./links";
import Logo from "./logo";
import Menu from "./menu";

import { Languages } from "./lang";
import { QuickLinks } from "./quick-links";

const LowerNav = () => (
  <div className="py-3 flex w-full justify-between items-center max-w-[1350px]">
    <Logo text={false} textClassName={"text-black"} />
    <Links />
    <div className="flex-1 flex justify-end items-center mr-2 gap-2">
      {/* <Socials className="flex lg:hidden"/> */}
      <QuickLinks />
      <div className="flex gap-2 items-center">
        <Languages />
      </div>
      <DonateModalButton />
    </div>
    <Menu />
  </div>
);

export default LowerNav;

// donation inputs 

"use client";
import { Button } from "@/components/ui/button";
import { AppLink, AppLinkButton } from "@/components/utils";
import AppInput from "@/components/utils/app-input";
import { Heading4 } from "@/components/utils/typography";
import { ArrowRight } from "lucide-react";
import React from "react";

const DonateInputs = () => {
    const [amount, setAmount] = React.useState<number>(0); 
     
    return (
        <>
            <Heading4 className="my-4 text-white">Select or enter an amount.</Heading4>
            <div className="flex gap-2 flex-wrap text-white">
                <OptionLink amount={100}/>
                <OptionLink amount={500}/>
                <OptionLink amount={1000}/>
                <OptionLink amount={2000}/>
                
                <AppInput 
                    value={amount}
                    setValue={setAmount}
                    button={
                        amount ? (
                            <AppLinkButton 
                                className="cursor-pointer hover:bg-primary-color " 
                                // type={"ghost"} 
                                size="icon"
                                href={process.env.NEXT_PUBLIC_PAYMENT_LINK || ""}
                                target="_blank"
                            >
                                <ArrowRight />
                            </AppLinkButton>
                        ): <></>
                    }
                    placeholder="Preferred amount"
                    containerClassName="rounded-sm border-gray-500 max-w-[180px]"
                />
            </div>
        </>
    )
};

export default DonateInputs; 

const OptionLink = ({amount}: {amount: number}) => (
    <AppLink 
        href={process.env.NEXT_PUBLIC_PAYMENT_LINK || ""} 
        target="_blank" 
        title={String(amount)}
        className="text-md lg:text-base font-bold border-[.03rem] rounded-sm hover:border-primary-color border-gray-500 duration-700 py-1 px-2"
    >
        ${amount}
    </AppLink>
)
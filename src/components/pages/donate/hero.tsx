"use client";

import { useState } from "react";
// import { ArrowRight } from "lucide-react";
// import { AppImage, AppLinkButton, SectionContainer } from "@/components/utils";
import { Paragraph, Heading2 } from "@/components/utils/typography";

// import { images } from "@/assets";
import { DonateButton } from "./paypal";
import DonationForm from "@/components/utils/donate-paystack";
import { Button } from "@/components/ui/button"; // import shadcn button

const Hero = () => {
  const [selectedProvider, setSelectedProvider] = useState<
    "paypal" | "paystack"
  >("paypal");

  return (
    <div className="flex flex-col w-full max-w-xl gap-6">
      <div>
        <Heading2 className="text-2xl font-semibold mb-1">
          Choose a payment method
        </Heading2>
        <Paragraph className="text-base text-muted-foreground">
          Select your preferred donation platform to proceed
        </Paragraph>
      </div>

      <div className="w-full flex gap-3">
        <Button
          variant={selectedProvider === "paypal" ? "default" : "outline"}
          onClick={() => setSelectedProvider("paypal")}
        >
          PayPal
        </Button>
        <Button
          variant={selectedProvider === "paystack" ? "default" : "outline"}
          onClick={() => setSelectedProvider("paystack")}
        >
          Paystack
        </Button>
      </div>

      <div className="w-full mt-4">
        {selectedProvider === "paypal" ? <DonateButton /> : <DonationForm />}
      </div>
    </div>
  );
};

export default Hero;

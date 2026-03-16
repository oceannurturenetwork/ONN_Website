"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { AppImage, AppLinkButton, SectionContainer } from "@/components/utils";
import { Heading1, Paragraph, Heading2 } from "@/components/utils/typography";

import { images } from "@/assets";
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

// // donation hero section
// "use client";

// import { ArrowRight } from "lucide-react";
// import { AppImage, AppLinkButton, SectionContainer } from "@/components/utils";
// import { Heading1, Paragraph } from "@/components/utils/typography";

// import { images } from "@/assets";
// import { DonateButton } from "./paypal";
// import DonationForm from "./donate";

// const Hero = () => {
//   return (
//     <SectionContainer className="mt-[200px] flex gap-5 flex-col lg:flex-row lg:items-center">
//       <div className="flex flex-col lg:gap-4 gap-2">
//         <AppImage
//           alt="donate hero"
//           title="donate hero"
//           src={images.waves}
//           width={150}
//           height={100}
//           objectFit="contain"
//         />
//         <Heading1 className="my-3 text-3xl lg:text-5xl font-extrabold leading-12 max-w-[80%]">
//           Support Ocean Conservation: Make a Difference Today
//         </Heading1>
//         <Paragraph className="max-w-[70%] text-lg lg:text-xl">
//           Your contribution helps protect marine life, restore coral reefs, and
//           ensure sustainable coastal communities
//         </Paragraph>
//         <AppLinkButton
//           href="/contact"
//           className="rounded-full min-w-[150px] gap-2"
//         >
//           Let's connect
//           <ArrowRight size={20} />
//         </AppLinkButton>
//       </div>
//       {/* <Donate /> */}
//       {/* <DonateButton /> */}
//       <DonationForm />
//     </SectionContainer>
//   );
// };

// export default Hero;

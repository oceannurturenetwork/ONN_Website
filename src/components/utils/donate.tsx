"use client";

import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import AppImage from "@/components/utils/app-image";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import AppLinkButton from "./app-link-button";
import { cn } from "@/lib/utils";
import { Heading3, Paragraph } from "@/components/utils/typography";
import { ChevronLeft } from "lucide-react";
import DonationForm from "./donate-paystack"; // your Paystack form component
// import { DonateButton } from "./paypal"; // your PayPal button component

const currencies = [
  { code: "USD", symbol: "$" },
  { code: "EUR", symbol: "€" },
  { code: "GBP", symbol: "£" },
];
export function DonateModalButton({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<
    "paypal" | "paystack"
  >("paypal");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <AppLinkButton
          className={cn(
            "text-white bg-primary-color font-bold rounded-none min-w-[150px]",
            className,
          )}
        >
          Donate
        </AppLinkButton>
      </DialogTrigger>

      <DialogContent className="flex justify-center lg:ml-[4rem] shadow-none p-0 border-none bg-transparent lg:min-w-[60vw] max-w-[70vw] mx-auto">
        <div className="flex gap-2 items-start w-fit">
          {/* Left side: Image + description */}
          <Card className="hidden lg:flex h-[500px] w-[400px] pt-0 px-0 overflow-hidden">
            <div className="w-full h-[250px] relative overflow-hidden">
              <AppImage
                src="https://res.cloudinary.com/dl0cuzahq/image/upload/q_auto/f_auto/v1775344095/city-park-with-lake_nhwwlv.webp"
                alt="donation"
                title="donation"
                objectFit="cover"
              />
            </div>
            <div className="p-5">
              <Heading3 className="my-3">Fuel Ocean Hope</Heading3>
              <Paragraph className="text-xs lg:text-sm text-justify">
                Your donation helps protect our oceans, restore coral reefs,
                support coastal communities, and secure a sustainable future for
                marine life. Every contribution strengthens our mission to
                nurture and heal the ocean—one wave at a time.
              </Paragraph>
            </div>
          </Card>

          {/* Right side: Payment tab + content */}
          <div className="flex flex-col gap-4 bg-white rounded-xl shadow-md p-6 w-full max-w-lg">
            <div className="flex gap-3">
              <Button
                variant={selectedProvider === "paypal" ? "default" : "outline"}
                onClick={() => setSelectedProvider("paypal")}
              >
                PayPal
              </Button>
              <Button
                variant={
                  selectedProvider === "paystack" ? "default" : "outline"
                }
                onClick={() => setSelectedProvider("paystack")}
              >
                Paystack
              </Button>
            </div>

            <div className="mt-2">
              {selectedProvider === "paypal" ? (
                <PayPal modal />
              ) : (
                <DonationForm modal={true} />
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export const PayPal = ({ modal }: { modal?: boolean }) => {
  const [amount, setAmount] = useState("10");
  const [currency, setCurrency] = useState("USD");
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("one-time");
  const [showPayPal, setShowPayPal] = useState(false);
  const [proceed, setProceed] = useState<boolean>(false);

  const donationAmount = customAmount || amount;

  const paypalOptions = {
    "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
    currency: currency,
    intent: "capture",
  };
  return (
    <Card
      className={cn(
        "px-5 ",
        modal
          ? "shadow-none border-none max-md:w-[80vw] max-h-[70vh] overflow-auto"
          : "w-full max-w-md",
      )}
    >
      <CardHeader className="px-0">
        <CardTitle>Support Our Cause</CardTitle>
        <CardDescription>
          Your donation helps us continue our important work.
        </CardDescription>
      </CardHeader>
      {proceed ? (
        <CardContent className="space-y-4 px-0">
          <Button
            onClick={() => setProceed(false)}
            variant="ghost"
            className="flex gap-2 items-center"
          >
            <ChevronLeft />
            <span>Back</span>
          </Button>
        </CardContent>
      ) : (
        <CardContent className="space-y-4 px-0">
          <div className="space-y-2">
            <Label htmlFor="donation-type">Donation Type</Label>
            <RadioGroup
              id="donation-type"
              defaultValue="one-time"
              className="flex space-x-4"
              onValueChange={(value) => setDonationType(value)}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="one-time" id="one-time" />
                <Label htmlFor="one-time">One-time</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="monthly" id="monthly" />
                <Label htmlFor="monthly">Monthly</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="currency">Currency</Label>

            <Tabs
              value={currency}
              onValueChange={setCurrency}
              className="w-full"
            >
              <TabsList className="flex gap-2 bg-muted p-1 rounded-lg">
                {currencies.map((c) => (
                  <TabsTrigger
                    key={c.code}
                    value={c.code}
                    className="px-4 py-2 text-sm rounded-md data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    {c.code} ({c.symbol})
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
            {/* <Select
              value={currency}
              onValueChange={(value) => setCurrency(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent className="relative z-[200]">
                <SelectItem value="USD">USD ($)</SelectItem>
                <SelectItem value="EUR">EUR (€)</SelectItem>
                <SelectItem value="GBP">GBP (£)</SelectItem>
              </SelectContent>
            </Select> */}
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Donation Amount</Label>
            <div className="grid grid-cols-3 gap-2">
              {["5", "10", "20", "50", "100"].map((value) => (
                <Button
                  key={value}
                  variant={amount === value ? "default" : "outline"}
                  onClick={() => {
                    setAmount(value);
                    setCustomAmount("");
                  }}
                >
                  {value} {currency}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="custom-amount">Or enter custom amount</Label>
            <Input
              id="custom-amount"
              type="number"
              placeholder="Enter amount"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setAmount("");
              }}
            />
          </div>
        </CardContent>
      )}

      <CardFooter className="px-0">
        {!showPayPal ? (
          <Button
            className="w-full"
            onClick={() => setShowPayPal(true)}
            disabled={!donationAmount}
          >
            Donate {donationAmount} {currency}
          </Button>
        ) : (
          <div className="w-full">
            <PayPalScriptProvider options={paypalOptions}>
              <PayPalButtons
                style={{ layout: "vertical" }}
                createOrder={(data, actions) => {
                  setProceed(true);
                  return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                      {
                        amount: {
                          value: donationAmount,
                          currency_code: currency,
                        },
                      },
                    ],
                    application_context: {
                      shipping_preference: "NO_SHIPPING",
                    },
                  });
                }}
                onApprove={(data, actions) => {
                  setProceed(false);
                  return actions.order!.capture().then((details) => {
                    alert(
                      `Thank you for your donation of ${donationAmount} ${currency}!`,
                    );
                  });
                }}
                onError={(err) => {
                  console.error("PayPal error:", err);
                  setProceed(false);
                  alert("There was an error processing your donation.");
                }}
              />
            </PayPalScriptProvider>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

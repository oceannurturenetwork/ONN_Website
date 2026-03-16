"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import PaystackPop from "@paystack/inline-js";
import { usePathname, useRouter } from "next/navigation";
import useMounted from "@/hooks/useMounted";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const currencies = [
  { code: "USD", symbol: "$" },
  { code: "EUR", symbol: "€" },
  { code: "KES", symbol: "KSh" },
];

export default function DonationForm({ modal }: { modal?: boolean }) {
  const [currency, setCurrency] = useState<string>("USD");
  const amountOptions: Record<string, number[]> = {
    USD: [110, 125, 150, 200, 300],
    EUR: [110, 125, 150, 200, 300],
    KES: [1000, 2500, 5000, 10000, 20000],
  };
  const [amount, setAmount] = useState<number>(amountOptions[currency][0]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const pathname = usePathname();
  const { push } = useRouter();
  const mounted = useMounted();

  const handleDonate = async () => {
    if (!name || !email || !currency || !amount) {
      toast("All fields are required!");
      return;
    }

    if (typeof window === "undefined") {
      toast("Donation is only available in the browser.");
      return;
    }

    setLoading(true);

    try {
      const { default: PaystackPop } = await import("@paystack/inline-js");
      const popup = new PaystackPop();

      popup.newTransaction({
        key: process.env.NEXT_PUBLIC_PB_KEY || "",
        email: email,
        amount: amount * 100,
        currency: currency,
        onSuccess: (transaction) => {
          push(`${pathname}?status=success&reference=${transaction.reference}`);
          toast("Thank you for your donation.");
        },
        onCancel: () => {
          push(`${pathname}?status=cancelled`);
          toast("Donation was cancelled.");
        },
      });
    } catch (error) {
      console.error("Paystack error:", error);
      toast("An error occurred while initializing payment.");
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return null;

  return (
    <Card
      className={cn(
        "w-full max-w-md shadow-lg p-6 border border-gray-200",
        modal ? "shadow-none border-none" : "",
      )}
    >
      <CardHeader className="px-0">
        <CardTitle>Support Our Cause</CardTitle>
        <CardDescription>
          Your donation helps us continue our important work.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 px-0">
        <div className="mb-4">
          <Label htmlFor="name" className="mb-2 block text-sm font-medium">
            Full Name
          </Label>
          <Input
            disabled={loading}
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </Label>
          <Input
            disabled={loading}
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <Label className="mb-2 block text-sm font-medium">Select Amount</Label>
        <ToggleGroup
          type="single"
          className="grid grid-cols-4 gap-2"
          value={String(amount)}
          onValueChange={(val) => {
            if (val) setAmount(Number(val));
          }}
        >
          {amountOptions[currency].map((val) => (
            <ToggleGroupItem key={val} value={String(val)}>
              {`${currency} ${val}`}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>

        <div className="mt-4">
          <Label
            htmlFor="custom-amount"
            className="mb-2 block text-sm font-medium"
          >
            Custom Amount
          </Label>
          <Input
            id="custom-amount"
            type="number"
            placeholder={`${currency} Enter amount`}
            value={amount}
            disabled={loading}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>

        <div className="mt-4">
          <Label className="mb-2 block text-sm font-medium">
            Select Currency
          </Label>
          <Tabs
            value={currency}
            onValueChange={(val) => {
              setCurrency(val);
              setAmount(amountOptions[val][0]);
            }}
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
            onValueChange={(val) => {
              setCurrency(val);
              setAmount(amountOptions[val][0]);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="USD">USD ($)</SelectItem>
              <SelectItem value="EUR">EUR (€)</SelectItem>
              <SelectItem value="KES">KES (KSh)</SelectItem>
            </SelectContent>
          </Select> */}
        </div>

        <Button
          disabled={loading}
          onClick={handleDonate}
          className="w-full mt-6 py-3"
        >
          Donate Now
        </Button>
      </CardContent>
    </Card>
  );
}

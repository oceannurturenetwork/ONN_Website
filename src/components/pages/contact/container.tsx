"use client";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionContainer } from "@/components/utils";
import AppImage from "@/components/utils/app-image";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heading2, Paragraph } from "@/components/utils/typography";

const purposes = [
  "Partnership",
  "Grants",
  "Projects",
  "Donations",
  "Consulting",
  "General Inquiry",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    purpose: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "", purpose: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <SectionContainer className="mt-[120px] flex flex-col items-center justify-center px-4 py-12">
      <Card className="w-full flex flex-col md:flex-row overflow-hidden shadow-lg p-0">
        {/* Left side - Image */}
        <div className="w-[50%] hidden lg:block h-[630px] relative overflow-hidden">
          <AppImage
            src="https://res.cloudinary.com/dyo0ezwgs/image/upload/v1744842212/onn/WhatsApp_Image_2025-04-17_at_00.11.15_1_h1masg.jpg"
            alt="Contact"
            title="Contact"
            objectFit="cover"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side - Form */}
        <div className="md:w-1/2 p-6">
          <CardContent>
            <Heading2 className="text-2xl font-semibold mb-4">
              Contact Us
            </Heading2>
            <Paragraph className="my-5">
              Let's talk about collaboration or anything to do with the ocean.
            </Paragraph>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                disabled={status === "sending"}
              />
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                disabled={status === "sending"}
              />

              {/* Purpose - Radio buttons */}
              <fieldset className="space-y-2">
                <legend className="text-sm font-medium">Purpose</legend>
                <div className="grid grid-cols-2 gap-3">
                  {purposes.map((option) => (
                    <label
                      key={option}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <input
                        type="radio"
                        name="purpose"
                        value={option}
                        checked={form.purpose === option}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            purpose: e.target.value,
                          }))
                        }
                        disabled={status === "sending"}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <Textarea
                name="message"
                placeholder="Your Message"
                className="min-h-[160px]"
                rows={15}
                value={form.message}
                onChange={handleChange}
                required
                disabled={status === "sending"}
              />
              <Button
                type="submit"
                className="w-full"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </Button>
              {status === "success" && (
                <Paragraph className="text-green-600">
                  Message sent successfully!
                </Paragraph>
              )}
              {status === "error" && (
                <Paragraph className="text-red-600">
                  Something went wrong. Please try again.
                </Paragraph>
              )}
            </form>
          </CardContent>
        </div>
      </Card>
    </SectionContainer>
  );
}

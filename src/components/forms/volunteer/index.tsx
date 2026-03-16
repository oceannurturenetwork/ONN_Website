"use client";

import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { createToast } from "@/utils/toast";
import { FileText, X } from "lucide-react";
import { Heading2, Paragraph } from "@/components/utils/typography";

const volunteerFormSchema = z.object({
  fullName: z.string().min(1, { message: "Full Name is required" }),
  email: z.string().email({ message: "Provide a valid email" }),
  phone: z.string().min(8, { message: "Phone number is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  positionApplied: z.string().min(1, { message: "Position is required" }),
  skills: z.string().min(1, { message: "Skills are required" }),
  availableFrom: z.string().optional(),
  availableTo: z.string().optional(),
  motivation: z.string().min(10, { message: "Motivation is required" }),
});

type VolunteerFormValues = z.infer<typeof volunteerFormSchema>;

const VolunteerForm = () => {
  const [loading, setLoading] = useState(false);
  const [documents, setDocuments] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<VolunteerFormValues>({
    resolver: zodResolver(volunteerFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      country: "",
      positionApplied: "",
      skills: "",
      availableFrom: "",
      availableTo: "",
      motivation: "",
    },
  });

  const onSubmit = async (data: VolunteerFormValues) => {
    setLoading(true);
    const formData = new FormData();

    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("country", data.country);
    formData.append("positionApplied", data.positionApplied);
    formData.append("skills", data.skills);
    formData.append("availableFrom", data.availableFrom || "");
    formData.append("availableTo", data.availableTo || "");
    formData.append("motivation", data.motivation);

    documents.forEach((doc) => {
      formData.append("documents", doc);
    });

    try {
      const response = await fetch("/api/volunteer", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        createToast("Success", "Volunteer application submitted!", "success");
        reset();
        setDocuments([]);
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      createToast("Error", "Submission failed. Try again.", "danger");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setDocuments((prev) => [...prev, ...Array.from(e.target.files)]);
    }
  };

  const FilesUpload = () => (
    <Card className="my-4">
      <div className="p-4 space-y-2">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4" />
          <h3 className="text-sm font-semibold">Upload Supporting Documents</h3>
        </div>
        <ul className="list-disc list-inside text-xs text-muted-foreground">
          <li>Resume / CV</li>
          <li>Certificates (optional)</li>
        </ul>
        <Input
          type="file"
          multiple
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx"
          disabled={loading}
          className="text-sm"
        />
        {documents.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium">Selected Files:</p>
            <ul className="space-y-1">
              {documents.map((doc, idx) => (
                <li key={idx} className="flex justify-between bg-muted px-3 py-2 rounded-md text-sm">
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4" /> {doc.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => setDocuments((prev) => prev.filter((_, i) => i !== idx))}
                  >
                    <X className="w-4 h-4 text-destructive" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Card>
  );

  return (
    <Card className="p-6 lg:p-8 space-y-6 bg-secondary-color">
      <div>
        <Heading2 className="text-center my-0 mt-2 text-base lg:text-2xl">
          Volunteer Application Form
        </Heading2>
        <Paragraph className="text-center font-semibold text-red-500 text-xs lg:text-sm mb-2">
          Fields marked with * are mandatory
        </Paragraph>
      </div>
      <Separator />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Full Name, Email */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Full Name *</Label>
            <Input {...register("fullName")} placeholder="Your full name" disabled={loading} />
            {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}
          </div>

          <div className="space-y-2">
            <Label>Email *</Label>
            <Input {...register("email")} placeholder="Email address" disabled={loading} />
            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          </div>
        </div>

        {/* Phone, Country */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Phone *</Label>
            <Input {...register("phone")} placeholder="Phone number" disabled={loading} />
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
          </div>

          <div className="space-y-2">
            <Label>Country *</Label>
            <Input {...register("country")} placeholder="Country of residence" disabled={loading} />
            {errors.country && <p className="text-red-500 text-xs">{errors.country.message}</p>}
          </div>
        </div>

        {/* Position, Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Position Applying For *</Label>
            <Input {...register("positionApplied")} placeholder="e.g., Event Volunteer" disabled={loading} />
            {errors.positionApplied && <p className="text-red-500 text-xs">{errors.positionApplied.message}</p>}
          </div>

          <div className="space-y-2">
            <Label>Skills *</Label>
            <Input {...register("skills")} placeholder="Relevant skills" disabled={loading} />
            {errors.skills && <p className="text-red-500 text-xs">{errors.skills.message}</p>}
          </div>
        </div>

        {/* Available Dates */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Available From</Label>
            <Input type="date" {...register("availableFrom")} disabled={loading} />
          </div>

          <div className="space-y-2">
            <Label>Available To</Label>
            <Input type="date" {...register("availableTo")} disabled={loading} />
          </div>
        </div>

        {/* Motivation */}
        <div className="space-y-2">
          <Label>Motivation *</Label>
          <Textarea
            {...register("motivation")}
            placeholder="Tell us why you want to volunteer..."
            disabled={loading}
            className="min-h-[120px]"
          />
          {errors.motivation && <p className="text-red-500 text-xs">{errors.motivation.message}</p>}
        </div>

        {/* File Upload */}
        <FilesUpload />

        {/* Submit */}
        <div className="flex justify-end">
          <Button type="submit" disabled={loading} className="min-w-[150px]">
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default VolunteerForm;

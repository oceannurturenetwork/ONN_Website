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

const internshipFormSchema = z.object({
  fullName: z.string().min(1, { message: "Full Name is required" }),
  email: z.string().email({ message: "Provide a valid email" }),
  phone: z.string().min(8, { message: "Phone number is required" }),
  institution: z.string().min(1, { message: "Institution name is required" }),
  degree: z.string().min(1, { message: "Degree program is required" }),
  yearOfStudy: z.string().min(1, { message: "Year of study is required" }),
  positionApplied: z.string().min(1, { message: "Position is required" }),
  statementOfInterest: z.string().min(1, { message: "Statement of Interest is required" }),
  availableFrom: z.string().optional(),
  availableTo: z.string().optional(),
});

type InternshipFormValues = z.infer<typeof internshipFormSchema>;

const InternshipForm = () => {
  const [loading, setLoading] = useState(false);
  const [documents, setDocuments] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InternshipFormValues>({
    resolver: zodResolver(internshipFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      institution: "",
      degree: "",
      yearOfStudy: "",
      positionApplied: "",
      statementOfInterest: "",
      availableFrom: "",
      availableTo: "",
    },
  });

  const onSubmit = async (data: InternshipFormValues) => {
    setLoading(true);
    const formData = new FormData();

    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("institution", data.institution);
    formData.append("degree", data.degree);
    formData.append("yearOfStudy", data.yearOfStudy);
    formData.append("positionApplied", data.positionApplied);
    formData.append("statementOfInterest", data.statementOfInterest);
    formData.append("availableFrom", data.availableFrom || "");
    formData.append("availableTo", data.availableTo || "");

    documents.forEach((doc) => {
      formData.append("documents", doc);
    });

    try {
      const response = await fetch('/api/internship', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        createToast("Success", "Internship application submitted!", "success");
        reset();
        setDocuments([]);
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      createToast("Error", "Submission failed. Try again.", "danger");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setDocuments((prev) => [...prev, ...Array.from(files)]);
    }
  };

  const FilesUpload = () => (
    <Card className="my-4">
      <div className="p-4 space-y-2">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4" />
          <h3 className="text-sm font-semibold">Required Documents</h3>
        </div>
        <ul className="list-disc list-inside text-xs text-muted-foreground">
          <li>CV / Resume</li>
          <li>Academic Transcripts</li>
          <li>Recommendation Letter (if available)</li>
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
    <Card className="p-6 lg:p-8 space-y-6  bg-secondary-color">
      <div>
        <Heading2 className="text-center my-0 mt-2 text-base lg:text-2xl">
          Internship Application Form
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

        {/* Phone, Institution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Phone *</Label>
            <Input {...register("phone")} placeholder="Phone number" disabled={loading} />
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
          </div>

          <div className="space-y-2">
            <Label>Institution *</Label>
            <Input {...register("institution")} placeholder="University / College name" disabled={loading} />
            {errors.institution && <p className="text-red-500 text-xs">{errors.institution.message}</p>}
          </div>
        </div>

        {/* Degree and Year of Study */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Degree Program *</Label>
            <Input {...register("degree")} placeholder="e.g., BSc Marine Biology" disabled={loading} />
            {errors.degree && <p className="text-red-500 text-xs">{errors.degree.message}</p>}
          </div>

          <div className="space-y-2">
            <Label>Year of Study *</Label>
            <Input {...register("yearOfStudy")} placeholder="e.g., 3rd Year" disabled={loading} />
            {errors.yearOfStudy && <p className="text-red-500 text-xs">{errors.yearOfStudy.message}</p>}
          </div>
        </div>

        {/* Position Applied and Dates */}
        <div className="space-y-2">
          <Label>Position Applying For *</Label>
          <Input {...register("positionApplied")} placeholder="Internship position" disabled={loading} />
          {errors.positionApplied && <p className="text-red-500 text-xs">{errors.positionApplied.message}</p>}
        </div>

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

        {/* Statement of Interest */}
        <div className="space-y-2">
          <Label>Statement of Interest *</Label>
          <Textarea
            {...register("statementOfInterest")}
            placeholder="Briefly explain your interest in this internship..."
            disabled={loading}
            className="min-h-[120px]"
          />
          {errors.statementOfInterest && (
            <p className="text-red-500 text-xs">{errors.statementOfInterest.message}</p>
          )}
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

export default InternshipForm;

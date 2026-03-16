"use client";

import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { Heading2, Paragraph } from "@/components/utils/typography";
import { Separator } from "@/components/ui/separator";
import { createToast } from "@/utils/toast";

const memberFormSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    name: z.string().min(1, { message: "Name is required" }),
    designation: z.string().optional(),
    affiliation: z.string().optional(),
    email: z.string().email({ message: "Provide a valid email" }),
    country: z.string().min(1, { message: "Country is required" }),
    degree: z.string().optional(),
    subject: z.string().optional(),
    yearOfPassing: z.string().min(1, { message: "Select year of passing" }),
    indianOceanRegionResearch: z.boolean().optional(),
    photo: z.any().optional(),
    researchArea: z.string().min(1, { message: "Research Area is required" }),
});

type MemberFormValues = z.infer<typeof memberFormSchema>;

const MemberForm = () => {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<MemberFormValues>({
        resolver: zodResolver(memberFormSchema),
        defaultValues: {
            title: "",
            name: "",
            designation: "",
            affiliation: "",
            email: "",
            country: "",
            degree: "",
            subject: "",
            yearOfPassing: "",
            indianOceanRegionResearch: false,
            photo: null,
            researchArea: "",
        },
    });

    const onSubmit = async (data: any) => {
        setLoading(true);
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('name', data.name);
        formData.append('designation', data.designation || '');
        formData.append('affiliation', data.affiliation || '');
        formData.append('email', data.email);
        formData.append('country', data.country);
        formData.append('degree', data.degree || '');
        formData.append('subject', data.subject || '');
        formData.append('yearOfPassing', data.yearOfPassing);
        formData.append('indianOceanRegionResearch', data.indianOceanRegionResearch ? 'true' : 'false');
        formData.append('researchArea', data.researchArea);
    
        // Handle photo file
        if (data.photo && data.photo[0]) {
          formData.append('photo', data.photo[0]);
        }
      
        try {
          const response = await fetch('/api/membership', {
            method: 'POST',
            body: formData,
          });
      
          const result = await response.json();
          if (result.success) {
            createToast("Success", "Form submitted successfully!", "success");;
            reset()
          }
          else throw Error(); 
        } catch (error) {
          console.error('Error submitting form:', error);
          createToast("Error", "Something went wrong. Please try again.", "danger");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="p-6 lg:p-8 space-y-3 bg-secondary-color">
            <div>
                <Heading2 className="text-center my-0 mt-2 text-base lg:text-2xl">
                    Membership Form
                </Heading2>
                <Paragraph className="text-center font-semibold text-red-500 text-xs lg:text-sm mb-2">
                    All fields are required
                </Paragraph>
            </div>
            <Separator />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Title & Name */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label className="text-sm lg:text-base">Title</Label>
                        <select
                            {...register("title")}
                            disabled={loading}
                            className="w-full border rounded-md px-3 py-1 text-sm lg:text-base"
                        >
                            <option value="">Select Title</option>
                            <option value="Mr.">Mr.</option>
                            <option value="Mrs.">Mrs.</option>
                            <option value="Ms.">Ms.</option>
                            <option value="Dr.">Dr.</option>
                            <option value="Prof.">Prof.</option>
                        </select>
                        {errors.title && (
                            <p className="text-red-500 text-xs lg:text-sm">{errors.title.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label className="text-sm lg:text-base">Name</Label>
                        <Input
                            {...register("name")}
                            disabled={loading}
                            placeholder="Full name"
                            className="text-sm lg:text-base"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-xs lg:text-sm">{errors.name.message}</p>
                        )}
                    </div>
                </div>

                {/* Designation & Affiliation */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label className="text-sm lg:text-base">Designation / Profession</Label>
                        <Input
                            {...register("designation")}
                            disabled={loading}
                            placeholder="Designation or profession"
                            className="text-sm lg:text-base"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label className="text-sm lg:text-base">Affiliation</Label>
                        <Input
                            {...register("affiliation")}
                            disabled={loading}
                            placeholder="Affiliation"
                            className="text-sm lg:text-base"
                        />
                    </div>
                </div>

                {/* Email & Country */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label className="text-sm lg:text-base">Email address</Label>
                        <Input
                            {...register("email")}
                            disabled={loading}
                            placeholder="Email address"
                            className="text-sm lg:text-base"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs lg:text-sm">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label className="text-sm lg:text-base">Country</Label>
                        <select
                            {...register("country")}
                            disabled={loading}
                            className="w-full border rounded-md px-3 py-1 text-sm lg:text-base"
                        >
                            <option value="">Select Country</option>
                            {
                                countries.map((country, index) => (
                                    <option value={country} key={index}>{country}</option>
                                ))
                            }
                            {/* <option value="Kenya">Kenya</option>
                            <option value="India">India</option>
                            <option value="Tanzania">Tanzania</option>
                            <option value="Mauritius">Mauritius</option>
                            <option value="South Africa">South Africa</option> */}
                        </select>
                        {errors.country && (
                            <p className="text-red-500 text-xs lg:text-sm">{errors.country.message}</p>
                        )}
                    </div>
                </div>

                {/* Degree & Subject */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label className="text-sm lg:text-base">Degree</Label>
                        <select
                            {...register("degree")}
                            disabled={loading}
                            className="w-full border rounded-md px-3 py-1 text-sm lg:text-base"
                        >
                            <option value="">Select level</option>
                             
                                <option value="high_school">High School Diploma</option>
                                <option value="associate">Associate Degree</option>
                                <option value="bachelor">Bachelor's Degree</option>
                                <option value="master">Master's Degree</option>
                                <option value="doctorate">Doctorate (Ph.D.)</option>
                                <option value="professional">Professional Degree (e.g., JD, MD)</option>
                                <option value="vocational">Vocational/Technical Certification</option>
                                <option value="other">Other</option>
                        </select>
                       
                    </div>

                    <div className="space-y-2">
                        <Label className="text-sm lg:text-base">Subject</Label>
                        <Input
                            {...register("subject")}
                            disabled={loading}
                            placeholder="Subject"
                            className="text-sm lg:text-base"
                        />
                    </div>
                </div>

                {/* Year of Passing & Photo */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label className="text-sm lg:text-base">Year of Passing</Label>
                        <select
                            {...register("yearOfPassing")}
                            disabled={loading}
                            className="w-full border rounded-md px-3 py-1 text-sm lg:text-base"
                        >
                            <option value="">Select Year</option>
                            {Array.from({ length: 50 }, (_, i) => {
                                const year = new Date().getFullYear() - i;
                                return (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                );
                            })}
                        </select>
                        {errors.yearOfPassing && (
                            <p className="text-red-500 text-xs lg:text-sm">{errors.yearOfPassing.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label className="text-sm lg:text-base">Passport Size Photo</Label>
                        <Input
                            type="file"
                            {...register("photo")}
                            disabled={loading}
                            className="text-sm lg:text-base file:text-sm file:lg:text-base"
                        />
                    </div>
                </div>

                {/* Checkbox */}
                <div className="flex items-center space-x-3">
                    <Checkbox id="indianOceanRegionResearch" {...register("indianOceanRegionResearch")} disabled={loading} />
                    <Label htmlFor="indianOceanRegionResearch" className="text-sm lg:text-base">
                        Is your research area in the Indian Ocean Region?
                    </Label>
                </div>

                {/* Research Area */}
                <div className="space-y-2">
                    <Label className="text-sm lg:text-base">Research Area Description</Label>
                    <Textarea
                        {...register("researchArea")}
                        disabled={loading}
                        placeholder="Describe your research area..."
                        className="min-h-[120px] text-sm lg:text-base"
                    />
                    {errors.researchArea && (
                        <p className="text-red-500 text-xs lg:text-sm">{errors.researchArea.message}</p>
                    )}
                </div>

                {/* Submit */}
                <div className="flex justify-end">
                    <Button
                        type="submit"
                        disabled={loading}
                        className="min-w-[150px] text-sm lg:text-base"
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default MemberForm;


const countries: string[] = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas",
    "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
    "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
    "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon",
    "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia",
    "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus",
    "Czech Republic", "Democratic Republic of the Congo", "Denmark", "Djibouti",
    "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
    "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji",
    "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece",
    "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
    "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
    "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
    "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho",
    "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
    "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
    "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco",
    "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia",
    "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
    "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau",
    "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
    "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
    "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
    "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
    "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
    "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka",
    "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan",
    "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago",
    "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine",
    "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
    "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen",
    "Zambia", "Zimbabwe"
  ];
  

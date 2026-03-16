// internship/values.ts

import { z } from "zod";

let values = [
  {
    name: "name",
    placeholder: "Full name",
  },
  {
    name: "email",
    placeholder: "Email address",
  },
  {
    name: "phone",
    placeholder: "Phone number",
  },
  {
    name: "institution",
    placeholder: "School or Institution",
  },
 
];

const internshipFormSchema = z.object({
  name: z.string().min(1, { message: "Provide your name" }),
  email: z.string().email({ message: "Provide a valid email" }),
  phone: z.string().min(1, { message: "Provide a phone number" }),
  institution: z.string().min(1, { message: "Provide your institution" }),
});

let defaultValues = {
  name: "",
  email: "",
  phone: "",
  institution: "",
  documents: undefined,
};

type InternshipFormValues = z.infer<typeof internshipFormSchema>;

export { internshipFormSchema, defaultValues, values };
export type { InternshipFormValues };

import { z } from "zod";

let values = [
  {
    name: "name",
    placeholder: "Your name",
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
    name: "skills",
    placeholder: "What skills or experience can you contribute?",
    textarea: true,
  },
  {
    name: "availability",
    placeholder: "Your availability (e.g. weekdays, weekends)",
    textarea: true,
  },
];

const volunteerFormSchema = z.object({
  name: z.string().min(1, { message: "Provide your full name" }),
  email: z.string().email({ message: "Enter a valid email" }),
  phone: z.string().min(1, { message: "Provide a valid phone number" }),
  skills: z.string().min(1, { message: "Let us know what you can offer" }),
  availability: z.string().min(1, { message: "Indicate when you’re available" }),
});

let defaultValues = {
  name: "",
  email: "",
  phone: "",
  skills: "",
  availability: "",
};

type VolunteerFormValues = z.infer<typeof volunteerFormSchema>;

export {
  volunteerFormSchema,
  defaultValues,
  values
};

export type {
  VolunteerFormValues
};

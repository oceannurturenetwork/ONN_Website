import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

export const volunteerType = defineType({
  name: "volunteer",
  title: "Volunteer Applications",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "country",
      title: "Country",
      type: "string",
    }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "positionApplied",
      title: "Position Volunteering For",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "motivation",
      title: "Why do you want to volunteer?",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "availableFrom",
      title: "Available From",
      type: "date",
    }),
    defineField({
      name: "availableTo",
      title: "Available To",
      type: "date",
    }),
    defineField({
      name: "documents",
      title: "Supporting Documents",
      type: "array",
      of: [{ type: "file" }],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "positionApplied",
    },
  },
});

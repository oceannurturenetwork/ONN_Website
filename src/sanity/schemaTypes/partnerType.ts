import { defineType, defineField } from "sanity";
import { UserIcon } from "@sanity/icons";

export const partnerType = defineType({
  name: "partner",
  title: "Partners",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "title",
      title: "Partner Name",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(100),
    }),
    defineField({
      name: "logo",
      title: "Partner Logo",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative text",
          type: "string",
          description: "Important for SEO and accessibility.",
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "logo",
    },
  },
});

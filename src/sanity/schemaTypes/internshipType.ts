import { defineField, defineType } from 'sanity'
import {BlockElementIcon} from '@sanity/icons'

export const internshipType = defineType({
  name: 'internship',
  title: 'Internship Applications',
  type: 'document',
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: Rule => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'institution',
      title: 'Institution / University',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'degree',
      title: 'Degree Program',
      type: 'string',
    }),
    defineField({
      name: 'yearOfStudy',
      title: 'Year of Study',
      type: 'string',
      options: {
        list: [
          { title: 'First Year', value: 'First Year' },
          { title: 'Second Year', value: 'Second Year' },
          { title: 'Third Year', value: 'Third Year' },
          { title: 'Fourth Year', value: 'Fourth Year' },
          { title: 'Masters', value: 'Masters' },
          { title: 'PhD', value: 'PhD' },
          { title: 'Other', value: 'Other' },
        ],
      },
    }),
    defineField({
      name: 'positionApplied',
      title: 'Position Applied For',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'statementOfInterest',
      title: 'Statement of Interest',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'availableFrom',
      title: 'Available From',
      type: 'date',
    }),
    defineField({
      name: 'availableTo',
      title: 'Available To',
      type: 'date',
    }),
    defineField({
      name: 'documents',
      title: 'Uploaded Documents',
      type: 'array',
      of: [{ type: 'file' }],
    }),
  ],
  preview: {
    select: {
      title: 'fullName',
      subtitle: 'positionApplied',
    },
  },
})

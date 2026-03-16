import {defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

export const memberType = defineType({
  name: 'member',
  title: 'Members',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      options: {
        list: [
          { title: 'Mr.', value: 'Mr.' },
          { title: 'Mrs.', value: 'Mrs.' },
          { title: 'Ms.', value: 'Ms.' },
          { title: 'Dr.', value: 'Dr.' },
          { title: 'Prof.', value: 'Prof.' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'designation',
      title: 'Designation / Profession',
      type: 'string',
    }),
    defineField({
      name: 'affiliation',
      title: 'Affiliation',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: Rule => Rule.email(),
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
    }),
    defineField({
      name: 'degree',
      title: 'Degree',
      type: 'string',
    }),
    defineField({
      name: 'subject',
      title: 'Subject',
      type: 'string',
    }),
    defineField({
      name: 'yearOfPassing',
      title: 'Year of Passing',
      type: 'number',
    }),
    defineField({
      name: 'indianOceanRegionResearch',
      title: 'Research Area in Indian Ocean Region?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'photo',
      title: 'Passport Size Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
    defineField({
      name: 'researchArea',
      title: 'Research Area',
      type: 'text',
      rows: 5,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'designation',
      media: 'photo',
    },
  },
})

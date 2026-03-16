import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const researchType = defineType({
  name: 'research',
  title: 'Research',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'file',
      title: 'File Upload',
      type: 'file',
      options: {
        storeOriginalFilename: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date Published',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'file',
    },
  },
})

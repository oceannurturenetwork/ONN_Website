import {CaseIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const careerType = defineType({
  name: 'career',
  title: 'Career',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'keys',
      title: 'Key Responsibilities',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({
      name: 'qualifications',
      title: 'Qualifications',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({
      name: 'vacancies',
      title: 'Number of Vacancies',
      type: 'number',
      validation: Rule => Rule.min(1).required(),
    }),
    defineField({
      name: 'open',
      title: 'Open Position',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'position',
      subtitle: 'role',
    },
  },
})

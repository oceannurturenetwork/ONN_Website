import {CalendarIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'Event',
  title: 'Events',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'banner',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Event Date',
      type: 'datetime',
    }),
    defineField({
      name: 'link',
      title: 'Event Link (Optional)',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'banner',
      date: 'date',
    },
    prepare(selection) {
      const {title, media, date} = selection
      return {
        title,
        media,
        subtitle: date ? new Date(date).toLocaleDateString() : '',
      }
    },
  },
})

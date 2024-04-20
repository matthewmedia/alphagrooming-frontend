// ./schemaTypes/youTubeType/index.ts

import {defineType, defineField} from 'sanity'
import {PlayIcon} from '@sanity/icons'


import { YouTubePreview } from './youtubepreview'

export default defineType({
  name: 'youTube',
  type: 'object',
  title: 'YouTube Embed',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'YouTube video URL',
    }),
  ],
  preview: {
    select: {title: 'url'},
  },
  components: {
    preview: YouTubePreview,
  },
})
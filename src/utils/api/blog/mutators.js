// @flow
import { format, formatDistanceToNow } from 'date-fns'
import readingTime from 'reading-time'

export type Post = {
  dateModified: string,
  datePublished: { formatInWords: string, formatDate: string, value: string },
  disqusIdentifier: string,
  excerpt: string,
  html: string,
  images: { featured: { src: string }, preview: { lqpi: string, src: string } },
  readingTime: string,
  slug: string,
  title: string
}

export type PostPreview = $Diff<
  Post,
  {
    dateModified: string,
    disqusIdentifier: string,
    html: string,
    readingTime: string
  }
>

type Payload = { data: Object, html: Object, slug: string }

export const transformPost = (payload: Payload): Post => ({
  dateModified: payload.data.dateModified,
  datePublished: {
    formatInWords: formatDistanceToNow(
      new Date(payload.data.datePublished + ' GMT+2'),
      { addSuffix: true }
    ),
    formatDate: format(
      new Date(payload.data.datePublished),
      'dd MMMM y'
    ),
    value: payload.data.datePublished
  },
  disqusIdentifier: payload.data.disqusIdentifier,
  excerpt: payload.data.excerpt,
  html: payload.html.toString(),
  images: {
    featured: {
      src: payload.data.image
    },
    preview: {
      src: payload.data.image.replace('/upload/', '/upload/w_500/'),
      lqpi: payload.data.image.replace('/upload/', '/upload/t_post-preview-lqpi/')
    }
  },
  readingTime: readingTime(payload.html.toString()).text,
  slug: payload.slug,
  title: payload.data.title
})

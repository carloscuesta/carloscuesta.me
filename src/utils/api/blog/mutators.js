// @flow
import { format, formatDistanceToNow } from 'date-fns'

export type Post = {
  dateModified: string,
  datePublished: { formatInWords: string, formatDate: string, value: string },
  disqusIdentifier: string,
  excerpt: string,
  html: string,
  images: { featured: { src: string }, preview: { lqpi: string, src: string } },
  slug: string,
  title: string
}

type Payload = { data: Object, html: Object, slug: string }

export const transformPost = (payload: Payload): Post => ({
  dateModified: payload.data.dateModified,
  datePublished: {
    formatInWords: formatDistanceToNow(
      new Date(payload.data.datePublished),
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
      lqpi: payload.data.image.replace('/upload/', '/upload/t_lqpi-post-preview/')
    }
  },
  slug: payload.slug,
  title: payload.data.title
})

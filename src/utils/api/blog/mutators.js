// @flow
import { format, formatDistanceToNow } from 'date-fns'

export type Post = {
  dateModified: string,
  datePublished: { formatInWords: string, formatDate: string, value: string },
  disqusIdentifier: string,
  excerpt: string,
  html: string,
  image: { featured: string, preview: string },
  slug: string,
  title: string
}

export const transformPost = (payload: { data: Object, html: Object, slug: string }): Post => ({
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
  image: {
    featured: payload.data.image,
    preview: payload.data.image.replace('/upload/', '/upload/w_500/')
  },
  slug: payload.slug,
  title: payload.data.title
})

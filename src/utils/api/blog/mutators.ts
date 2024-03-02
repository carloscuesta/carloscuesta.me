import { format } from 'date-fns'
import { getPlaiceholder } from 'plaiceholder'
import readingTime from 'reading-time'
import type { VFile } from 'vfile'

export type Post = {
  dateModified: string
  datePublished: {
    formatDate: string
    formatMonthDay: string
    value: string
  }
  disqusIdentifier: string
  excerpt: string
  html: string
  images: { featured: { src: string }; preview: { lqpi: string; src: string } }
  readingTime: string
  slug: string
  title: string
}

export type PostPreview = Omit<
  Post,
  'dateModified' | 'disqusIdentifier' | 'html' | 'readingTime'
> & { views: string }

type Views = { views: { [key: string]: string } }

export const transformPostViews = (data: Views) => data.views

type Payload = {
  data: { [key: string]: string }
  html: VFile
  slug: string
}

export const transformPost = async (payload: Payload): Promise<Post> => {
  const { base64 } = await getPlaiceholder(
    payload.data.image.replace(
      '/upload/',
      '/upload/t_post-preview-lqpi-background-color/',
    ),
  )

  return {
    dateModified: payload.data.dateModified,
    datePublished: {
      formatDate: format(new Date(payload.data.datePublished), 'dd MMMM y'),
      formatMonthDay: format(new Date(payload.data.datePublished), 'MMM dd'),
      value: payload.data.datePublished,
    },
    disqusIdentifier: payload.data.disqusIdentifier,
    excerpt: payload.data.excerpt,
    html: payload.html.toString(),
    images: {
      featured: {
        src: payload.data.image,
      },
      preview: {
        src: payload.data.image.replace('/upload/', '/upload/w_500/'),
        lqpi: base64,
      },
    },
    readingTime: readingTime(payload.html.toString()).text,
    slug: payload.slug,
    title: payload.data.title,
  }
}

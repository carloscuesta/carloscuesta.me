import { ImageResponse } from 'next/og'

import { fetchPost } from 'src/utils/api/blog'
import { fetchViews } from 'src/utils/api/blog/views'
import OpengraphImage, { getFonts } from 'src/components/OpengraphImage'

export const dynamic = 'force-static'
export const revalidate = false

type Params = { params: { slug: string } }

export const generateImageMetadata = async ({ params }: Params) => {
  if (!params.slug) return []

  const post = await fetchPost(params.slug)

  return [
    {
      id: post.slug,
      alt: post.title,
      contentType: 'image/png',
      size: { width: 1200, height: 630 },
    },
  ]
}

type ImageParams = { params: Promise<{ slug: string }> }

export default async function Image({ params }: ImageParams) {
  const post = await fetchPost((await params).slug)
  const views = await fetchViews()

  return new ImageResponse(
    <OpengraphImage
      title={post.title}
      description={`${post.datePublished.formatMonthDay} ${new Date(post.datePublished.value).getFullYear()} • ${post.readingTime} • ${views[post.slug]}`}
      isBlogPost
    />,
    {
      fonts: await getFonts(),
    },
  )
}

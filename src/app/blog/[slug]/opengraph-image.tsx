import { type Font } from 'satori'
import { ImageResponse } from 'next/server'

import { fetchPost } from 'src/utils/api/blog'
import { fetchViews } from 'src/utils/api/blog/views'

export const dynamic = 'force-static'
export const revalidate = 60

type Params = { params: { slug: string } }

async function getFonts(): Promise<Font[]> {
  const [interRegular, interMedium, interSemiBold, interBold] =
    await Promise.all([
      fetch(`https://rsms.me/inter/font-files/Inter-Regular.woff`).then((res) =>
        res.arrayBuffer(),
      ),
      fetch(`https://rsms.me/inter/font-files/Inter-Medium.woff`).then((res) =>
        res.arrayBuffer(),
      ),
      fetch(`https://rsms.me/inter/font-files/Inter-SemiBold.woff`).then(
        (res) => res.arrayBuffer(),
      ),
      fetch(`https://rsms.me/inter/font-files/Inter-ExtraBold.woff`).then(
        (res) => res.arrayBuffer(),
      ),
    ])

  return [
    {
      name: 'Inter',
      data: interRegular,
      style: 'normal',
      weight: 400,
    },
    {
      name: 'Inter',
      data: interMedium,
      style: 'normal',
      weight: 500,
    },
    {
      name: 'Inter',
      data: interSemiBold,
      style: 'normal',
      weight: 600,
    },
    {
      name: 'Inter',
      data: interBold,
      style: 'normal',
      weight: 700,
    },
  ]
}

export const generateImageMetadata = async ({ params }: Params) => {
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

export default async function Image({ params }: Params) {
  const post = await fetchPost(params.slug)
  const views = await fetchViews()

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: '24px',
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'Inter',
          flexDirection: 'column',
          fontWeight: 400,
          padding: '4em',
          gap: '1em',
        }}
      >
        <img
          src="https://carloscuesta.me/images/carloscuesta.jpg"
          width="90"
          height="90"
          style={{ borderRadius: '100%' }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
          <span style={{ fontWeight: 700, fontSize: '2em' }}>{post.title}</span>
          <div
            style={{
              display: 'flex',
              gap: '0.5em',
              fontSize: '1.05em',
              opacity: '0.5',
            }}
          >
            <time dateTime={post.datePublished.value}>
              {post.datePublished.formatDate}
            </time>
            <span>•</span>
            <span>{post.readingTime}</span>
            <span>•</span>
            <span>{views[post.slug]}</span>
          </div>
        </div>
        <span style={{ opacity: '0.5' }}>carloscuesta.me</span>
      </div>
    ),
    {
      fonts: await getFonts(),
    },
  )
}

import { type Font } from 'satori'
import { ImageResponse } from 'next/server'

import { fetchPost } from 'src/utils/api/blog'
import { fetchViews } from 'src/utils/api/blog/views'

export const dynamic = 'force-static'
export const revalidate = false

type Params = { params: { slug: string } }

async function getFonts(): Promise<Font[]> {
  const [interLight, interSemiBold, interBold, ibmPlexMono] = await Promise.all(
    [
      fetch(`https://rsms.me/inter/font-files/Inter-Light.woff`).then((res) =>
        res.arrayBuffer(),
      ),
      fetch(`https://rsms.me/inter/font-files/Inter-Bold.woff`).then((res) =>
        res.arrayBuffer(),
      ),
      fetch(`https://rsms.me/inter/font-files/Inter-ExtraBold.woff`).then(
        (res) => res.arrayBuffer(),
      ),
      fetch(`https://fonts.cdnfonts.com/s/27347/IBMPlexMono-Light.woff`).then(
        (res) => res.arrayBuffer(),
      ),
    ],
  )

  return [
    {
      name: 'Inter',
      data: interLight,
      style: 'normal',
      weight: 300,
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
    {
      name: 'IBMPlexMono',
      data: ibmPlexMono,
      style: 'normal',
      weight: 400,
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
          fontSize: '16px',
          background: '#ffffff',
          color: '#262626',
          width: '100%',
          height: '100%',
          display: 'flex',
          fontFamily: 'Inter',
          flexDirection: 'column',
          padding: '4em',
          gap: '1em',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1em',
            alignItems: 'center',
            marginBottom: '4rem',
          }}
        >
          <img
            src="https://carloscuesta.me/images/carloscuesta.jpg"
            width="90"
            height="90"
            style={{ borderRadius: '100%' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: 600, fontSize: '1.75em' }}>
              Carlos Cuesta
            </span>
            <span style={{ fontWeight: 300, opacity: 0.7, fontSize: '1.5em' }}>
              @crloscuesta
            </span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1em',
            flex: 1,
          }}
        >
          <span style={{ fontWeight: 700, fontSize: '4em' }}>{post.title}</span>
          <div
            style={{
              display: 'flex',
              gap: '0.5em',
              fontSize: '1.5em',
              fontFamily: 'IBMPlexMono',
            }}
          >
            <time dateTime={post.datePublished.value}>
              {post.datePublished.formatMonthDay},{' '}
              {new Date(post.datePublished.value).getFullYear()}
            </time>
            <span>•</span>
            <span>{post.readingTime}</span>
            <span>•</span>
            <span>{views[post.slug]}</span>
          </div>
        </div>
        <span style={{ fontWeight: 300, opacity: 0.7, fontSize: '1.5em' }}>
          carloscuesta.me
        </span>
      </div>
    ),
    {
      fonts: await getFonts(),
    },
  )
}

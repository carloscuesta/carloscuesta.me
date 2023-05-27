import { ImageResponse } from 'next/server'

import { fetchPost } from 'src/utils/api/blog'

export const dynamic = 'force-static'
export const revalidate = 60

type Params = { params: { slug: string } }

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

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {post.title}
      </div>
    )
  )
}

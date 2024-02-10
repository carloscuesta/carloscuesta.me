import { ImageResponse } from 'next/og'
import OpengraphImage, { getFonts } from 'src/components/OpengraphImage'

export const dynamic = 'force-static'
export const alt = 'Carlos Cuesta'
export const size = {
  width: 1200,
  height: 630,
}

export default async function Image() {
  return new ImageResponse(
    (
      <OpengraphImage
        title="Blog"
        url="blog"
        description="Explore my collection of writings and thoughts"
      />
    ),
    {
      fonts: await getFonts(),
    },
  )
}

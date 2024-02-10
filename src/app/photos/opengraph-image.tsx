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
        title="Photos"
        url="photos"
        description="A selection of my favorite shots that I've taken with my iPhone"
      />
    ),
    {
      fonts: await getFonts(),
    },
  )
}

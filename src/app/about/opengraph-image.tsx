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
        title="About me"
        url="about"
        description="Front-End Engineer based in Barcelona, that loves to code and build products."
      />
    ),
    {
      fonts: await getFonts(),
    },
  )
}

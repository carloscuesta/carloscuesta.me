import { type Font } from 'satori'
import { ImageResponse } from 'next/og'
import OpengraphImage from 'src/components/OpengraphImage'

export const dynamic = 'force-static'

async function getFonts(): Promise<Font[]> {
  const [interMedium, interBold, robotoMono] = await Promise.all([
    fetch(`https://fonts.cdnfonts.com/s/19795/Inter-Medium.woff`).then((res) =>
      res.arrayBuffer(),
    ),
    fetch(`https://fonts.cdnfonts.com/s/19795/Inter-ExtraBold.woff`).then(
      (res) => res.arrayBuffer(),
    ),
    fetch(`https://fonts.cdnfonts.com/s/16061/RobotoMono-Regular.woff`).then(
      (res) => res.arrayBuffer(),
    ),
  ])

  return [
    {
      name: 'Inter',
      data: interMedium,
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
      name: 'RobotoMono',
      data: robotoMono,
      style: 'normal',
      weight: 300,
    },
  ]
}

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

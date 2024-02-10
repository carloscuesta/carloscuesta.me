import { type Font } from 'satori'

type Props = {
  url?: string
  description: string
  title: string
  withProfile?: boolean
}

export const getFonts = async (): Promise<Font[]> => {
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

const OpengraphImage = (props: Props) => (
  <div
    style={{
      backgroundColor: 'white',
      width: '100%',
      height: '100%',
      display: 'flex',
      position: 'relative',
      fontFamily: 'Inter',
    }}
  >
    <img
      src="https://carloscuesta.me/images/carloscuesta.jpg"
      width="115"
      height="115"
      style={{ borderRadius: '100%', position: 'absolute', left: 60, top: 60 }}
    />

    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        position: 'absolute',
        bottom: 140,
        left: 60,
        width: '65%',
      }}
    >
      <span
        style={{
          fontSize: '5.25rem',
          fontWeight: 700,
          letterSpacing: '-2px',
          lineHeight: '1',
        }}
      >
        {props.title}
      </span>
      <span
        style={{
          fontSize: '2.5rem',
          fontWeight: 600,
        }}
      >
        {props.description}
      </span>
    </div>
    <div
      style={{
        position: 'absolute',
        bottom: 60,
        left: 60,
        fontSize: '1.75rem',
        lineHeight: 1,
        fontWeight: 600,
        borderRadius: 100,
        fontFamily: 'RobotoMono',
      }}
    >
      {props.url ? `carloscuesta.me/${props.url}` : 'carloscuesta.me'}
    </div>
  </div>
)

export default OpengraphImage

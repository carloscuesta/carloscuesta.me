import { type Font } from 'satori'

type Props = {
  url?: string
  description: string
  title: string
  isBlogPost?: boolean
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

const OpengraphImage = (props: Props) => {
  if (props.isBlogPost) {
    return (
      <div
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          fontFamily: 'Inter',
          padding: '60px',
          justifyContent: 'space-between',
          backgroundImage:
            'radial-gradient(at 10px 10px, #d4d4d4, #d4d4d4 5%, white 5%)',
          backgroundSize: '20px 20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: 1,
            marginBottom: '3rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '1em',
              alignItems: 'center',
            }}
          >
            <img
              src="https://carloscuesta.me/images/carloscuesta.jpg"
              width="115"
              height="115"
              style={{ borderRadius: '100%' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontWeight: 700,
                  fontSize: '3em',
                  letterSpacing: '-1px',
                }}
              >
                Carlos Cuesta
              </span>
              <span
                style={{
                  fontWeight: 300,
                  fontSize: '1.85em',
                }}
              >
                @crloscuesta
              </span>
            </div>
          </div>

          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            <div
              style={{
                fontSize: '4.5rem',
                fontWeight: 700,
                letterSpacing: '-2px',
                lineHeight: '1',
              }}
            >
              {props.title}
            </div>

            <div
              style={{
                fontSize: '2.5rem',
              }}
            >
              {props.description}
            </div>
          </div>
        </div>

        <div
          style={{
            fontSize: '1.75rem',
            lineHeight: 1,
            fontWeight: 600,
            fontFamily: 'RobotoMono',
          }}
        >
          carloscuesta.me/blog
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'relative',
        fontFamily: 'Inter',
        backgroundImage:
          'radial-gradient(at 10px 10px, #d4d4d4, #d4d4d4 5%, white 5%)',
        // linear-gradient(#f5f5f5 1px, transparent 1px), linear-gradient(to right, #f5f5f5 1px, white 1px)',
        backgroundSize: '20px 20px',
      }}
    >
      <img
        src="https://carloscuesta.me/images/carloscuesta.jpg"
        width="115"
        height="115"
        style={{
          borderRadius: '100%',
          position: 'absolute',
          left: 60,
          top: 60,
        }}
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
}

export default OpengraphImage

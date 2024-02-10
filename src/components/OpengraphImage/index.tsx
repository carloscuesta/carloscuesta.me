type Props = {
  url?: string
  description: string
  title: string
  withProfile?: boolean
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
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '1em',
        alignItems: 'center',
        position: 'absolute',
        top: 60,
        left: 60,
      }}
    >
      <img
        src="https://carloscuesta.me/images/carloscuesta.jpg"
        width="100"
        height="100"
        style={{ borderRadius: '100%' }}
      />
      {props.withProfile && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              fontWeight: 700,
              fontSize: '2.75em',
              letterSpacing: '-1px',
            }}
          >
            Carlos Cuesta
          </span>
          <span
            style={{
              fontWeight: 300,
              fontSize: '1.75em',
            }}
          >
            @crloscuesta
          </span>
        </div>
      )}
    </div>

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

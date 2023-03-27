import NextLink from 'next/link'

type Props = {
  href: `/${string}` | `https://${string}`,
  text: string,
  isActive: boolean,
  isIndeterminate: boolean
}

const Link = (props: Props) => {
  const className = `${props.isIndeterminate ? 'hover:opacity-60' : props.isActive ? 'opacity-100' : 'opacity-50 hover:opacity-100'} transition-opacity`

  if (!props.href.startsWith('/')) {
    return (
      <a
        className={className}
        href={props.href}
        rel='noopener noreferrer'
        target='_blank'
      >
        {props.text}
      </a>
    )
  }

  return (
    <NextLink
      href={props.href}
      className={className}
    >
      {props.text}
    </NextLink>
  )
}

export default Link

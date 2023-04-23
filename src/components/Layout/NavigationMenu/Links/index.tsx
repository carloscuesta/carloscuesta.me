import { usePathname } from 'next/navigation'

import Link from './Link'

type Props = {
  isHamburguer?: boolean
  links: { href: `/${string}` | `https://${string}`; text: string }[]
}

const Links = (props: Props) => {
  const pathname = `/${usePathname()?.split('/')[1]}`
  const isIndeterminate = props.links.every((link) => link.href !== pathname)

  return (
    <ul
      className={
        props.isHamburguer
          ? 'margin-0 flex h-full flex-1 flex-col items-center justify-center space-y-5 text-2xl'
          : 'hidden grid-flow-col gap-6 text-sm font-medium sm:grid'
      }
    >
      {props.links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            text={link.text}
            isActive={link.href === pathname}
            isIndeterminate={isIndeterminate}
          />
        </li>
      ))}
    </ul>
  )
}

export default Links

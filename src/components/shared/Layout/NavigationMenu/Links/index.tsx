import { useRouter } from 'next/router'

import Link from './Link'

type Props = {
  isHamburguer?: boolean,
  links: { href: `/${string}` | `https://${string}`, text: string }[]
}

const Links = (props: Props) => {
  const pathname = `/${useRouter().pathname.split("/")[1]}`
  const isIndeterminate = props.links.every((link) => link.href !== pathname)

  return (
  <ul
    className={props.isHamburguer
      ? 'flex flex-1 flex-col items-center margin-0 h-full justify-center space-y-5 text-2xl'
      : 'hidden sm:grid grid-flow-col gap-6 font-medium text-sm'
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

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { RemoveScroll } from 'react-remove-scroll'

import Links from '../Links'
import OpenIcon from './OpenIcon'
import CloseIcon from './CloseIcon'

type Props = { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }

const Hamburger = (props: Props) => {
  const { setIsOpen, isOpen } = props
  const pathname = usePathname()
  const buttonClassName =
    'fill-black p-2 dark:fill-white focus:outline-hidden focus:ring-1 focus:ring-neutral-300 dark:focus:ring-neutral-500 rounded-lg'

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false)
    }
  }, [pathname])

  return (
    <div className="sm:hidden">
      <button
        aria-label="Open navigation menu"
        onClick={() => setIsOpen(true)}
        className={buttonClassName}
        tabIndex={0}
      >
        <OpenIcon />
      </button>

      {props.isOpen && (
        <RemoveScroll>
          <nav className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-white dark:bg-black">
            <div className="absolute right-0 px-6 py-2">
              <button
                aria-label="Close navigation menu"
                onClick={() => setIsOpen(false)}
                className={buttonClassName}
                tabIndex={0}
              >
                <CloseIcon />
              </button>
            </div>

            <Links
              isHamburguer
              links={[
                { href: '/', text: 'Home' },
                { href: '/about', text: 'About' },
                { href: '/blog', text: 'Blog' },
                { href: '/uses', text: 'Uses' },
                { href: '/photos', text: 'Photos' },
              ]}
            />
          </nav>
        </RemoveScroll>
      )}
    </div>
  )
}

export default Hamburger

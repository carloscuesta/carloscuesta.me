import { useEffect } from 'react'
import Router from 'next/router'

import Links from '../Links'
import OpenIcon from './OpenIcon'
import CloseIcon from './CloseIcon'

type Props = { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }

const Hamburger = (props: Props) => {
  const { setIsOpen } = props

  useEffect(() => {
    const onRouteChangeStart = () => {
      setIsOpen(false)
    }

    Router.events.on('routeChangeStart', onRouteChangeStart)

    return () => Router.events.off('routeChangeStart', onRouteChangeStart)
  }, [setIsOpen])

  return (
    <div className="sm:hidden">
      <button
        aria-label="Open navigation menu"
        onClick={() => setIsOpen(true)}
        className="fill-black p-2 dark:fill-white"
      >
        <OpenIcon />
      </button>

      {props.isOpen && (
        <nav className="fixed bottom-0 left-0 right-0 top-0 bg-white dark:bg-black">
          <div className="absolute right-0 py-2 px-6">
            <button
              aria-label="Close navigation menu"
              onClick={() => setIsOpen(false)}
              className="fill-black p-2 dark:fill-white"
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
              { href: '/projects', text: 'Projects' },
            ]}
          />
        </nav>
      )}
    </div>
  )
}

export default Hamburger

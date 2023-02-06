import { useEffect } from 'react'
import Router from 'next/router'

import MenuLink from '../MenuLink'
import OpenIcon from './OpenIcon'
import CloseIcon from './CloseIcon'
import styles from './styles.module.css'

type Props = { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }

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
    <div className={styles.hamburger}>
      <button
        aria-label='Open navigation menu'
        className={styles.button}
        onClick={() => setIsOpen(true)}
      >
        <OpenIcon />
      </button>

      {props.isOpen &&
        <nav className={styles.menu}>
          <div className={styles.closeContainer}>
            <button
              aria-label='Close navigation menu'
              className={styles.button}
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>

          <ul className={styles.links}>
            <li><MenuLink href='/' text='Home' /></li>
            <li><MenuLink href='/blog' text='Blog' /></li>
            <li><MenuLink href='/about' text='About' /></li>
            <li>
              <MenuLink
                href='/opensource'
                text='Open Source'
              />
            </li>
            <li>
              <MenuLink
                href='https://twitter.com/intent/follow?screen_name=crloscuesta'
                text='Twitter'
              />
            </li>
          </ul>
        </nav>}
    </div>
  )
}

export default Hamburger

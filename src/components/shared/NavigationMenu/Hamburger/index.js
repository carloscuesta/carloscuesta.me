// @flow
import React from 'react'
import Router from 'next/router'

import MenuLink from '../MenuLink'
import OpenIcon from './OpenIcon'
import CloseIcon from './CloseIcon'
import styles from './styles.module.css'

const Hamburger = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    /* Close the menu when navigating to the active page link */
    const onRouteChangeStart = (url) => {
      if (url === Router.router.pathname) {
        setIsOpen(false)
      }
    }

    Router.events.on('routeChangeStart', onRouteChangeStart)

    return () => Router.events.off('routeChangeStart', onRouteChangeStart)
  }, [])

  return (
    <div className={styles.hamburger}>
      <button className={styles.button} onClick={() => setIsOpen(true)}>
        <OpenIcon />
      </button>

      {isOpen &&
        <nav className={styles.menu}>
          <div className={styles.closeContainer}>
            <button className={styles.button} onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </button>
          </div>

          <ul className={styles.links}>
            <li><MenuLink href='/' text='Home' /></li>
            <li><MenuLink href='/blog' text='Writings' /></li>
            <li>
              <MenuLink
                href='https://twitter.com/intent/follow?screen_name=crloscuesta'
                text='Twitter'
              />
            </li>
            <li>
              <MenuLink
                href='https://github.com/carloscuesta'
                text='Open Source'
              />
            </li>
          </ul>
        </nav>}
    </div>
  )
}

export default Hamburger

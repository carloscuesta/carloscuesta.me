// @flow
import React from 'react'

import Wrapper from 'src/components/shared/Wrapper'
import MenuLink from './MenuLink'
import Hamburger from './Hamburger'
import styles from './styles.module.css'

const NavigationMenu = () => (
  <>
    <header className={styles.header}>
      <Wrapper>
        <nav className={styles.navigation}>
          <strong className={styles.logo}>
            <MenuLink href='/' text='Carlos Cuesta' />
          </strong>

          <ul className={styles.links}>
            <li><MenuLink href='/blog' text='Writings' /></li>

            <li>
              <MenuLink
                href='https://twitter.com/intent/follow?screen_name=crloscuesta'
                text='Follow me'
              />
            </li>
          </ul>

          <Hamburger />
        </nav>
      </Wrapper>
    </header>

    <div className={styles.headerFixedSpacing} />
  </>
)

export default NavigationMenu

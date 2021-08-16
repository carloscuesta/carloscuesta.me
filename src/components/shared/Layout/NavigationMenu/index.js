// @flow
import { type Element, useState } from 'react'
import Link from 'next/link'

import Wrapper from 'src/components/shared/Wrapper'
import MenuLink from './MenuLink'
import Hamburger from './Hamburger'
import styles from './styles.module.css'

const NavigationMenu = (): Element<'header'> => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

  return (
    <header className={`${styles.header} ${isHamburgerOpen ? styles.disableBackdropFilter : ''}`}>
      <Wrapper>
        <nav className={styles.navigation}>
          <Link href='/'>
            <a className={styles.logo}>
              <img
                alt='Carlos Cuesta'
                className={styles.avatar}
                height={36}
                src='https://res.cloudinary.com/carloscuesta/image/upload/s--g0fD72tH--/c_scale,q_100,w_72/v1594588508/carloscuesta.jpg'
                width={36}
              />

              Carlos Cuesta
            </a>
          </Link>

          <ul className={styles.links}>
            <li><MenuLink href='/blog' text='Blog' /></li>

            <li><MenuLink href='/about' text='About' /></li>

            <li><MenuLink href='/opensource' text='Open Source' /></li>
          </ul>

          <Hamburger isOpen={isHamburgerOpen} setIsOpen={setIsHamburgerOpen} />
        </nav>
      </Wrapper>
    </header>
  )
}

export default NavigationMenu

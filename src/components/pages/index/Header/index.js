// @flow
import React, { type Element } from 'react'
import Link from 'next/link'

import Wrapper from 'src/components/shared/Wrapper'
import styles from './styles.module.css'

const Header = (): Element<'header'> => (
  <header className={styles.container}>
    <Wrapper>
      <h1 className={styles.title}>Hi, I'm <span className={styles.name}>Carlos Cuesta</span></h1>
      <span className={styles.wave}>👋🏼</span>
      <h2 className={styles.bio}>
        I'm a <b>Front End Engineer</b> from Barcelona.
        I <a target='_blank' rel='noopener noreferrer' href='https://github.com/carloscuesta'>code</a>, <Link href='/blog'><a>write</a></Link> and build stuff on internet.
      </h2>
    </Wrapper>
  </header>
)

export default Header

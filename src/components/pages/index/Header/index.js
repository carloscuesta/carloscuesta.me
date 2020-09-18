// @flow
import React, { type Element } from 'react'

import styles from './styles.module.css'

const Header = (): Element<'header'> => (
  <header className={styles.header}>
    <span className={styles.headline}>Hi! I'm</span>
    <h1 className={styles.name}>Carlos Cuesta</h1>
    <span className={[styles.wave, styles.headline].join(' ')}>👋🏼</span>
    <h2 className={styles.job}>Front End Engineer</h2>
  </header>
)

export default Header

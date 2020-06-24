// @flow
import React from 'react'

import styles from './styles.module.css'

type Props = {
  title: string,
  datePublished: { formatDate: string, value: string }
}

const Header = (props: Props) => (
  <header className={styles.header}>
    <h1 className={styles.title}>{props.title}</h1>

    <time className={styles.time} dateTime={props.datePublished.value}>
      {props.datePublished.formatDate}
    </time>
  </header>
)

export default Header

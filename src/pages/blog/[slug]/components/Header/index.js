// @flow
import React from 'react'

import styles from './styles.module.css'

type Props = {
  image: string
}

const Header = (props: Props) => (
  <header
    className={styles.header}
    style={{ backgroundImage: `url(${props.image})` }}
  />
)

export default Header

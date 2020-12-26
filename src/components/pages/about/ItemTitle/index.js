// @flow
import React, { type Node, type Element } from 'react'

import styles from './styles.module.css'

type Props = {
  children: string | Node
}

const Title = (props: Props): Element<'p'> => (
  <p className={styles.title}>
    {props.children}
  </p>
)

export default Title

// @flow
import React, { type Node, type Element } from 'react'

import styles from './styles.module.css'

type Props = {
  children: string | Node
}

const Title = (props: Props): Element<'h5'> => (
  <h5 className={styles.title}>
    {props.children}
  </h5>
)

export default Title

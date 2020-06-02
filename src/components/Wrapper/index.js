// @flow
import React, { type Node } from 'react'

import styles from './styles.module.css'

type Props = { children: Node }

const Wrapper = (props: Props) => (
  <div className={styles.wrapper}>
    {props.children}
  </div>
)

export default Wrapper

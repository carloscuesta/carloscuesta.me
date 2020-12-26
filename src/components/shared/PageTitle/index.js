// @flow
import React, { type Element } from 'react'

import styles from './styles.module.css'

type Props = {
  title: string
}

const PageTitle = (props: Props): Element<'h1'> => (
  <h1 className={styles.title}>
    {props.title}
  </h1>
)

export default PageTitle

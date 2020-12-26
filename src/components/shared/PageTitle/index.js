// @flow
import React, { type Element } from 'react'

import styles from './styles.module.css'

type Props = {
  title: string
}

const PageTitle = (props: Props): Element<'h3'> => (
  <h3 className={styles.title}>
    {props.title}
  </h3>
)

export default PageTitle

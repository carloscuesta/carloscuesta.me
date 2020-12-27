// @flow
import React, { type Element } from 'react'

import styles from './styles.module.css'

type Props = { label: string, value: number }

const Stat = (props: Props): Element<'div'> => (
  <div className='col-xs-12 col-sm-6 col-md-4'>
    <article className={styles.card}>
      <p className={styles.label}>{props.label}</p>
      <strong className={styles.value}>
        {props.value.toLocaleString()}
      </strong>
    </article>
  </div>
)

export default Stat

// @flow
import React, { type Element } from 'react'
import { format } from 'date-fns'

import styles from './styles.module.css'

type Props = {
  dateFinish: ?string,
  dateStart: string
}

const ItemTimestamp = (props: Props): Element<'span'> => {
  const dateStart = format(new Date(props.dateStart), 'MMMM y')
  const dateFinish = typeof props.dateFinish === 'string'
    ? format(new Date(props.dateFinish), 'MMMM y')
    : <span className={styles.currentPosition}>Now</span>

  return (
    <span className={styles.timestamp}>{dateStart} – {dateFinish}</span>
  )
}

export default ItemTimestamp

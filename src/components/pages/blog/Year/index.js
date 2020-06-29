// @flow
import React from 'react'

import styles from './styles.module.css'

type Props = {
  year: string
}

const Year = (props: Props) => (
  <div className='col-xs-12'>
    <h4 className={styles.year}>{props.year}</h4>
  </div>
)

export default Year

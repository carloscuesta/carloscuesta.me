// @flow
import type { Element } from 'react'

import styles from './styles.module.css'

type Props = {
  year: string
}

const Year = (props: Props): Element<'div'> => (
  <div className='col-xs-12'>
    <h2 className={styles.year}>{props.year}</h2>
  </div>
)

export default Year

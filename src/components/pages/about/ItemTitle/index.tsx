import { type ReactNode } from 'react'

import styles from './styles.module.css'

type Props = {
  children: ReactNode
}

const Title = (props: Props) => (
  <p className={styles.title}>
    {props.children}
  </p>
)

export default Title

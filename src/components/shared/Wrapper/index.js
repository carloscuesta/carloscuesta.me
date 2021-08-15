// @flow
import type { Node, Element } from 'react'

import styles from './styles.module.css'

type Props = { children: Node, isCompressed?: boolean }

const Wrapper = (props: Props): Element<'div'> => (
  <div className={props.isCompressed ? styles.wrapperCompressed : styles.wrapper}>
    {props.children}
  </div>
)

export default Wrapper

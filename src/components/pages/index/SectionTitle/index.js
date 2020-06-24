// @flow
import React from 'react'

import styles from './styles.module.css'

type Props = {
  title: string,
  subTitle: string
}

const SectionTitle = (props: Props) => (
  <>
    <h3 className={styles.sectionTitle}>{props.title}</h3>
    <h5 className={styles.sectionSubtitle}>{props.subTitle}</h5>
  </>
)

export default SectionTitle

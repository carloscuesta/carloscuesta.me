// @flow
import React from 'react'

import styles from './styles.module.css'

type Props = {
  title: string,
  subTitle: string
}

const SectionTitle = (props: Props) => (
  <>
    <h4 className={styles.sectionTitle}>{props.title}</h4>
    <h5 className={styles.sectionSubtitle}>{props.subTitle}</h5>
  </>
)

export default SectionTitle

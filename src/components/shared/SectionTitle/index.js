// @flow
import React, { type Node } from 'react'

import styles from './styles.module.css'

type Props = {
  subTitle?: string,
  title: string
}

const SectionTitle = (props: Props): Node => (
  <>
    <h2
      className={[
        styles.sectionTitle,
        !props.subTitle ? styles.sectionTitleMargin : undefined
      ].join(' ')}
    >
      {props.title}
    </h2>
    {props.subTitle &&
      <h3 className={styles.sectionSubtitle}>
        {props.subTitle}
      </h3>}
  </>
)

export default SectionTitle

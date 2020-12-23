// @flow
import React, { type Node } from 'react'

import styles from './styles.module.css'

type Props = {
  subTitle?: string,
  title: string
}

const SectionTitle = (props: Props): Node => (
  <>
    <h4
      className={[
        styles.sectionTitle,
        !props.subTitle ? styles.sectionTitleMargin : undefined
      ].join(' ')}
    >
      {props.title}
    </h4>
    {props.subTitle &&
      <h5 className={styles.sectionSubtitle}>
        {props.subTitle}
      </h5>}
  </>
)

export default SectionTitle

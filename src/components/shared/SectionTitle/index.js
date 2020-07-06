// @flow
import React from 'react'

import styles from './styles.module.css'

type Props = {
  isCentered?: boolean,
  subTitle?: string,
  title: string
}

const SectionTitle = (props: Props) => (
  <>
    <h4 className={[styles.sectionTitle, props.isCentered && styles.isCentered].join(' ')}>
      {props.title}
    </h4>
    {props.subTitle &&
      <h5 className={[styles.sectionSubtitle, props.isCentered && styles.isCentered].join(' ')}>
        {props.subTitle}
      </h5>
    }
  </>
)

export default SectionTitle

// @flow
import React from 'react'

import styles from './styles.module.css'

type Props = {
  image: string,
  title: string
}

const FeaturedImage = (props: Props) => (
  <header>
    <img
      alt={props.title}
      className={`lazyload ${styles.header}`}
      data-src={props.image}
      title={props.title}
    />
  </header>
)

export default FeaturedImage

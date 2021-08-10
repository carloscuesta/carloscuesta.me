// @flow
import React, { type Element } from 'react'

import styles from './styles.module.css'

const SetupImage = (): Element<'img'> => (
  <img
    className={`lazyload ${styles.image}`}
    data-src='https://res.cloudinary.com/carloscuesta/image/upload/v1628605093/setup_qdzbaw.jpg'
    src='https://res.cloudinary.com/carloscuesta/image/upload/s--blnqMrZY--/c_scale,e_blur:100,q_10,w_200/v1628605093/setup_qdzbaw.jpg'
    width={600}
  />
)

export default SetupImage

// @flow
import type { Element } from 'react'

import styles from './styles.module.css'

const SetupImage = (): Element<'img'> => (
  <img
    alt='Carlos Cuesta workspace setup'
    className={`lazyload ${styles.image}`}
    data-src='https://res.cloudinary.com/carloscuesta/image/upload/v1632860558/carloscuesta-setup_ncn4oc.jpg'
    src='https://res.cloudinary.com/carloscuesta/image/upload/s--OSiTKt4L--/c_scale,e_blur:200,q_20,w_504/v1632860558/carloscuesta-setup_ncn4oc.jpg'
    width={2016}
  />
)

export default SetupImage

// @flow
import type { Element } from 'react'

import styles from './styles.module.css'

const SetupImage = (): Element<'img'> => (
  <img
    alt='Carlos Cuesta workspace setup'
    className={`lazyload ${styles.image}`}
    data-src='https://res.cloudinary.com/carloscuesta/image/upload/v1659775881/carloscuesta-setup_z1azyb.jpg'
    src='https://res.cloudinary.com/carloscuesta/image/upload/s--pm3d7vcD--/c_scale,e_blur:200,q_20,w_500/v1659775881/carloscuesta-setup_z1azyb.jpg'
    width={2016}
  />
)

export default SetupImage

// @flow
import React from 'react'

import Wrapper from 'src/components/shared/Wrapper'
import styles from './styles.module.css'

const Biography = () => (
  <section className={styles.biography}>
    <Wrapper>
      <div className='row middle-xs'>
        <div className='col-xs-12 col-sm-6'>
          <h3 className={styles.biographyText}>
            I'm a 24 year old <b>Front End Engineer</b> based in <b>Barcelona</b>,
            working at <a href='https://ulabox.com' rel='noopener noreferrer'><b>Ulabox</b></a>.
            I'm a coding passionate focused on <b>JavaScript</b>, specifically React & React-Native.
            Interested in design, tech and <b>OpenSource</b> ❤️
          </h3>

          <h3 className={styles.biographyText}>
            You can find me on{' '}
            <a href='https://github.com/carloscuesta' target='_blank' rel='noopener noreferrer'>GitHub</a>,{' '}
            <a href='https://twitter.com/crloscuesta' target='_blank' rel='noopener noreferrer'>Twitter</a>{' and '}
            <a href='https://linkedin.com/in/crloscuesta' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
          </h3>
        </div>

        <div className='col-xs-12 col-sm-6'>
          <img
            alt='Carlos Cuesta'
            className={`lazyload ${styles.profilePicture}`}
            data-src='https://res.cloudinary.com/carloscuesta/image/upload/s--bhEud7Xt--/q_80/v1594588508/carloscuesta.jpg'
            src='https://res.cloudinary.com/carloscuesta/image/upload/s--rq7ZUVpY--/c_scale,e_blur:100,h_120,q_10,w_120/v1594588508/carloscuesta.jpg'
          />
        </div>
      </div>
    </Wrapper>
  </section>
)

export default Biography

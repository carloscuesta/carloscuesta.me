// @flow
import React, { type Element } from 'react'

import Wrapper from 'src/components/shared/Wrapper'
import styles from './styles.module.css'

const Biography = (): Element<'section'> => (
  <section>
    <Wrapper>
      <div className='row'>
        <div className='col-xs-12 col-sm-6'>
          <h3 className={styles.text}>
            I'm a 25–year–old Front End Engineer interested in{' '}
            <b>design</b>, <b>under engineering</b> and <b>open source</b>.
            I work remotely at <a href='https://ulabox.com' rel='noopener noreferrer'>Ulabox</a>.
          </h3>

          <h3 className={styles.text}>
            I'm focused on building products with JavaScript, specifically React and React-Native.
          </h3>

          <h3 className={styles.text}>
            When I'm not coding, I'm likely at the gym or surfing the city with my longboard.
          </h3>

          <h3 className={styles.text}>
            You can find me on{' '}
            <a href='https://github.com/carloscuesta' target='_blank' rel='noopener noreferrer'>GitHub</a>,{' '}
            <a href='https://twitter.com/crloscuesta' target='_blank' rel='noopener noreferrer'>Twitter</a>{' and '}
            <a href='https://linkedin.com/in/crloscuesta' target='_blank' rel='noopener noreferrer'>LinkedIn</a>.
          </h3>
        </div>

        <div className='col-xs-12 col-sm-6'>
          <img
            alt='Carlos Cuesta'
            className={`lazyload ${styles.picture}`}
            data-src='https://res.cloudinary.com/carloscuesta/image/upload/s--ekQN9GP_--/c_scale,w_320/v1594588508/carloscuesta.jpg'
            src='https://res.cloudinary.com/carloscuesta/image/upload/s--rq7ZUVpY--/c_scale,e_blur:100,h_120,q_10,w_120/v1594588508/carloscuesta.jpg'
          />
        </div>
      </div>
    </Wrapper>
  </section>
)

export default Biography

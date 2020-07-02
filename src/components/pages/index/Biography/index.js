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
            I'm a 24 years old <b>Front End Engineer</b> based in <b>Barcelona</b>,
            working at <a href='https://ulabox.com' rel='noopener noreferrer'><b>Ulabox</b></a>.
            I'm a coding passionate that is focused on <b>JavaScript</b>, specifically in React & React-Native.
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
            data-src='https://res.cloudinary.com/carloscuesta/image/upload/s--ToCVp7yf--/q_81:420/v1593723466/carloscuesta-avatar.jpg'
            src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
          />
        </div>
      </div>
    </Wrapper>

  </section>
)

export default Biography

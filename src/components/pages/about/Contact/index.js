// @flow
import React, { type Element } from 'react'

import Wrapper from 'src/components/shared/Wrapper'
import SectionTitle from 'src/components/shared/SectionTitle'

import styles from './styles.module.css'

const Contact = (): Element<'section'> => (
  <section>
    <Wrapper>
      <SectionTitle title='Contact me 🙋‍♂️' />

      <div className={styles.contact}>
        <p>Here's a list of useful links where you can get in touch with me:</p>

        <ul>
          <li><a href='mailto:hi@carloscuesta.me' target='_blank' rel='noopener noreferrer'>Email</a></li>
          <li><a href='https://twitter.com/crloscuesta' target='_blank' rel='noopener noreferrer'>Twitter</a></li>
          <li><a href='https://linkedin.com/in/crloscuesta' target='_blank' rel='noopener noreferrer'>Linkedin</a></li>
        </ul>
      </div>
    </Wrapper>
  </section>
)

export default Contact

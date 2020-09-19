// @flow
import React, { type Element } from 'react'

import Wrapper from 'src/components/shared/Wrapper'
import SectionTitle from 'src/components/shared/SectionTitle'
import styles from './styles.module.css'

const Contact = (): Element<'section'> => (
  <section>
    <Wrapper>
      <SectionTitle
        isCentered
        subTitle="Let's make something together."
        title='Contact'
      />

      <div className={styles.wrapper}>
        <p className={styles.text}>
          Feel free to send me an email if you're looking for a front end engineer,
          have a question or just want to say hi! 🙋‍♂️
        </p>

        <p className={styles.text}>
          <a href='mailto:hi@carloscuesta.me' target='_blank' rel='noopener noreferrer'>hi@carloscuesta.me</a>
        </p>
      </div>
    </Wrapper>
  </section>
)

export default Contact

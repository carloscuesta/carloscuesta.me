// @flow
import type { Element } from 'react'
import Link from 'next/link'

import styles from './styles.module.css'

const WhoAmI = (): Element<'section'> => (
  <section>
    <div className={styles.whoAmI}>
      <p>
        My name is Carlos Cuesta I&#39;m a Front End Engineer based in {' '}
        <b>Barcelona</b> ☀️. I describe myself as a passionate developer who
        loves <b>coding</b>, <b>open source</b>, and the <b>web platform</b> ❤️.
      </p>

      <p>
        Aside from my job, I like to create and <b>contribute</b> to <b>open source</b>{' '}
        projects. That helps me to learn a ton of new stuff, grow as a developer and
        support other open source projects. Also I enjoy writing technical things ✍️ at my {' '}
        <Link href='/blog'><a><b>blog</b></a></Link>.
      </p>

      <p>
        In my free time you can find me longboarding 🛹{' '}, at the gym 🏋️‍♂️, {' '} at the beach 🏖 or on tech <b>meetups</b> and <b>conferences</b> around Barcelona and Europe 🗺
      </p>
    </div>
    <hr />
  </section>
)

export default WhoAmI

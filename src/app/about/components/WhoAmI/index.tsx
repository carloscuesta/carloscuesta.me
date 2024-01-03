import Image from 'next/image'
import Link from 'next/link'

import aboutMePicture from './aboutme.png'

const WhoAmI = () => (
  <section className="space-y-5">
    <p>
      <em>Hey there!</em> 👋. I'm Carlos, a Front End Engineer based in
      Barcelona, that loves to code and build products with a delightful user
      experience.
    </p>

    <p>
      Currently working at{' '}
      <a
        href="https://n26.com"
        className="underline underline-offset-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        N26
      </a>{' '}
      as a Lead Web Engineer, building the digital bank the world loves to use.
      Before that I worked at a grocery startup{' '}
      <a
        href="https://ulabox.com"
        className="underline underline-offset-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ulabox
      </a>
      , the online supermarket.
    </p>

    <p>
      I love working in between product, engineering and developer experience.
      Some things that make me excited are JavaScript, Open Source, CI & CD
      systems, simplicity, automating things and building meaningful
      user-centric products.
    </p>

    <p>
      I was born and raised in Badalona next to the mediterranean sea and come
      from a background of studying Computer Science.
    </p>

    <p>
      Outside of work, I'm obsessed with sports, doing open source and{' '}
      <Link className="underline underline-offset-2" href="/photos">
        travelling
      </Link>{' '}
      with my family.
    </p>

    <Image
      src={aboutMePicture}
      alt="Carlos Cuesta About me"
      className="pt-5"
      priority
    />
  </section>
)

export default WhoAmI

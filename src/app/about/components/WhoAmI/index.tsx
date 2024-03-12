import Link from 'next/link'
import localFont from 'next/font/local'

import Polaroid from './Polaroid'

const font = localFont({
  src: [
    {
      path: '../../../../../public/fonts/gloria-hallelujah.woff2',
      style: 'normal',
    },
  ],
  weight: '400',
  display: 'swap',
  declarations: [
    {
      prop: 'unicode-range',
      value:
        'U+00??, U+0131, U+0152-0153, U+02bb-02bc, U+02c6, U+02da, U+02dc, U+2000-206f, U+2074, U+20ac, U+2122, U+2191, U+2193, U+2212, U+2215, U+feff, U+fffd',
    },
  ],
})

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

    <div className={`flex gap-0 lg:gap-6 lg:flex-wrap ${font.className}`}>
      <Polaroid
        label="Wife & I ❣️"
        src={require('./images/family.jpg')}
        rotation="-3"
      />
      <Polaroid
        label="Miami '23 🏖️"
        src={require('./images/miami.jpg')}
        rotation="1"
      />
      <div className="hidden sm:block">
        <Polaroid
          label="Longboard 🛹"
          src={require('./images/longboard.jpg')}
          rotation="-2"
        />
      </div>
    </div>
  </section>
)

export default WhoAmI

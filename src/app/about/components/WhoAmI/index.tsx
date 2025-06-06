import Link from 'next/link'
import localFont from 'next/font/local'

import cn from 'src/utils/cn'
import Polaroid from './Polaroid'
import family from './images/family.jpg'
import miami from './images/miami.jpg'
import longboard from './images/longboard.jpg'

const gloria = localFont({
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
        href="https://apple.com"
        className="underline underline-offset-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        Apple
      </a>{' '}
      as a Senior Software Engineer. Before that I worked at N26, building the
      digital bank the world loves to use.
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

    <div
      className={cn('py-4 flex gap-0 lg:gap-6 lg:flex-wrap', gloria.className)}
    >
      <Polaroid label="Wife & I ❣️" src={family} rotation="-3" />
      <Polaroid label="Miami '23 🏖️" src={miami} rotation="1" />
      <div className="hidden sm:block">
        <Polaroid label="Longboard 🛹" src={longboard} rotation="-2" />
      </div>
    </div>
  </section>
)

export default WhoAmI

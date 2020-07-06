// @flow
import React from 'react'
import { NextSeo, SocialProfileJsonLd } from 'next-seo'

import Experience from 'src/components/pages/about/Experience'
import Education from 'src/components/pages/about/Education'

const About = () => (
  <>
    <NextSeo
      canonical='https://carloscuesta.me/about'
      title='Carlos Cuesta – About me'
    />
    <SocialProfileJsonLd
      type='Person'
      name='Carlos Cuesta'
      url='https://carloscuesta.me'
      sameAs={[
        'http://instagram.com/crloscuesta',
        'https://github.com/carloscuesta',
        'https://twitter.com/crloscuesta',
        'https://www.linkedin.com/in/crloscuesta'
      ]}
    />
    <main>
      <Experience />
      <Education />
    </main>
  </>
)

export default About

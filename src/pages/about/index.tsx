import { NextSeo, SocialProfileJsonLd } from 'next-seo'

import PageTitle from 'src/components/shared/PageTitle'
import Wrapper from 'src/components/shared/Wrapper'
import Experience from 'src/components/pages/about/Experience'
import Education from 'src/components/pages/about/Education'
import WhoAmI from 'src/components/pages/about/WhoAmI'

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
      <Wrapper>
        <PageTitle title='About' />

        <WhoAmI />
        <Experience />
        <Education />
      </Wrapper>
    </main>
  </>
)

export default About

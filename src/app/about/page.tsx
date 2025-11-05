import { ProfilePageJsonLd } from 'next-seo'
import { type Metadata } from 'next'

import Wrapper from 'src/components/Wrapper'
import PageTitle from 'src/components/PageTitle'
import Experience from './components/Experience'
import Online from './components/Online'
import WhoAmI from './components/WhoAmI'
import Travelling from './components/Travelling'

export const metadata: Metadata = {
  title: 'About me',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    url: '/about',
  },
}

const About = () => (
  <Wrapper>
    <main>
      <ProfilePageJsonLd
        mainEntity={{
          name: 'Carlos Cuesta',
          image: 'https://carloscuesta.me/images/carloscuesta.jpg',
          sameAs: [
            'https://carloscuesta.me',
            'https://github.com/carloscuesta',
            'https://twitter.com/crloscuesta',
            'https://www.linkedin.com/in/crloscuesta',
          ],
        }}
      />

      <PageTitle title="About me" />
      <WhoAmI />
      <Online />
      <Experience />
      <Travelling />
    </main>
  </Wrapper>
)

export default About

import { SocialProfileJsonLd } from 'next-seo'

import Wrapper from 'src/components/Wrapper'
import PageTitle from 'src/components/PageTitle'
import Experience from './components/Experience'
import Online from './components/Online'
import WhoAmI from './components/WhoAmI'
import Travelling from './components/Travelling'

export const metadata = {
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
      <SocialProfileJsonLd
        useAppDir={true}
        type="Person"
        name="Carlos Cuesta"
        url="https://carloscuesta.me"
        sameAs={[
          'https://github.com/carloscuesta',
          'https://twitter.com/crloscuesta',
          'https://www.linkedin.com/in/crloscuesta',
        ]}
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

import { type Metadata } from 'next'
import Image from 'next/image'

import PageTitle from 'src/components/PageTitle'
import Wrapper from 'src/components/Wrapper'
import Workspace from './components/Workspace'

export const metadata: Metadata = {
  title: 'Uses',
  alternates: {
    canonical: '/uses',
  },
}

const Uses = () => (
  <Wrapper>
    <main>
      <PageTitle title="Uses" />

      <div>
        <Image
          src={require('./setup.jpg')}
          alt="Carlos Cuesta workspace setup"
          className="max-w-full rounded-md"
          placeholder="blur"
          width={1500}
          height={1232}
          quality={100}
        />

        <Workspace />
      </div>
    </main>
  </Wrapper>
)

export default Uses

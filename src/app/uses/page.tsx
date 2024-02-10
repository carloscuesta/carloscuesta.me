import { type Metadata } from 'next'

import PageTitle from 'src/components/PageTitle'
import Wrapper from 'src/components/Wrapper'
import Workspace from './components/Workspace'
import Photos from './components/Photos'

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

      <Photos />
      <Workspace />
    </main>
  </Wrapper>
)

export default Uses

import renderer from 'react-test-renderer'

import Index from '../index'
import * as stubs from './stubs'

jest.mock('next-seo', () => ({
  SocialProfileJsonLd: 'SocialProfileJsonLd',
}))
jest.mock('src/utils/api/blog')
jest.mock('src/utils/api/github')

/*
  I'm mocking the components since those are unit tested.
  So there's no point to test the rendering of them twice.
  It's more easier to manage little snapshots than big ones.
*/
jest.mock('src/components/SectionTitle', () => 'SectionTitle')
jest.mock('src/components/PageTitle', () => 'PageTitle')
jest.mock('../components/Biography', () => 'Biography')
jest.mock('../components/Projects', () => 'Projects')
jest.mock('../components/Writings', () => 'Writings')

describe('index', () => {
  describe('page', () => {
    it('should match index page', () => {
      const wrapper = renderer.create(<Index {...stubs.props} />)

      expect(wrapper).toMatchSnapshot()
    })
  })
})

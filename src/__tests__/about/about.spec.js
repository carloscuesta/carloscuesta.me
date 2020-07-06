import renderer from 'react-test-renderer'

import About from 'src/pages/about'

jest.mock('next-seo', () => ({ NextSeo: 'NextSeo', SocialProfileJsonLd: 'SocialProfileJsonLd' }))

/*
  I'm mocking the components since those are unit tested.
  So there's no point to test the rendering of them twice.
  It's more easier to manage little snapshots than big ones.
*/

jest.mock('src/components/pages/about/Contact', () => 'Contact')
jest.mock('src/components/pages/about/Education', () => 'Education')
jest.mock('src/components/pages/about/Experience', () => 'Experience')
jest.mock('src/components/pages/about/ItemTimestamp', () => 'ItemTimestamp')
jest.mock('src/components/pages/about/ItemTitle', () => 'ItemTitle')
jest.mock('src/components/pages/about/WhoAmI', () => 'WhoAmI')

describe('about', () => {
  describe('page', () => {
    it('should match about page', () => {
      const wrapper = renderer.create(<About />)

      expect(wrapper).toMatchSnapshot()
    })
  })
})

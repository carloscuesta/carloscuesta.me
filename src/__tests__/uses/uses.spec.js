import renderer from 'react-test-renderer'

import Uses from 'src/pages/uses'

jest.mock('next-seo', () => ({ NextSeo: 'NextSeo' }))

/*
  I'm mocking the components since those are unit tested.
  So there's no point to test the rendering of them twice.
  It's more easier to manage little snapshots than big ones.
*/
jest.mock('src/components/pages/uses/Section', () => 'Section')

describe('uses', () => {
  describe('page', () => {
    it('should match uses page', () => {
      const wrapper = renderer.create(<Uses />)

      expect(wrapper).toMatchSnapshot()
    })
  })
})

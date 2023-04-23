import renderer from 'react-test-renderer'

import Error404 from 'src/pages/404'

/*
  I'm mocking the components since those are unit tested.
  So there's no point to test the rendering of them twice.
  It's more easier to manage little snapshots than big ones.
*/

jest.mock('src/components/Wrapper', () => 'Wrapper')

describe('404', () => {
  describe('page', () => {
    it('should match Error 404 page', () => {
      const wrapper = renderer.create(<Error404 />)

      expect(wrapper).toMatchSnapshot()
    })
  })
})

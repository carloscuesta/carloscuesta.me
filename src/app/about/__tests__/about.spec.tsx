import renderer from 'react-test-renderer'

import About from '../page'

/*
  I'm mocking the components since those are unit tested.
  So there's no point to test the rendering of them twice.
  It's more easier to manage little snapshots than big ones.
*/
jest.mock('../components/Experience', () => 'Experience')
jest.mock('../components/WhoAmI', () => 'WhoAmI')

describe('about', () => {
  describe('page', () => {
    it('should match about page', () => {
      const wrapper = renderer.create(<About />)

      expect(wrapper).toMatchSnapshot()
    })
  })
})

import renderer from 'react-test-renderer'

import Contact from '../index'

describe('Contact', () => {
  it('should match Contact component', () => {
    const wrapper = renderer.create(<Contact />)

    expect(wrapper).toMatchSnapshot()
  })
})

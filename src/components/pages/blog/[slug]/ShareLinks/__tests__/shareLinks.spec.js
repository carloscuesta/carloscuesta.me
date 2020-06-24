import renderer from 'react-test-renderer'

import ShareLinks from '../index'

describe('ShareLinks', () => {
  it('should match ShareLinks component', () => {
    const wrapper = renderer.create(<ShareLinks />)

    expect(wrapper).toMatchSnapshot()
  })
})

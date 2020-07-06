import renderer from 'react-test-renderer'

import WhoAmI from '../index'

describe('WhoAmI', () => {
  it('should match WhoAmI component', () => {
    const wrapper = renderer.create(<WhoAmI />)

    expect(wrapper).toMatchSnapshot()
  })
})

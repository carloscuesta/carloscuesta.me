import renderer from 'react-test-renderer'

import Biography from '../index'

describe('Biography', () => {
  it('should match Biography component', () => {
    const wrapper = renderer.create(<Biography />)

    expect(wrapper).toMatchSnapshot()
  })
})

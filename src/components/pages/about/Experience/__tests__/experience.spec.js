import renderer from 'react-test-renderer'

import Experience from '../index'

describe('Experience', () => {
  it('should match Experience component', () => {
    const wrapper = renderer.create(<Experience />)

    expect(wrapper).toMatchSnapshot()
  })
})

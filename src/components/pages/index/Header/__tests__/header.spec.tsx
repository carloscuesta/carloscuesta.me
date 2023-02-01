import renderer from 'react-test-renderer'

import Header from '../index'

describe('Header', () => {
  it('should match Header component', () => {
    const wrapper = renderer.create(<Header />)

    expect(wrapper).toMatchSnapshot()
  })
})

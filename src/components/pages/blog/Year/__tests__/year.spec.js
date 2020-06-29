import renderer from 'react-test-renderer'

import Year from '../index'

describe('Year', () => {
  it('should match Year component', () => {
    const wrapper = renderer.create(<Year year={2020} />)

    expect(wrapper).toMatchSnapshot()
  })
})

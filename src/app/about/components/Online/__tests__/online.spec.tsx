import renderer from 'react-test-renderer'

import Online from '../'

describe('Online', () => {
  it('should render the component', () => {
    const wrapper = renderer.create(<Online />)

    expect(wrapper).toMatchSnapshot()
  })
})

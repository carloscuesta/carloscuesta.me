import renderer from 'react-test-renderer'

import SetupImage from '../index'

describe('SetupImage', () => {
  it('should match SetupImage component', () => {
    const wrapper = renderer.create(<SetupImage />)

    expect(wrapper).toMatchSnapshot()
  })
})

import renderer from 'react-test-renderer'

import ShareLinks from '../index'
import * as stubs from './stubs'

describe('ShareLinks', () => {
  it('should match ShareLinks component', () => {
    const wrapper = renderer.create(<ShareLinks {...stubs.props} />)

    expect(wrapper).toMatchSnapshot()
  })
})

import renderer from 'react-test-renderer'

import Stats from '../index'
import * as stubs from './stubs'

describe('Stats', () => {
  it('should match Stats component', () => {
    const wrapper = renderer.create(<Stats {...stubs.props} />)

    expect(wrapper).toMatchSnapshot()
  })
})

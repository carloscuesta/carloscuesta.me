import renderer from 'react-test-renderer'

import OpenSource from '../index'
import * as stubs from './stubs'

describe('OpenSource', () => {
  it('should match OpenSource component', () => {
    const wrapper = renderer.create(<OpenSource {...stubs.props} />)

    expect(wrapper).toMatchSnapshot()
  })
})

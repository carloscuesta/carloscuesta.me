import renderer from 'react-test-renderer'

import Section from '../index'
import * as stubs from './stubs'

describe('Section', () => {
  it('should match Section component', () => {
    const wrapper = renderer.create(<Section {...stubs.props} />)

    expect(wrapper).toMatchSnapshot()
  })
})

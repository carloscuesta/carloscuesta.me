import renderer from 'react-test-renderer'

import SectionTitle from '../index'
import * as stubs from './stubs'

describe('SectionTitle', () => {
  it('should match SectionTitle component', () => {
    const wrapper = renderer.create(<SectionTitle {...stubs.props} />)

    expect(wrapper).toMatchSnapshot()
  })
})

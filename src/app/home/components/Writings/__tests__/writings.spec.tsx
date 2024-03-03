import renderer from 'react-test-renderer'

import Writings from '../index'
import * as stubs from './stubs'

describe('Writings', () => {
  it('should match Writings component', () => {
    const wrapper = renderer.create(<Writings {...stubs.props} />)

    expect(wrapper).toMatchSnapshot()
  })
})

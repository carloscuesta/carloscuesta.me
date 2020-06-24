import renderer from 'react-test-renderer'

import Header from '../index'
import * as stubs from './stubs'

describe('Header', () => {
  it('should match Header component', () => {
    const wrapper = renderer.create(<Header {...stubs.props} />)

    expect(wrapper).toMatchSnapshot()
  })
})

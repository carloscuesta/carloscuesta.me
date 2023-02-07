import renderer from 'react-test-renderer'

import FeaturedImage from '../index'
import * as stubs from './stubs'

describe('FeaturedImage', () => {
  it('should match FeaturedImage component', () => {
    const wrapper = renderer.create(<FeaturedImage {...stubs.props} />)

    expect(wrapper).toMatchSnapshot()
  })
})

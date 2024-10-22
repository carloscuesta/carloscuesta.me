import { render } from '@testing-library/react'

import FeaturedImage from '../index'
import * as stubs from './stubs'

describe('FeaturedImage', () => {
  it('should match FeaturedImage component', () => {
    const { container } = render(<FeaturedImage {...stubs.props} />)

    expect(container).toMatchSnapshot()
  })
})

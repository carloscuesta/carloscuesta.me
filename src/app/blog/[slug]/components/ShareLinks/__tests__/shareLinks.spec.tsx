import { render } from '@testing-library/react'

import ShareLinks from '../index'
import * as stubs from './stubs'

describe('ShareLinks', () => {
  it('should match ShareLinks component', () => {
    const { container } = render(<ShareLinks {...stubs.props} />)

    expect(container).toMatchSnapshot()
  })
})

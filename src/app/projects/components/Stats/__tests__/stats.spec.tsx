import { render } from '@testing-library/react'

import Stats from '../index'
import * as stubs from './stubs'

describe('Stats', () => {
  it('should match Stats component', () => {
    const { container } = render(<Stats {...stubs.props} />)

    expect(container).toMatchSnapshot()
  })
})

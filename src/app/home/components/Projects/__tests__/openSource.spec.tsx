import { render } from '@testing-library/react'

import OpenSource from '../index'
import * as stubs from './stubs'

describe('OpenSource', () => {
  it('should match OpenSource component', () => {
    const { container } = render(<OpenSource {...stubs.props} />)

    expect(container).toMatchSnapshot()
  })
})

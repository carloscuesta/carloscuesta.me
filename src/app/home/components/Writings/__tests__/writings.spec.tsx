import { render } from '@testing-library/react'

import Writings from '../index'
import * as stubs from './stubs'

describe('Writings', () => {
  it('should match Writings component', () => {
    const { container } = render(<Writings {...stubs.props} />)

    expect(container).toMatchSnapshot()
  })
})

import { render } from '@testing-library/react'

import Repositories from '../index'
import * as stubs from './stubs'

describe('Repositories', () => {
  it('should match Repositories component', () => {
    const { container } = render(<Repositories {...stubs.props} />)

    expect(container).toMatchSnapshot()
  })
})

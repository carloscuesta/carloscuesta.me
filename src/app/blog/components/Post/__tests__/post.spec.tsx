import { render } from '@testing-library/react'

import Post from '../'
import * as stubs from './stubs'

describe('Post', () => {
  it('should render the component', () => {
    const { container } = render(<Post post={stubs.post} />)

    expect(container).toMatchSnapshot()
  })
})

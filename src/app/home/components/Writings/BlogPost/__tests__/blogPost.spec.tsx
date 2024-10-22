import { render } from '@testing-library/react'

import BlogPost from '../index'
import * as stubs from './stubs'

describe('BlogPost', () => {
  it('should match BlogPost component', () => {
    const { container } = render(<BlogPost {...stubs.props} />)

    expect(container).toMatchSnapshot()
  })
})

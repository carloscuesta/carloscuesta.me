import { render } from '@testing-library/react'

import NewsletterSubscribe from '../index'

describe('NewsletterSubscribe', () => {
  it('should match NewsletterSubscribe component', () => {
    const { container } = render(<NewsletterSubscribe />)

    expect(container).toMatchSnapshot()
  })
})

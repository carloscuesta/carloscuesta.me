import renderer from 'react-test-renderer'

import NewsletterSubscribe from '../index'

describe('NewsletterSubscribe', () => {
  it('should match NewsletterSubscribe component', () => {
    const wrapper = renderer.create(<NewsletterSubscribe />)

    expect(wrapper).toMatchSnapshot()
  })
})

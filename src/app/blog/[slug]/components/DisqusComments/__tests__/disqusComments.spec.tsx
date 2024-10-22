import { render } from '@testing-library/react'
import { useInView } from 'react-intersection-observer'

import DisqusComments from '../index'
import * as stubs from './stubs'

jest.mock('react-intersection-observer', () => ({
  useInView: jest.fn().mockReturnValue([jest.fn(), false]),
}))

jest.mock('disqus-react', () => ({
  DiscussionEmbed: 'DiscussionEmbed',
}))

describe('DisqusComments', () => {
  it('should call useInView with the following options', () => {
    render(<DisqusComments {...stubs.props} />)

    expect(useInView).toHaveBeenCalledWith({
      rootMargin: '440px',
      triggerOnce: true,
    })
  })

  describe('when the component is not in viewport', () => {
    it('should not render the Disqus component', () => {
      const { container } = render(<DisqusComments {...stubs.props} />)

      expect(container).toMatchSnapshot()
    })
  })

  describe('when the component is in viewport', () => {
    beforeAll(() => {
      ;(useInView as jest.Mock).mockReturnValue([jest.fn(), true])
    })

    it('should render the Disqus component', () => {
      const { container } = render(<DisqusComments {...stubs.props} />)

      expect(container).toMatchSnapshot()
    })
  })
})

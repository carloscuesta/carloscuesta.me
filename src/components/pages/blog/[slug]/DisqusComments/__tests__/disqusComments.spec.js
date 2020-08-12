import React from 'react'
import renderer from 'react-test-renderer'
import { useInView } from 'react-intersection-observer'

import DisqusComments from '../index'
import * as stubs from './stubs'

jest.mock('react-intersection-observer', () => ({
  useInView: jest.fn().mockReturnValue([jest.fn(), false])
}))

describe('DisqusComments', () => {
  it('should call useInView with the following options', () => {
    renderer.create(<DisqusComments {...stubs.props} />)

    expect(useInView).toHaveBeenCalledWith({
      rootMargin: '440px',
      triggerOnce: true
    })
  })

  describe('when the component is not in viewport', () => {
    it('should not render the Disqus component', () => {
      const wrapper = renderer.create(<DisqusComments {...stubs.props} />)

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('when the component is in viewport', () => {
    beforeAll(() => {
      useInView.mockReturnValue([jest.fn(), true])
    })

    it('should render the Disqus component', () => {
      const wrapper = renderer.create(<DisqusComments {...stubs.props} />)

      expect(wrapper).toMatchSnapshot()
    })
  })
})

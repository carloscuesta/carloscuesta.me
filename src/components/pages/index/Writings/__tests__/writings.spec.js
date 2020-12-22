import renderer from 'react-test-renderer'

import Writings from '../index'
import * as stubs from './stubs'

describe('Writings', () => {
  it('should match Writings component', () => {
    const wrapper = renderer.create(<Writings {...stubs.props} />)

    expect(wrapper).toMatchSnapshot()
  })

  describe('ScrollButtons', () => {
    describe('on scroll', () => {
      describe('when action is next', () => {
        it('should call scrollTo and move to the next scroll position', () => {
          const scrollablePostsRef = stubs.scrollablePostsRefMock()
          const wrapper = renderer.create(
            <Writings {...stubs.props} />,
            { createNodeMock: () => scrollablePostsRef }
          )

          renderer.act(() => {
            wrapper.root.findAllByType('button')[1].props.onClick()
          })

          expect(scrollablePostsRef.scrollTo).toHaveBeenCalledWith({
            behavior: 'smooth',
            top: 0,
            left: scrollablePostsRef.childNodes[0].offsetWidth
          })
        })
      })

      describe('when action is previous', () => {
        it('should call scrollTo and move to the previous scroll position', () => {
          const scrollablePostsRef = stubs.scrollablePostsRefMock()
          const wrapper = renderer.create(
            <Writings {...stubs.props} />,
            { createNodeMock: () => scrollablePostsRef }
          )

          renderer.act(() => {
            wrapper.root.findAllByType('button')[1].props.onClick()
            wrapper.root.findAllByType('button')[0].props.onClick()
          })

          expect(scrollablePostsRef.scrollTo).toHaveBeenCalledWith({
            behavior: 'smooth',
            top: 0,
            left: -scrollablePostsRef.childNodes[0].offsetWidth
          })
        })
      })
    })

    describe('when user has not scrolled', () => {
      it('should disable the Back button', () => {
        const wrapper = renderer.create(<Writings {...stubs.props} />)

        expect(wrapper.root.findAllByType('button')[0].props.disabled).toBe(true)
      })
    })

    describe('when user has scrolled', () => {
      beforeEach(() => {
        jest.clearAllTimers()
      })

      describe('when the scrollPosition is equal to 0', () => {
        it('should disable the Back button', () => {
          const scrollablePostsRef = stubs.scrollablePostsRefMock()
          const wrapper = renderer.create(
            <Writings {...stubs.props} />,
            { createNodeMock: () => scrollablePostsRef }
          )

          expect(wrapper.root.findAllByType('button')[0].props.disabled).toBe(true)
        })
      })

      describe('when the scrollPosition is bigger than 0', () => {
        it('should enable the Back button', () => {
          const scrollablePostsRef = stubs.scrollablePostsRefMock()
          const wrapper = renderer.create(
            <Writings {...stubs.props} />,
            { createNodeMock: () => scrollablePostsRef }
          )

          renderer.act(() => {
            jest.useFakeTimers()
            wrapper.root.findByProps({ className: 'row scrollablePosts' }).props.onScroll(
              stubs.scrollEventMock(350)
            )
            jest.runAllTimers()
          })

          expect(wrapper.root.findAllByType('button')[0].props.disabled).toBe(false)
        })
      })

      describe('when the scrollPosition is equal to scrollPositionMaxWidth', () => {
        it('should disable the Next button', () => {
          const scrollablePostsRef = {
            ...stubs.scrollablePostsRefMock(),
            scrollWidth: 1350,
            clientWidth: 1000
          }

          const wrapper = renderer.create(
            <Writings {...stubs.props} />,
            { createNodeMock: () => scrollablePostsRef }
          )

          renderer.act(() => {
            jest.useFakeTimers()
            wrapper.root.findByProps({ className: 'row scrollablePosts' }).props.onScroll(
              stubs.scrollEventMock(scrollablePostsRef.scrollWidth - scrollablePostsRef.clientWidth)
            )
            jest.runAllTimers()
          })

          expect(wrapper.root.findAllByType('button')[1].props.disabled).toBe(true)
        })
      })
    })
  })
})

import Router from 'next/router'
import renderer from 'react-test-renderer'

import Layout from '../index'

jest.mock('next/router', () => ({
  pathname: '',
  events: {
    on: jest.fn(),
    off: jest.fn()
  },
  useRouter: () => ({
    pathname: '',
    events: {
      on: jest.fn(),
      off: jest.fn()
    }
  })
}))

describe('Layout', () => {
  it('should render the Layout with children', () => {
    const wrapper = renderer.create(
      <Layout>
        <h1>Some children</h1>
        <h2>Hello!</h2>
      </Layout>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should subscribe to routeChangeStart using Router.events listener on mount', () => {
    renderer.create(
      <Layout>
        <h1>Some children</h1>
        <h2>Hello!</h2>
      </Layout>
    )

    expect(Router.events.on).toHaveBeenCalledWith(
      'routeChangeStart',
      expect.any(Function)
    )
  })

  it('should unsubscribe to routeChangeStart using Router.events on unMount', () => {
    const wrapper = renderer.create(
      <Layout>
        <h1>Some children</h1>
        <h2>Hello!</h2>
      </Layout>
    )

    wrapper.unmount()

    expect(Router.events.on).toHaveBeenCalledWith(
      'routeChangeStart',
      expect.any(Function)
    )
  })

  describe('Hamburguer', () => {
    describe('when the menu is closed', () => {
      describe('when user clicks on the icon', () => {
        it('should open the navigation menu', () => {
          const wrapper = renderer.create(
            <Layout>
              <h1>Some children</h1>
              <h2>Hello!</h2>
            </Layout>
          )

          renderer.act(() => {
            wrapper.root.findAllByType('button')[0].props.onClick()
          })

          expect(wrapper.root.findAllByType('nav').length).toBe(2)
        })
      })
    })

    describe('when the menu is opened', () => {
      describe('when user clicks on the icon', () => {
        it('should close the navigation menu', () => {
          const wrapper = renderer.create(
            <Layout>
              <h1>Some children</h1>
              <h2>Hello!</h2>
            </Layout>
          )

          renderer.act(() => {
            wrapper.root.findAllByType('button')[0].props.onClick()
          })

          renderer.act(() => {
            wrapper.root.findAllByType('button')[1].props.onClick()
          })

          expect(wrapper.root.findAllByType('nav').length).toBe(1)
        })
      })
    })
  })
})

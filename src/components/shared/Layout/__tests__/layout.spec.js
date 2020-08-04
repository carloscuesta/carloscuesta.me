import Router from 'next/router'
import renderer from 'react-test-renderer'

import Layout from '../index'

jest.mock('next/router', () => ({
  pathname: '',
  events: {
    on: jest.fn(),
    off: jest.fn()
  }
}))

Router.useRouter = () => ({
  pathname: '',
  events: {
    off: jest.fn(),
    on: jest.fn()
  }
})

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
})

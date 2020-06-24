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
})

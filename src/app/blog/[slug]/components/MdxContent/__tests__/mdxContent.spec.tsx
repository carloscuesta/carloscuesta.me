import renderer from 'react-test-renderer'

import MdxContent from '../index'
import * as stubs from './stubs'

jest.mock('next-mdx-remote/rsc', () => ({
  MDXRemote: ({ source }: { source: string }) => <div>{source}</div>,
}))

describe('Header', () => {
  it('should match MdxContent component', () => {
    const wrapper = renderer.create(<MdxContent {...stubs.props} />)

    expect(wrapper).toMatchSnapshot()
  })
})

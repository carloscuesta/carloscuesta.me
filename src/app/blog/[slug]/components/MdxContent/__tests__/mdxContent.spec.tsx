import { render } from '@testing-library/react'

import MdxContent from '../index'
import * as stubs from './stubs'

jest.mock('next-mdx-remote/rsc', () => ({
  MDXRemote: ({ source }: { source: string }) => <div>{source}</div>,
}))

describe('Header', () => {
  it('should match MdxContent component', () => {
    const { container } = render(<MdxContent {...stubs.props} />)

    expect(container).toMatchSnapshot()
  })
})

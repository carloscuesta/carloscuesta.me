import renderer from 'react-test-renderer'

import Document from 'src/pages/_document'

jest.mock('next/document', () => ({
  __esModule: true,
  default: require('react').Component,
  Head: ({ children }) => <head>{children}</head>,
  Html: ({ children }) => children,
  Main: () => <main />,
  NextScript: () => 'NextScript'
}))

describe('_document', () => {
  it('should match _document', () => {
    const wrapper = renderer.create(<Document />)

    expect(wrapper).toMatchSnapshot()
  })
})

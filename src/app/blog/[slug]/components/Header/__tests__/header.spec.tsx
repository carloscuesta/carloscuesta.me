import { render } from '@testing-library/react'

import Header from '../index'
import * as stubs from './stubs'

jest.mock('../ViewsCount', () => 'div')

describe('Header', () => {
  it('should match Header component', () => {
    const { container } = render(<Header {...stubs.props} />)

    expect(container).toMatchSnapshot()
  })
})

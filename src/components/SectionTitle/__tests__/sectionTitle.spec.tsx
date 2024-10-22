import { render } from '@testing-library/react'

import SectionTitle from '../index'
import * as stubs from './stubs'

describe('SectionTitle', () => {
  describe('with title and subtitle', () => {
    it('should match SectionTitle component', () => {
      const { container } = render(<SectionTitle {...stubs.props} />)

      expect(container).toMatchSnapshot()
    })
  })

  describe('with title, subtitle and viewAllLink', () => {
    it('should match SectionTitle component', () => {
      const { container } = render(<SectionTitle {...stubs.propsWithLink} />)

      expect(container).toMatchSnapshot()
    })
  })

  describe('with title only', () => {
    it('should match SectionTitle component', () => {
      const { container } = render(<SectionTitle title="Test" />)

      expect(container).toMatchSnapshot()
    })
  })
})

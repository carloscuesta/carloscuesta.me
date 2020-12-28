import renderer from 'react-test-renderer'

import SectionTitle from '../index'
import * as stubs from './stubs'

describe('SectionTitle', () => {
  describe('with title and subtitle', () => {
    it('should match SectionTitle component', () => {
      const wrapper = renderer.create(<SectionTitle {...stubs.props} />)

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('with title, subtitle and viewAllLink', () => {
    it('should match SectionTitle component', () => {
      const wrapper = renderer.create(<SectionTitle {...stubs.propsWithLink} />)

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('with title only', () => {
    it('should match SectionTitle component', () => {
      const wrapper = renderer.create(<SectionTitle title='Test' />)

      expect(wrapper).toMatchSnapshot()
    })
  })
})

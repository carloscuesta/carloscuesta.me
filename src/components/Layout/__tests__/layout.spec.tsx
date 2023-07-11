import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import renderer from 'react-test-renderer'

import Layout from '../index'

jest.mock('body-scroll-lock')

describe('Layout', () => {
  it('should render the Layout with children', () => {
    const wrapper = renderer.create(
      <Layout>
        <h1>Some children</h1>
        <h2>Hello!</h2>
      </Layout>,
    )

    expect(wrapper).toMatchSnapshot()
  })

  describe('Hamburguer', () => {
    describe('when the menu is closed', () => {
      describe('when user clicks on the icon', () => {
        it('should open the navigation menu and lock the body scroll', () => {
          const wrapper = renderer.create(
            <Layout>
              <h1>Some children</h1>
              <h2>Hello!</h2>
            </Layout>,
          )

          renderer.act(() => {
            wrapper.root.findAllByType('button')[0].props.onClick()
          })

          expect(disableBodyScroll).toHaveBeenCalledWith(document.body)
          expect(wrapper.root.findAllByType('nav').length).toBe(2)
        })
      })
    })

    describe('when the menu is opened', () => {
      describe('when user clicks on the icon', () => {
        it('should close the navigation menu and release the scroll', () => {
          const wrapper = renderer.create(
            <Layout>
              <h1>Some children</h1>
              <h2>Hello!</h2>
            </Layout>,
          )

          renderer.act(() => {
            wrapper.root.findAllByType('button')[0].props.onClick()
          })

          renderer.act(() => {
            wrapper.root.findAllByType('button')[1].props.onClick()
          })

          expect(enableBodyScroll).toHaveBeenCalledWith(document.body)
          expect(wrapper.root.findAllByType('nav').length).toBe(1)
        })
      })
    })
  })
})

import { act, render, screen } from '@testing-library/react'

import Layout from '../index'

describe('Layout', () => {
  beforeAll(() => {
    jest.useFakeTimers()
    jest.setSystemTime(new Date(2023, 1, 1))
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  it('should render the Layout with children', () => {
    const { container } = render(
      <Layout>
        <h1>Some children</h1>
        <h2>Hello!</h2>
      </Layout>,
    )

    expect(container).toMatchSnapshot()
  })

  describe('Hamburguer', () => {
    describe('when the menu is closed', () => {
      describe('when user clicks on the icon', () => {
        it('should open the navigation menu', async () => {
          render(
            <Layout>
              <h1>Some children</h1>
              <h2>Hello!</h2>
            </Layout>,
          )

          act(() => {
            screen.getByLabelText('Open navigation menu').click()
          })

          expect(screen.getByLabelText('Close navigation menu')).toBeVisible()
        })
      })
    })

    describe('when the menu is opened', () => {
      describe('when user clicks on the icon', () => {
        it('should close the navigation menu', async () => {
          render(
            <Layout>
              <h1>Some children</h1>
              <h2>Hello!</h2>
            </Layout>,
          )

          act(() => {
            screen.getByLabelText('Open navigation menu').click()
          })

          act(() => {
            screen.getByLabelText('Close navigation menu').click()
          })

          expect(screen.getByLabelText('Open navigation menu')).toBeVisible()
        })
      })
    })
  })
})

import React from 'react'
import {render, fireEvent, screen, wait} from '@testing-library/react'
import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'
import BurguerBuilder from './BurguerBuilder'

describe('BurguerBuilder', () => {
  it('when user select at least one ingredient, then it can order a burguer', async () => {
    const {getByTestId, getByRole, queryByText} = render(<BurguerBuilder />)

    await wait(() => {
      const moreQuantitySaladButton = getByTestId('more-quantity-Salad')
      fireEvent.click(moreQuantitySaladButton)
    })

    const orderNowButton = getByRole('button', {name: 'ORDER NOW'})
    fireEvent.click(orderNowButton)

    expect(queryByText('salad: 1')).toBeVisible()
    expect(queryByText('Total Price: 0.50')).toBeVisible()
    expect(queryByText('CONTINUE')).toBeVisible()
  })

  test('User choose two cheese, click on order now and remove one cheese and again click on order now', async () => {
    const {getByRole, getByTestId, queryByText} = render(<BurguerBuilder />)

    await wait(() => {
      const moreQuantityCheeseButton = getByTestId('more-quantity-Cheese')
      fireEvent.click(moreQuantityCheeseButton)
      fireEvent.click(moreQuantityCheeseButton)
    })

    const orderNowButton = getByRole('button', {name: 'ORDER NOW'})
    fireEvent.click(orderNowButton)

    expect(queryByText('cheese: 2')).toBeVisible()
    expect(queryByText('Total Price: 0.80')).toBeVisible()

    const cancelOrderButton = getByRole('button', {name: 'CANCEL'})

    expect(cancelOrderButton)

    fireEvent.click(cancelOrderButton)

    await wait(() => {
      fireEvent.click(getByTestId('less-quantity-Cheese'))
    })

    fireEvent.click(orderNowButton)

    expect(queryByText('cheese: 1')).toBeVisible()
    expect(queryByText('Total Price: 0.40')).toBeVisible()
  })

  test('it should mount burger with cheese, meat and bacon and send the order', async () => {
    const history = createMemoryHistory({initialEntries: ['/', '/checkout']})

    render(
      <Router history={history}>
        <BurguerBuilder />
      </Router>,
    )

    await wait(() => {
      fireEvent.click(screen.getByTestId('more-quantity-Cheese'))
      fireEvent.click(screen.getByTestId('more-quantity-Meat'))
      fireEvent.click(screen.getByTestId('more-quantity-Bacon'))
    })

    const orderNowButton = screen.getByRole('button', {name: 'ORDER NOW'})
    fireEvent.click(orderNowButton)

    expect(screen.queryByText('cheese: 1')).toBeVisible()
    expect(screen.queryByText('meat: 1')).toBeVisible()
    expect(screen.queryByText('bacon: 1')).toBeVisible()
    expect(screen.queryAllByText(/^Total Price/)).toMatchInlineSnapshot(`
      Array [
        <strong>
          Total Price: 
          2.40
        </strong>,
      ]
    `)

    fireEvent.click(screen.getByRole('button', {name: 'CONTINUE'}))
  })
})

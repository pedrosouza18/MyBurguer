import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import BurguerBuilder from './BurguerBuilder'

describe('BurguerBuilder', () => {
  it('when user select at least one ingredient, then it can order a burguer', async () => {
    const {debug, getByTestId, getByRole, queryByText} = render(
      <BurguerBuilder />,
    )

    const moreQuantitySaladButton = getByTestId('more-quantity-Salad')
    fireEvent.click(moreQuantitySaladButton)

    const orderNowButton = getByRole('button', {name: 'ORDER NOW'})
    fireEvent.click(orderNowButton)

    debug()

    expect(queryByText('salad: 1')).toBeVisible()
    expect(queryByText('Total Price: 0.50')).toBeVisible()
    expect(queryByText('CONTINUE')).toBeVisible()
  })
})

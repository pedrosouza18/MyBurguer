import React from 'react'
import {screen, render, wait} from '@testing-library/react'
import Orders from './Orders'

describe('Orders', () => {
  it('should show an order', async () => {
    render(<Orders />)
    await wait(() => {
      expect(screen.getByText(/^salad/i)).toBeVisible()
      expect(screen.queryByText(/^meat/i)).not.toBeNull()
      expect(screen.queryByText(/^cheese/i)).not.toBeNull()
      expect(screen.queryByText(/^bacon/i)).not.toBeNull()
    })
  })

  it('should show an order and check quantities', async () => {
    render(<Orders />)
    await wait(() => {
      expect(screen.getByText(/^salad/i).textContent).toMatchInlineSnapshot(
        `"salad (2)"`,
      )
      expect(screen.queryByText(/^meat/i).textContent).toMatchInlineSnapshot(
        `"meat (2)"`,
      )
      expect(screen.queryByText(/^cheese/i).textContent).toMatchInlineSnapshot(
        `"cheese (2)"`,
      )
      expect(screen.queryByText(/^bacon/i).textContent).toMatchInlineSnapshot(
        `"bacon (2)"`,
      )
    })
  })
})

import React from 'react'
import {render} from '@testing-library/react'

import BurgerIngredients from './BurguerIngredients'

describe('Tests about burger ingredient component', () => {
  test('should show meat ingredient', () => {
    const {queryByTitle} = render(<BurgerIngredients type="meat" />)
    const meat = queryByTitle(/meat/i)
    expect(meat).not.toBeNull()
  })

  test('should not show meat ingredient', () => {
    const {queryByTitle} = render(<BurgerIngredients type="cheese" />)
    const meat = queryByTitle(/meat/i)
    expect(meat).toBeNull()
  })

  test('should show cheese ingredient', () => {
    const {queryByTitle} = render(<BurgerIngredients type="cheese" />)
    const cheese = queryByTitle(/cheese/i)
    expect(cheese).not.toBeNull()
  })

  test('should not show cheese ingredient', () => {
    const {queryByTitle} = render(<BurgerIngredients type="meat" />)
    const cheese = queryByTitle(/cheese/i)
    expect(cheese).toBeNull()
  })

  test('should show bread top ingredient', () => {
    const {queryByTitle} = render(<BurgerIngredients type="bread-top" />)
    const breadTop = queryByTitle(/bread top/i)
    expect(breadTop).not.toBeNull()
  })

  test('should not show bread top ingredient', () => {
    const {queryByTitle} = render(<BurgerIngredients type="bread-bottom" />)
    const breadTop = queryByTitle(/bread top/i)
    expect(breadTop).toBeNull()
  })

  test('should show bread bottom ingredient', () => {
    const {queryByTitle} = render(<BurgerIngredients type="bread-bottom" />)
    const breadBottom = queryByTitle(/bread bottom/i)
    expect(breadBottom).not.toBeNull()
  })

  test('should not show bread bottom ingredient', () => {
    const {queryByTitle} = render(<BurgerIngredients type="bread-top" />)
    const breadBottom = queryByTitle(/bread bottom/i)
    expect(breadBottom).toBeNull()
  })
})

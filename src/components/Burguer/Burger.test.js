import React from 'react'
import {render} from '@testing-library/react'

import Burger from './Burguer'

describe('Tests about burger component', () => {
  test('should not show burger ingredients', () => {
    const ingredients = {salad: 0, bacon: 0, cheese: 0, meat: 0}
    const {getByTitle, container} = render(<Burger ingredients={ingredients} />)
    const messageEmpty = getByTitle(/empty ingredients/i)
    expect(messageEmpty).not.toBeNull()
    expect(messageEmpty).toHaveTextContent(/please start adding ingredients!/i)
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="Burger"
        >
          <div
            class="BreadTop"
            title="bread top"
          >
            <div
              class="Seeds1"
            />
            <div
              class="Seeds2"
            />
          </div>
          <p
            title="Empty ingredients"
          >
            Please start adding ingredients!
          </p>
          <div
            class="BreadBottom"
            title="bread bottom"
          />
        </div>
      </div>
    `)
  })

  test('should show one bacon and two cheese', () => {
    const ingredients = {salad: 0, bacon: 1, cheese: 2, meat: 0}
    const {getAllByTitle, queryByTitle, container} = render(
      <Burger ingredients={ingredients} />,
    )
    const baconQuantity = getAllByTitle(/bacon/i)
    const cheeseQuantity = getAllByTitle(/cheese/i)
    const emptyMessage = queryByTitle(/empty ingredients/i)
    expect(baconQuantity.length).toBe(1)
    expect(cheeseQuantity.length).toBe(2)
    expect(emptyMessage).toBeNull()
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="Burger"
        >
          <div
            class="BreadTop"
            title="bread top"
          >
            <div
              class="Seeds1"
            />
            <div
              class="Seeds2"
            />
          </div>
          <div
            class="Bacon"
            title="bacon"
          />
          <div
            class="Cheese"
            title="cheese"
          />
          <div
            class="Cheese"
            title="cheese"
          />
          <div
            class="BreadBottom"
            title="bread bottom"
          />
        </div>
      </div>
    `)
  })

  test('should not show one bacon and two cheese', () => {
    const ingredients = {salad: 0, bacon: 0, cheese: 0, meat: 0}
    const {queryAllByTitle} = render(<Burger ingredients={ingredients} />)
    const baconQuantity = queryAllByTitle(/bacon/i)
    const cheeseQuantity = queryAllByTitle(/cheese/i)
    expect(baconQuantity.length).not.toBe(1)
    expect(cheeseQuantity.length).not.toBe(2)
    expect(baconQuantity.length).toBe(0)
    expect(cheeseQuantity.length).toBe(0)
  })

  test('should show three salad and two meat', () => {
    const ingredients = {salad: 3, bacon: 0, cheese: 0, meat: 2}
    const {queryAllByTitle} = render(<Burger ingredients={ingredients} />)
    const saladQuantity = queryAllByTitle(/salad/i)
    const meatQuantity = queryAllByTitle(/meat/i)
    expect(saladQuantity.length).toBe(3)
    expect(meatQuantity.length).toBe(2)
  })

  test('should show two for all ingredients', () => {
    const ingredients = {salad: 2, bacon: 2, cheese: 2, meat: 2}
    const {queryAllByTitle, container} = render(
      <Burger ingredients={ingredients} />,
    )
    const saladQuantity = queryAllByTitle(/salad/i)
    const meatQuantity = queryAllByTitle(/meat/i)
    const cheeseQuantity = queryAllByTitle(/cheese/i)
    const baconQuantity = queryAllByTitle(/bacon/i)
    expect(saladQuantity.length).toBe(2)
    expect(meatQuantity.length).toBe(2)
    expect(cheeseQuantity.length).toBe(2)
    expect(baconQuantity.length).toBe(2)
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="Burger"
        >
          <div
            class="BreadTop"
            title="bread top"
          >
            <div
              class="Seeds1"
            />
            <div
              class="Seeds2"
            />
          </div>
          <div
            class="Salad"
            title="salad"
          />
          <div
            class="Salad"
            title="salad"
          />
          <div
            class="Bacon"
            title="bacon"
          />
          <div
            class="Bacon"
            title="bacon"
          />
          <div
            class="Cheese"
            title="cheese"
          />
          <div
            class="Cheese"
            title="cheese"
          />
          <div
            class="Meat"
            title="meat"
          />
          <div
            class="Meat"
            title="meat"
          />
          <div
            class="BreadBottom"
            title="bread bottom"
          />
        </div>
      </div>
    `)
  })
})

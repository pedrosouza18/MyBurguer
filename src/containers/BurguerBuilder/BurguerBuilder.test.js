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

  test('User choose two cheese, click on order now and remove one cheese and again click on order now', () => {
    const {getByRole, getByTestId, queryByText, debug, container} = render(
      <BurguerBuilder />,
    )

    const moreQuantityCheeseButton = getByTestId('more-quantity-Cheese')
    const lessQuantityCheeseButton = getByTestId('less-quantity-Cheese')

    fireEvent.click(moreQuantityCheeseButton)
    fireEvent.click(moreQuantityCheeseButton)

    const orderNowButton = getByRole('button', {name: 'ORDER NOW'})
    fireEvent.click(orderNowButton)

    expect(queryByText('cheese: 2')).toBeVisible()
    expect(queryByText('Total Price: 0.80')).toBeVisible()

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="Backdrop"
        />
        <div
          class="Modal"
          role="dialog"
          style="transform: translateY(0); opacity: 1;"
        >
          <h3>
            Your Order
          </h3>
          <p>
            A delecious burger with the following ingredients:
          </p>
          <ul>
            <li
              title="ingredients"
            >
              <span
                style="text-transform: capitalize;"
              >
                salad: 0
              </span>
            </li>
            <li
              title="ingredients"
            >
              <span
                style="text-transform: capitalize;"
              >
                bacon: 0
              </span>
            </li>
            <li
              title="ingredients"
            >
              <span
                style="text-transform: capitalize;"
              >
                cheese: 2
              </span>
            </li>
            <li
              title="ingredients"
            >
              <span
                style="text-transform: capitalize;"
              >
                meat: 0
              </span>
            </li>
          </ul>
          <p>
            <strong>
              Total Price: 
              0.80
            </strong>
          </p>
          <p>
            Continue to checkout?
          </p>
          <button
            class="Button Danger"
          >
            CANCEL
          </button>
          <button
            class="Button Success"
          >
            CONTINUE
          </button>
        </div>
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
        <div
          class="BuildControls"
        >
          <p>
            Current Price: 
            <strong>
              0.80
            </strong>
          </p>
          <div
            class="BuildControl"
          >
            <div
              class="Label"
              title="name ingredient"
            >
              Salad
            </div>
            <button
              class="Less"
              data-testid="less-quantity-Salad"
              disabled=""
              title="less quantity"
            >
              Less
            </button>
            <button
              class="More"
              data-testid="more-quantity-Salad"
              title="more quantity"
            >
              More
            </button>
          </div>
          <div
            class="BuildControl"
          >
            <div
              class="Label"
              title="name ingredient"
            >
              Bacon
            </div>
            <button
              class="Less"
              data-testid="less-quantity-Bacon"
              disabled=""
              title="less quantity"
            >
              Less
            </button>
            <button
              class="More"
              data-testid="more-quantity-Bacon"
              title="more quantity"
            >
              More
            </button>
          </div>
          <div
            class="BuildControl"
          >
            <div
              class="Label"
              title="name ingredient"
            >
              Cheese
            </div>
            <button
              class="Less"
              data-testid="less-quantity-Cheese"
              title="less quantity"
            >
              Less
            </button>
            <button
              class="More"
              data-testid="more-quantity-Cheese"
              title="more quantity"
            >
              More
            </button>
          </div>
          <div
            class="BuildControl"
          >
            <div
              class="Label"
              title="name ingredient"
            >
              Meat
            </div>
            <button
              class="Less"
              data-testid="less-quantity-Meat"
              disabled=""
              title="less quantity"
            >
              Less
            </button>
            <button
              class="More"
              data-testid="more-quantity-Meat"
              title="more quantity"
            >
              More
            </button>
          </div>
          <button
            class="OrderButton"
          >
            ORDER NOW
          </button>
        </div>
      </div>
    `)

    const cancelOrderButton = getByRole('button', {name: 'CANCEL'})

    expect(cancelOrderButton)

    fireEvent.click(cancelOrderButton)

    fireEvent.click(lessQuantityCheeseButton)

    fireEvent.click(orderNowButton)

    debug()

    expect(queryByText('cheese: 1')).toBeVisible()
    expect(queryByText('Total Price: 0.40')).toBeVisible()

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="Backdrop"
        />
        <div
          class="Modal"
          role="dialog"
          style="transform: translateY(0); opacity: 1;"
        >
          <h3>
            Your Order
          </h3>
          <p>
            A delecious burger with the following ingredients:
          </p>
          <ul>
            <li
              title="ingredients"
            >
              <span
                style="text-transform: capitalize;"
              >
                salad: 0
              </span>
            </li>
            <li
              title="ingredients"
            >
              <span
                style="text-transform: capitalize;"
              >
                bacon: 0
              </span>
            </li>
            <li
              title="ingredients"
            >
              <span
                style="text-transform: capitalize;"
              >
                cheese: 1
              </span>
            </li>
            <li
              title="ingredients"
            >
              <span
                style="text-transform: capitalize;"
              >
                meat: 0
              </span>
            </li>
          </ul>
          <p>
            <strong>
              Total Price: 
              0.40
            </strong>
          </p>
          <p>
            Continue to checkout?
          </p>
          <button
            class="Button Danger"
          >
            CANCEL
          </button>
          <button
            class="Button Success"
          >
            CONTINUE
          </button>
        </div>
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
            class="Cheese"
            title="cheese"
          />
          <div
            class="BreadBottom"
            title="bread bottom"
          />
        </div>
        <div
          class="BuildControls"
        >
          <p>
            Current Price: 
            <strong>
              0.40
            </strong>
          </p>
          <div
            class="BuildControl"
          >
            <div
              class="Label"
              title="name ingredient"
            >
              Salad
            </div>
            <button
              class="Less"
              data-testid="less-quantity-Salad"
              disabled=""
              title="less quantity"
            >
              Less
            </button>
            <button
              class="More"
              data-testid="more-quantity-Salad"
              title="more quantity"
            >
              More
            </button>
          </div>
          <div
            class="BuildControl"
          >
            <div
              class="Label"
              title="name ingredient"
            >
              Bacon
            </div>
            <button
              class="Less"
              data-testid="less-quantity-Bacon"
              disabled=""
              title="less quantity"
            >
              Less
            </button>
            <button
              class="More"
              data-testid="more-quantity-Bacon"
              title="more quantity"
            >
              More
            </button>
          </div>
          <div
            class="BuildControl"
          >
            <div
              class="Label"
              title="name ingredient"
            >
              Cheese
            </div>
            <button
              class="Less"
              data-testid="less-quantity-Cheese"
              title="less quantity"
            >
              Less
            </button>
            <button
              class="More"
              data-testid="more-quantity-Cheese"
              title="more quantity"
            >
              More
            </button>
          </div>
          <div
            class="BuildControl"
          >
            <div
              class="Label"
              title="name ingredient"
            >
              Meat
            </div>
            <button
              class="Less"
              data-testid="less-quantity-Meat"
              disabled=""
              title="less quantity"
            >
              Less
            </button>
            <button
              class="More"
              data-testid="more-quantity-Meat"
              title="more quantity"
            >
              More
            </button>
          </div>
          <button
            class="OrderButton"
          >
            ORDER NOW
          </button>
        </div>
      </div>
    `)
  })
})

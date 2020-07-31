import React from 'react'

import Button from '../../UI/Button/Button'

const orderSummary = ({
  ingredients,
  purchaseCanceled,
  purchaseContinued,
  price,
}) => {
  return (
    <>
      <h3>Your Order</h3>
      <p>A delecious burger with the following ingredients:</p>
      <ul>
        {Object.entries(ingredients).map(([key, value], index) => {
          return (
            <li key={index} title="ingredients">
              <span style={{textTransform: 'capitalize'}}>{key}</span>: {value}
            </li>
          )
        })}
      </ul>
      <p>
        <strong>Total Price:</strong> {price.toFixed(2)}
      </p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={purchaseCanceled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={purchaseContinued}>
        CONTINUE
      </Button>
    </>
  )
}

export default orderSummary

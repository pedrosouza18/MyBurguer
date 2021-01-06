import React from 'react'

import classes from './Order.module.css'

function order({order, price}) {
  const ingredients = Object.entries(order)
    .filter(([key]) => {
      return Number.isInteger(order[key])
    })
    .map(([key, value]) => `${key} (${value})`)

  return (
    <div className={classes.Order}>
      <p>
        Ingredients:{' '}
        {ingredients.map((ing, index) => (
          <span key={index}>{ing}</span>
        ))}
      </p>
      <p>
        Price: <strong>USD {price || 0}</strong>
      </p>
    </div>
  )
}

export default order

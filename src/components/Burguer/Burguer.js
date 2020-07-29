import React from 'react'

import classes from './burger.module.css'
import BurgerIngredients from './BurguerIngredients/BurguerIngredients'

const burger = props => {
  let transformIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, index) => {
        return <BurgerIngredients key={igKey + index} type={igKey} />
      })
    })
    .reduce((prev, item) => {
      return prev.concat(item)
    })

  if (transformIngredients.length === 0) {
    transformIngredients = (
      <p title="Empty ingredients">Please start adding ingredients!</p>
    )
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  )
}

export default burger

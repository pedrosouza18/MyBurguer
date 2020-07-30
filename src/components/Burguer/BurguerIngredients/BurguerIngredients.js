import React, {Component} from 'react'
import PropTypes from 'prop-types'

import ingredientsClass from './BurguerIngredients.module.css'

class BurguerIngredients extends Component {
  render() {
    let ingredient = null

    switch (this.props.type) {
      case 'bread-bottom':
        ingredient = (
          <div
            title="bread bottom"
            className={ingredientsClass.BreadBottom}
          ></div>
        )
        break
      case 'bread-top':
        ingredient = (
          <div title="bread top" className={ingredientsClass.BreadTop}>
            <div className={ingredientsClass.Seeds1}></div>
            <div className={ingredientsClass.Seeds2}></div>
          </div>
        )
        break
      case 'meat':
        ingredient = <div title="meat" className={ingredientsClass.Meat}></div>
        break
      case 'cheese':
        ingredient = (
          <div title="cheese" className={ingredientsClass.Cheese}></div>
        )
        break
      case 'bacon':
        ingredient = (
          <div title="bacon" className={ingredientsClass.Bacon}></div>
        )
        break
      case 'salad':
        ingredient = (
          <div title="salad" className={ingredientsClass.Salad}></div>
        )
        break
      default:
        ingredient = null
        break
    }

    return ingredient
  }
}

BurguerIngredients.propTypes = {
  type: PropTypes.string.isRequired,
}

export default BurguerIngredients

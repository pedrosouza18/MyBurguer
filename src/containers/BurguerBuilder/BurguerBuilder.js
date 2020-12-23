import React, {Component} from 'react'
import Burger from '../../components/Burguer/Burguer'
import BuildControls from '../../components/Burguer/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burguer/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import errorHandler from '../../hoc/ErrorHandler/ErrorHandler'

import axios from '../../axios'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
}

class BurguerBuilder extends Component {
  _isMounted = false

  state = {
    ingredients: null,
    totalPrice: 0,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false,
  }

  componentDidMount() {
    this._isMounted = true

    axios
      .get('https://react-my-burger-fc47a.firebaseio.com/ingredients.json')
      .then(response => {
        if (this._isMounted) {
          this.setState({ingredients: response.data})
        }
      })
      .catch(error => {
        this.setState({error: true})
      })
  }
  componentWillUnmount() {
    this._isMounted = false
  }

  updatePurchase = ingredients => {
    const sum = Object.keys(ingredients)
      .map(ing => ingredients[ing])
      .reduce((prev, item) => prev + item, 0)
    this.setState({purchasable: sum > 0})
  }

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type]
    const updatedCounted = oldCount + 1
    const updateIngredients = {...this.state.ingredients}
    updateIngredients[type] = updatedCounted
    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition
    this.setState({totalPrice: newPrice, ingredients: updateIngredients})
    this.updatePurchase(updateIngredients)
  }

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type]
    const updatedCounted = oldCount - 1
    if (updatedCounted >= 0) {
      const updateIngredients = {...this.state.ingredients}
      updateIngredients[type] = updatedCounted
      const priceAddition = INGREDIENT_PRICES[type]
      const oldPrice = this.state.totalPrice
      const newPrice = oldPrice - priceAddition
      this.setState({totalPrice: newPrice, ingredients: updateIngredients})
      this.updatePurchase(updateIngredients)
    }
  }

  purchaseHandler = () => {
    this.setState({purchasing: true})
  }

  modalClose = () => {
    this.setState({purchasing: false})
  }

  purchaseContinueHandler = () => {
    // const {ingredients, price} = this.state
    // this.setState({loading: true, purchasing: true})
    // axios
    //   .post('/orders.json', {
    //     ...ingredients,
    //     price,
    //     customer: {
    //       name: 'Pedro',
    //       address: {
    //         street: 'Praça Amambaí',
    //         zipCode: '20730120',
    //         country: 'Brazil',
    //       },
    //       email: 'souzapedro70@gmail.com',
    //     },
    //     deliveryMethod: 'fastest',
    //   })
    //   .then(response => {
    //     this.setState({loading: false, purchasing: false})
    //     console.log(response)
    //   })
    //   .catch(error => {
    //     this.setState({loading: false, purchasing: false})
    //     console.error(error)
    //   })
    const queryParams = Object.entries(this.state.ingredients)
      .map(([key, value]) => {
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      })
      .join('&')
    this.props.history.push({
      pathname: '/checkout',
      search: `?${queryParams}`,
    })
  }

  render() {
    const {loading} = this.state
    const disableInfo = {...this.state.ingredients}
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0
    }

    const ingredientComponent = (
      <>
        {this.state.ingredients ? (
          <>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls
              ingredientAdded={this.addIngredientHandler}
              ingredientRemoved={this.removeIngredientHandler}
              disabled={disableInfo}
              price={this.state.totalPrice}
              purchasable={this.state.purchasable}
              ordered={this.purchaseHandler}
            />
          </>
        ) : (
          <Spinner />
        )}
      </>
    )

    return (
      <>
        <Modal show={this.state.purchasing} modalClose={this.modalClose}>
          {loading || !this.state.ingredients ? (
            <Spinner />
          ) : (
            <OrderSummary
              ingredients={this.state.ingredients}
              purchaseCanceled={this.modalClose}
              purchaseContinued={this.purchaseContinueHandler}
              price={this.state.totalPrice}
            />
          )}
        </Modal>
        {!this.state.error ? ingredientComponent : <p>Testeee</p>}
      </>
    )
  }
}

export default errorHandler(BurguerBuilder, axios)

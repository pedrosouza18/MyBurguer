import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0,
    },
  }

  componentDidMount() {
    const {search} = this.props.location
    const query = new URLSearchParams(search)
    const ingredients = {}
    let price = 0
    for (let param of query.entries()) {
      if (param[0] === 'price') {
        price = param[1]
      } else {
        ingredients[param[0]] = +param[1]
      }
    }
    this.setState({ingredients, totalPrice: price})
  }

  checkoutCancel = () => {
    this.props.history.goBack()
  }

  checkoutContinue = () => {
    this.props.history.replace('/checkout/contact-data')
  }

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          onCheckoutContinue={this.checkoutContinue}
          onCheckoutCancel={this.checkoutCancel}
        />
        <Route path={`${this.props.match.path}/contact-data`}>
          <ContactData
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            {...this.props}
          />
        </Route>
      </div>
    )
  }
}

export default Checkout

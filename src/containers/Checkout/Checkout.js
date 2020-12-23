import React, {Component} from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'

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
    for (let param of query.entries()) {
      ingredients[param[0]] = +param[1]
    }
    this.setState({ingredients})
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
      </div>
    )
  }
}

export default Checkout

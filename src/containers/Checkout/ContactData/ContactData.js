import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios'
import Spinner from '../../../components/UI/Spinner/Spinner'

import classes from './ContactData.module.css'

export default class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
  }

  orderHandler = evt => {
    evt.preventDefault()
    const {ingredients, price} = this.props
    this.setState({loading: true})
    axios
      .post('/orders.json', {
        ...ingredients,
        price,
        customer: {...this.state},
        deliveryMethod: 'fastest',
      })
      .then(response => {
        this.props.history.replace('/')
        console.log(response)
      })
      .catch(error => {
        // this.setState({loading: false, purchasing: false})
        console.error(error)
      })
  }

  render() {
    return (
      <div className={classes.ContactData}>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <>
            <h4>Enter your Contact Data</h4>
            <form>
              <input
                className={classes.Input}
                type="text"
                name="name"
                placeholder="Your name"
              />
              <input
                className={classes.Input}
                type="text"
                name="email"
                placeholder="Your email"
              />
              <input
                className={classes.Input}
                type="text"
                name="street"
                placeholder="Street"
              />
              <input
                className={classes.Input}
                type="text"
                name="postal"
                placeholder="Postal Code"
              />
              <Button btnType="Success" clicked={this.orderHandler}>
                ORDER
              </Button>
            </form>
          </>
        )}
      </div>
    )
  }
}

import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'

import classes from './ContactData.module.css'

export default class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name',
        },
        value: '',
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Street',
        },
        value: '',
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Zipcode',
        },
        value: '',
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country',
        },
        value: '',
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your E-mail',
        },
        value: '',
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            {
              value: 'fastest',
              displayValue: 'Fastest',
            },
            {
              value: 'cheapest',
              displayValue: 'Cheapest',
            },
          ],
        },
        value: '',
      },
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
      })
      .then(response => {
        console.log(response)
        this.props.history.replace('/')
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
              {Object.entries(this.state.orderForm).map(
                ([key, value], index) => (
                  <Input key={index} name={key} {...value} />
                ),
              )}
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

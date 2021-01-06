import React from 'react'
import Order from '../../components/Order/Order'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/ErrorHandler/ErrorHandler'
import axios from '../../axios'

class Orders extends React.Component {
  state = {
    orders: [],
  }

  componentDidMount() {
    axios
      .get('/orders.json')
      .then(res => {
        this.setState({orders: Object.values(res.data)})
      })
      .catch(error => console.error(error))
  }

  render() {
    return (
      <div>
        {this.state.orders.length > 0 ? (
          this.state.orders.map((order, index) => (
            <Order key={index} order={order} />
          ))
        ) : (
          <Spinner />
        )}
      </div>
    )
  }
}

export default withErrorHandler(Orders, axios)

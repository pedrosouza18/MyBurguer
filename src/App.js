import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import BurguerBuilder from './containers/BurguerBuilder/BurguerBuilder'
import Checkout from './containers/Checkout/Checkout'
import Orders from './containers/Orders/Orders'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Layout>
            <Switch>
              <Route exact path="/" component={BurguerBuilder} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/orders" component={Orders} />
            </Switch>
          </Layout>
        </div>
      </Router>
    )
  }
}

export default App

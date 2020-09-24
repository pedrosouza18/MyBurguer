import React, {Component} from 'react'

import Layout from './hoc/Layout/Layout'
import BurguerBuilder from './containers/BurguerBuilder/BurguerBuilder'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurguerBuilder />
        </Layout>
      </div>
    )
  }
}

export default App

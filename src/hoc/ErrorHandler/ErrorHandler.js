import React, {Component} from 'react'
import Modal from '../../components/UI/Modal/Modal'

const errorHandler = (WrapperComponent, axios) => {
  return class extends Component {
    constructor() {
      super()
      this.state = {
        error: null,
      }
      axios.interceptors.response.use(
        req => {
          this.setState({error: null})
          return req
        },
        error => {
          this.setState({error: error})
        },
      )
    }

    render() {
      return (
        <>
          <Modal show={this.state.error} clicked={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrapperComponent {...this.props} />
        </>
      )
    }
  }
}

export default errorHandler

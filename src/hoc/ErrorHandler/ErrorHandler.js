import React, {Component} from 'react'
import Modal from '../../components/UI/Modal/Modal'

const errorHandler = (WrapperComponent, axios) => {
  return class extends Component {
    _isMounted = false

    constructor() {
      super()
      this._isMounted = true
      this.state = {
        error: null,
      }
      this.requestInterceptor = axios.interceptors.response.use(
        req => {
          if (this._isMounted) this.setState({error: null})
          return req
        },
        error => {
          if (this._isMounted) this.setState({error: error})
        },
      )
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.requestInterceptor)
      axios.interceptors.response.eject(this.requestInterceptor)
      this._isMounted = false
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

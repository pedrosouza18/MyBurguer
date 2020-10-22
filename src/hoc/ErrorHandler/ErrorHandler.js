import React from 'react'
import Modal from '../../components/UI/Modal/Modal'

const errorHandler = WrapperComponent => {
  return props => {
    return (
      <>
        <Modal show>Something didn't work!</Modal>
        <WrapperComponent {...props} />
      </>
    )
  }
}

export default errorHandler

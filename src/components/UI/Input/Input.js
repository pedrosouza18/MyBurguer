import React from 'react'
import classes from './Input.module.css'

const input = props => {
  let inputElement

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      )
      break
    case 'textarea':
      inputElement = (
        <textarea
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      )
      break
    case 'select':
      inputElement = (
        <select
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
        >
          {props.elementConfig.options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      )
      break
    default:
      inputElement = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      )
      break
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  )
}

export default input

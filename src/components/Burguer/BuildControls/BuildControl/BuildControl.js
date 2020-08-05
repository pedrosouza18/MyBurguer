import React from 'react'

import classes from './BuildControl.module.css'

const buildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label} title="name ingredient">
      {props.label}
    </div>
    <button
      title="less quantity"
      data-testid={`less-quantity-${props.label}`}
      className={classes.Less}
      onClick={props.removed}
      disabled={props.disabled}
    >
      Less
    </button>
    <button
      title="more quantity"
      data-testid={`more-quantity-${props.label}`}
      className={classes.More}
      onClick={props.added}
    >
      More
    </button>
  </div>
)

export default buildControl

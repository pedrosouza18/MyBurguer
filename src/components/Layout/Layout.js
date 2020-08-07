import React from 'react'
import layoutClass from './Layout.module.css'

import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = props => (
  <>
    <Toolbar />
    <main className={layoutClass.Content}>{props.children}</main>
  </>
)

export default layout

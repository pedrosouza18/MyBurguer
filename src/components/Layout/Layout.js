import React from 'react'
import layoutClass from './Layout.module.css'

import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const layout = props => (
  <>
    <Toolbar />
    <SideDrawer />
    <main className={layoutClass.Content}>{props.children}</main>
  </>
)

export default layout

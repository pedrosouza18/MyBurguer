import React, {Component} from 'react'
import layoutClass from './Layout.module.css'

import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
  state = {
    showSideDrawer: true,
  }

  SideDrawerCloseHandler = () => {
    this.setState(prev => ({showSideDrawer: !prev.showSideDrawer}))
  }

  render() {
    return (
      <>
        <Toolbar openSideDrawer={this.SideDrawerCloseHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          handleSideDrawer={this.SideDrawerCloseHandler}
        />
        <main className={layoutClass.Content}>{this.props.children}</main>
      </>
    )
  }
}

export default Layout

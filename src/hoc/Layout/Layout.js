import React, {Component} from 'react'
import layoutClass from './Layout.module.css'

import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
  state = {
    showSideDrawer: false,
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

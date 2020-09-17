import React from 'react'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'

import classes from './SideDrawer.module.css'

const sideDrawer = ({handleSideDrawer, open}) => {
  return (
    <>
      <button
        className={`${classes.ButtonClose} ${open ? `${classes.show}` : ''}`}
        onClick={handleSideDrawer}
      >
        X
      </button>
      <Backdrop show={open} clicked={handleSideDrawer} />
      <div
        className={`${classes.SideDrawer} ${
          open ? `${classes.Open}` : `${classes.Close}`
        }`}
      >
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  )
}

export default sideDrawer

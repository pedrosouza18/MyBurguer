import React from 'react';
import layoutClass from './Layout.module.css';

const layout = (props) => (
  <>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={layoutClass.Content}>
      {props.children}
    </main>
  </>
);

export default layout;
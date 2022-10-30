import React from 'react';
import { useGlobalContext } from './context';

function Menu() {
  const {
    mainMenuOpened,
    pages: { pager, links },
  } = useGlobalContext();
  console.log(mainMenuOpened);
  console.log(pager)
  

  return (
    <aside className={`${mainMenuOpened ? 'submenu show' : 'submenu'} `}>
      <h4></h4>
    </aside>
  );
}

export default Menu;

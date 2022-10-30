import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from './context';

function Menu() {
  const {
    mainMenuOpened,
    pages: { page, links },
    location,
  } = useGlobalContext();

  const container = useRef(null);

  useEffect(() => {
    const mainMenu = container.current;
    console.log(mainMenu);
    console.log(location);
    const { center, bottom } = location;
    mainMenu.style.left = `${center}px`;
    mainMenu.style.top = `${bottom}px`;
  }, [location]);

  return (
    <aside
      className={`${mainMenuOpened ? 'submenu show' : 'submenu'} `}
      ref={container}
    >
      <h4>{page}</h4>
      {links.map((link, i) => {
        const { label, icon, url } = link;
        return (
          <Link href={url} key={i}>
            {icon} {label}
          </Link>
        );
      })}
    </aside>
  );
}

export default Menu;

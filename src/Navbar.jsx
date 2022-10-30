import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';
import sublinks from './data';

function Navbar() {
  const { showStickMenu, showMainMenu } = useGlobalContext();

  const displaySubMenu = e => {
    const menuName = e.target.textContent;
    const coords = e.target.getBoundingClientRect();
    const center = (coords.left + coords.right) / 2;
    const bottom = coords.bottom - 3;
    showMainMenu(menuName, { center, bottom });
  };

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src="" alt="" className="nav-logo" />
          <button className="btn toggle-btn" onClick={showStickMenu}>
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          {sublinks.map((link, index) => {
            const { page } = link;
            return (
              <button
                className="link-btn"
                key={index}
                onMouseOver={displaySubMenu}
              >
                {page}
              </button>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

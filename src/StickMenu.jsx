import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useGlobalContext } from './context';
import sublinks from './data';

function StickMenu() {
  const { stickMenuOpened, hideStickMenu } = useGlobalContext();

  return (
    <aside
      className={`${
        stickMenuOpened ? 'sidebar-wrapper show' : 'sidebar-wrapper'
      }`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={hideStickMenu}>
          <FaTimes />
        </button>

        <div className="sidebar-links">
          {sublinks.map((link, index) => {
            const { page, links } = link;
            return (
              <article key={index}>
                <h4>page</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, i) => {
                    const { label, icon, url } = link;

                    return (
                      <a href={url} key={i}>
                        {icon} {label}
                      </a>
                    );

                    // return (
                    //   <Link to={url} key={i}>
                    //     {icon} {label}
                    //   </Link>
                    // );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export default StickMenu;

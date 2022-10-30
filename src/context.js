import React, { createContext, useContext, useState } from 'react';
import App from './App.jsx';
import sublinks from './data.js';

const wholeAppCont = createContext();

const AppProvider = ({ children }) => {
  const [stickMenuOpened, setStickMenuOpened] = useState(false);
  const [mainMenuOpened, setMainMenuOpened] = useState(false);
  const [pages, setPages] = useState({ pager: '', links: [] });
  const [location, setLocation] = useState({});

  const showStickMenu = () => {
    setStickMenuOpened(true);
  };

  const hideStickMenu = e => {
    setStickMenuOpened(false);
  };

  const showMainMenu = (menuName, menuCoords) => {
    const page = sublinks.find(link => link.page === menuName);
    console.log(page);
    setMainMenuOpened(true);
    setPages(page);
    setLocation(menuCoords);
  };

  return (
    <wholeAppCont.Provider
      value={{
        stickMenuOpened,
        setStickMenuOpened,
        showStickMenu,
        hideStickMenu,
        showMainMenu,
        setPages,
        pages,
        mainMenuOpened,
      }}
    >
      {children}
    </wholeAppCont.Provider>
  );
};

export const useGlobalContext = () => useContext(wholeAppCont);

export { wholeAppCont, AppProvider };

import React from 'react';
import Hero from './Main';
import Menu from './HomeMenu';
import Navbar from './Navbar';
import StickMenu from './StickMenu';

function App() {
  return (
    <>
      <Navbar />
      <Menu />
      <Hero />
      <StickMenu />
    </>
  );
}

export default App;

import React from 'react';
import Navigation from '../navigation';
import Hero from '../hero';
import './Header.scss';

function Header() {

  return (
    <header id="header">
      <div className="row">
        <h1>Space Gadgets</h1>
        <Navigation />
      </div>
    </header>
  )
}

export default Header;

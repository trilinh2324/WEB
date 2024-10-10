import React from 'react';
import '../header/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <h1>Logo</h1>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

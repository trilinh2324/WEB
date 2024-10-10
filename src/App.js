import React from 'react';
import Header from './header/Header.js';
import Footer from './footer/Footer.js';
import Home from './home/Home.js';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;

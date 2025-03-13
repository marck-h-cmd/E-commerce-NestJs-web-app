import React from 'react';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#333', color: '#fff', padding: '10px', textAlign: 'center' }}>
      <h1>Exclusive</h1>
      <nav>
        <a href="/" style={{ color: '#fff', margin: '0 10px' }}>Home</a>
        <a href="/about" style={{ color: '#fff', margin: '0 10px' }}>About</a>
        <a href="/contact" style={{ color: '#fff', margin: '0 10px' }}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', listStyleType: 'none' }}>
        <li style={{ margin: '0 15px' }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ margin: '0 15px' }}>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

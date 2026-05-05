import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <span className="navbar-title">
        <i className="fas fa-crown" style={{ marginRight: '8px' }}></i>
        Admin Dashboard
      </span>

      <div className="navbar-status">
        <i className="fas fa-circle navbar-dot" style={{ fontSize: '10px', marginRight: '6px' }}></i>
        Connected to API
      </div>
    </header>
  );
}

export default Navbar;
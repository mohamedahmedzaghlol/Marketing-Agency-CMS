import React from 'react';
import './Navbar.css';
import search from '../../assets/search(9).png';
import notify from '../../assets/notify(1).png';
import setting from '../../assets/settin(9).png';
import profile from '../../assets/Administrator profile.png';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__left">
        <h1 className="navbar__title">CMS Admin</h1>
      </div>
 
      <div className="navbar__center">
        <div className="navbar__search">
          <span className="navbar__search-icon">
            <img src={search} alt="Search" width="14" height="14" />
          </span>
          <input
            type="text"
            className="navbar__search-input"
            placeholder="Search categories..."
          />
        </div>
      </div>
 
      <div className="navbar__right">
        <button className="navbar__icon-btn" aria-label="Notifications">
          <img src={notify} alt="Notifications" width="18" height="18" />
        </button>
 
        <button className="navbar__icon-btn" aria-label="Settings">
          <img src={setting} alt="Settings" width="18" height="18" />
        </button>
 
        <button className="navbar__avatar-btn" aria-label="User profile">
          <img src={profile} alt="User avatar" className="navbar__avatar" />
        </button>
      </div>
    </header>
  );
}
 
export default Navbar;

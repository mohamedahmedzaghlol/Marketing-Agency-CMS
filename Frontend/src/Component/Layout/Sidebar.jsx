import React from 'react';
import './Sidebar.css';
import Dashboard from "../../assets/Icon.png";

import posts from "../../assets/Icon (1).png";
import Categories from "../../assets/Icon (2).png";

import media from "../../assets/Icon (3).png";

import users from "../../assets/Icon (4).png";

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Dashboard },
  { id: 'posts', label: 'Posts', icon: posts },
  { id: 'categories', label: 'Categories', icon: Categories },
  { id: 'media', label: 'Media', icon: media },
  { id: 'users', label: 'Users', icon: users },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <span className="sidebar__brand-name">Agency CMS</span>

        <span className="sidebar__brand-sub">Marketing HQ</span>

      </div>
      <nav className="sidebar__nav">

        <ul className="sidebar__nav-list">  {navItems.map((item) => (
          <li key={item.id} className="sidebar__nav-item">
              <div className="sidebar__nav-link">
                <span className="sidebar__nav-icon">

                  <img src={item.icon} alt={item.label} width="16" height="16" />

                </span>
                <span className="sidebar__nav-label">{item.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
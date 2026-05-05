import React from 'react';
import './Sidbar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <div className="sidebar-logo-name">
          <i className="fas fa-feather-alt sidebar-logo-icon"></i>
          AgencyCMS
        </div>
        <div className="sidebar-logo-sub">Admin Panel</div>
      </div>

      <nav className="sidebar-nav">
        <Link
          to="/dashboard" className="sidebar-link " >
          <i className="fas fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>

        <Link
          to="/ManagePosts"
          className="sidebar-link "        >
          <i className="fas fa-list-ul"></i>
          <span>Manage Posts</span>
        </Link>

        <Link
          to="/new-post"
          className="sidebar-link "        >
          <i className="fas fa-plus-circle"></i>
          <span>New Post</span>
        </Link>
      </nav>

      <div className="sidebar-bottom">
        <Link
          to="/"
          className="sidebar-link "        >
          <i className="fas fa-arrow-left"></i>
          <span>Back to Site</span>
        </Link>
      </div>

    </aside>
  );
}

export default Sidebar;
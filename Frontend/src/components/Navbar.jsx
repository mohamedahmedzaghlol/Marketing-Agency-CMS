import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg public-navbar">
      <div className="container">
     
        <Link className="navbar-brand" to="/">
          <i className="bi bi-broadcast me-2 brand-icon"></i>
          AgencyCMS
        </Link>

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

       
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-center gap-2">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About  Contact
              </NavLink>
            </li>
          
            <li className="nav-item ms-2">
              <Link to="/admin/login" className="btn btn-sm px-3 admin-btn">
                <i className="bi bi-grid me-1"></i> Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import "./Navbar.css";

function Navbar () {
  return (<>
    <nav className="navbar">
      <div className="navbar-logo"><i className="fa-solid fa-satellite-dish"></i> AgencyCMS</div>
      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#" className="active">About Contact</a>
       <button className="admin-btn"> Admin</button>
      </div>
    </nav>  </>
  );
};

export default Navbar;

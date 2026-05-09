import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand" href="#">AgencyCMS</a>

      <div className="ms-auto d-flex align-items-center gap-3">
        <a className="nav-link text-white" href="#">Home</a>
        <a className="nav-link text-white" href="#">About & Contact</a>
        <button className="btn btn-warning btn-sm">Admin</button>
      
      </div>
      <hr className="bg-secondary 5em"></hr>
    </nav>
  );
}
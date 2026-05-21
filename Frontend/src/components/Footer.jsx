

import React from 'react';
import './Footer.css';   

const Footer = () => (
  <footer className="site-footer text-center">
    <div className="container">
      <p className="mb-1">
        <i className="bi bi-broadcast me-2 footer-brand-icon"></i>   {/* style replaced with class */}
        <strong className="footer-brand-text">AgencyCMS</strong>      {/* style replaced with class */}
      </p>
      <p className="mb-0">
        © {new Date().getFullYear()} Mini Headless CMS. Built with React + Express.
      </p>
    </div>
  </footer>
);

export default Footer;
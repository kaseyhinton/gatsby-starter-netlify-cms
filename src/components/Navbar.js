import React from 'react';
import Link from 'gatsby-link';

const Navbar = () => (
    <div className="navbar">
      <div className="container flex-auto layout horizontal center">
        <div className="navbar-brand layout flex-auto">
          <Link to="/" className="navbar-item">
            <strong>Cookie</strong> Mama
          </Link>
        </div>
        <div className="navbar-items layout end">
          <Link className="navbar-item" to="/about">
            About
          </Link>
          <Link className="navbar-item" to="/products">
            Products
          </Link>
          <Link className="navbar-item" to="/admin/">
            Login
          </Link>
        </div>
      </div>
    </div>
);

export default Navbar;

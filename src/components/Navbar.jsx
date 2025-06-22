import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src="/logo.png" alt="logo" className="logo-img" />
        <div className="logo-text">BookNest</div>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/add">Add Book</Link>
      </div>
    </nav>
  );
};

export default Navbar;

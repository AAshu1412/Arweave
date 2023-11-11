import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <nav className="main-nav">
      <div className="logo">
       <NavLink to="/"><h2>Ar-KYC</h2></NavLink> 
      </div>
      <div className="header-content">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/start">Start</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>
      <div className="connect-button">
        <button>Connect Wallet</button>
      </div>
    </nav>
  );
}

export default Navbar;

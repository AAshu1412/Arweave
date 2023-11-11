import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="main-nav">
      <div className="logo">
        <h2>Ar-KYC</h2>
      </div>
      <div className="header-content">
        <ul>
          <li>Home</li>
          <li>Start</li>
          <li>About</li>
        </ul>
      </div>
      <div className="connect-button">
        <button>Connect Wallet</button>
      </div>
    </nav>
  );
}

export default Navbar;

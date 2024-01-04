import React from "react";
import "./Start.css";
import { NavLink } from "react-router-dom";

function Start() {
  return (
    <nav className="start-main-nav">
      <div className="start-nav-content">
        <ul>
          <li>
            <NavLink to="/start/registration">Registration</NavLink>
          </li>
          <li>User Details</li>
          <li>Company Registration</li>
          <li>Access Remove</li>
        </ul>
      </div>
    </nav>
  );
}

export default Start;

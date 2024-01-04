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
          <li>
            {" "}
            <NavLink to="/start/user-details">User Details</NavLink>
          </li>
          <li>
            <NavLink to="/start/company-registration">
              Company Registration
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/start/access-remove">Access Remove</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Start;

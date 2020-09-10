import React from "react";
import "./navbar.css";
import { NavLink, Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="row">
        <ul className="navbar">
          <li>
            <NavLink exact activeClassName="selected" to="/">
              Contact List
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/group-list">
              Group List
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;

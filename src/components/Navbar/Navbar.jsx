import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="row">
        <ul className="navbar">
          <li>
            <Link to="/">Contact List</Link>
          </li>
          <li>
            <Link to="/group-list">Group List</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;

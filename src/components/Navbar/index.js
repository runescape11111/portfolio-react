import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Pupster
      </Link>
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/about" className="nav-link" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/discover" className="nav-link" activeClassName="active">
              Discover
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/search" className="nav-link" activeClassName="active">
              Search
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

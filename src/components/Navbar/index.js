import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
    <Link to="/"><div><h1>Yijie Shi (Oliver)</h1></div></Link>
    <nav>
        <ul>
            <li>
                <NavLink to="/about" className="nav-link">About me</NavLink>
            </li>
            <li>
                <NavLink to="/work" className="nav-link">Work</NavLink>
            </li>
            <li>
                <NavLink to="/contact" className="nav-link">Contact me</NavLink>
            </li>
            <li>
                <a href="/Resume.pdf" target="blank">Resume</a>
            </li>
        </ul>
    </nav>
</header>
  );
}

export default Navbar;

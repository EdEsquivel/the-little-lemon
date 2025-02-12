import React, { useState } from "react";
import logo from "../icons_assets/Logo .svg"

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <>
      <section>
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
          <a href="/" className="logo">
            <img src={logo} alt="logo" />
          </a>

          {/* Mobile Navbar */}
          <div className="menu-icon" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          {/* Nav items */}
          <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#header-section">About</a>
            </li>
            <li>
              <a href="/#menu-section">Menu</a>
            </li>
            <li>
              <a href="/booking">Reservations</a>
            </li>
            <li>
              <a href="/#menu-section">Order Online</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}

export default Nav;

import React from "react";
import logo from "../icons_assets/Logo.svg";

function Footer() {
  return (
    <>
      <hr />
      <h2>Footer</h2>
      <footer>
        <figure>
          <img src={logo} alt="Website Logo" />
        </figure>
        <h3>
          Doormat <br />
          Navigation
        </h3>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservation">Reservation</a>
            </li>
          </ul>
        </nav>

        <div className="contact-info">
          <h3>Contact</h3>
          <p>12 Main Street, Chicago, USA</p>
          <p>321-456-7890</p>
          <p>contact@littlelemon.com</p>
        </div>

        <div className="social-media">
          <h3>Social Media Links</h3>
          <ul>
            <li>
              <a href="https://www.facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com">Instagram</a>
            </li>
            <li>
              <a href="https://www.twitter.com">Twitter</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;

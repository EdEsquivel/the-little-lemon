import React from "react";
import logo from "../icons_assets/Logo .svg";

const Footer = () => {
  return (
    <>
      <footer>
        <section>
          <figure className="company-info">
            <img src={logo} alt="Website Logo" />
            <figcaption>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</figcaption>
          </figure>            
          <div>
            <h3>Important Links</h3>        
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#header-section">About</a>
                </li>
                <li>
                  <a href="#menu-section">Menu</a>
                </li>
                <li>
                  <a href="/booking">Reservations</a>
                </li>
                <li>
                  <a href="#menu-section">Order Online</a>
                </li>
                <li>
                  <a href="/login">Login</a>
                </li>
              </ul>        
          </div>
             

          <div className="">
            <h3>Contact</h3>
            <ul>
              <li>Address: <br/>12 Main Street, Chicago, USA</li>
              <li>Phone: <br/>321-456-7890</li>
              <li>Email: <br/>contact@littlelemon.com</li>
            </ul>
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
        </section>
      </footer>
    </>
  );
}

export default Footer;

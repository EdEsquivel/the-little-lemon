import React from "react";
import logo from "../icons_assets/Logo.svg";
function Header() {
  return (
    <>
      <header>
        <figure>
          <img src={logo} alt="Website Logo" />
        </figure>
      </header>
    </>
  );
}

export default Header;

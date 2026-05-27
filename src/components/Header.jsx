import React from "react";
import { Link } from "react-router";

function Header() {
  return (
    <>
      <div className="container">
        <div className="flexed-logo">
          <h1 className="logo-name">Huntley's</h1>
          <h4 className="secondary-name">SAUCES</h4>
          <Link to="/products">SHOP ALL</Link>
          <Link to="/about">ABOUT US</Link>
          <Link to="contact">CONTACT</Link>
        </div>
      </div>
    </>
  );
}

export default Header;

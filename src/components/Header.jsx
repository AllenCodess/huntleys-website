import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <div className="container">
        <div className="flexed-navigation">
          <div className="navigation-logo">
            <h1 className="logo-name">Huntley's</h1>
            <h4 className="secondary-name">SAUCES</h4>
          </div>
          <div className="navigation-links">
            <Link className="nav-links" to="/products">
              SHOP ALL
            </Link>
            <Link className="nav-links" to="/about">
              ABOUT US
            </Link>
            <Link className="nav-links" to="/contact">
              CONTACT
            </Link>
          </div>
          <div className="navigation-icons">
            <Link to="/signin">
              <FontAwesomeIcon className="nav-icon" icon={faUser} size="lg" />
            </Link>
            <Link to="/cart">
              <FontAwesomeIcon className="nav-icon" icon={faCartShopping} size="lg" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

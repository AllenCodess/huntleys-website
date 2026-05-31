import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Hamburger from "hamburger-react";
import { useState } from "react";

function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="container">
        <div className="flexed-navigation">
          <Link className="nav-logo-link" to={"/"}>
            <div className="navigation-logo">
              <h1 className="logo-name">Huntley's</h1>
              <h4 className="secondary-name">SAUCES</h4>
            </div>
          </Link>
          <div className={`navigation-links ${isOpen ? "open" : ""}`}>
            <Link className="nav-links" to="/">
              HOME
            </Link>
            <Link className="nav-links" to="/products">
              SHOP ALL
            </Link>
            <Link className="nav-links" to="/about">
              ABOUT US
            </Link>
            <Link className="nav-links" to="/contact">
              CONTACT
            </Link>
            <Link className="navIconText" to="/signin">
              SIGN IN <FontAwesomeIcon className="nav-icon" icon={faUser} size="s" />
            </Link>
            <Link className="navIconText" to="/cart">
              CART <FontAwesomeIcon className="nav-icon" icon={faCartShopping} size="s" />
            </Link>
          </div>
          <div className="hamburger">
            <Hamburger toggled={isOpen} toggle={setOpen} color="darkblue" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

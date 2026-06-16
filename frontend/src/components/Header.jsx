import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice.js";
import { useNavigate, Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [adminDropdownOpen, setAdminDropdownOpen] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

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
            {userInfo ? (
              <div className="user-dropdown">
                <button
                  className="navIconText user-dropdown-btn"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {userInfo.name.toUpperCase()}
                  <FontAwesomeIcon className="nav-icon" icon={faChevronDown} size="xs" />
                </button>
                {dropdownOpen && (
                  <div className="dropdown-menu">
                    <Link
                      className="dropdown-item"
                      to="/profile"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                    <button className="dropdown-item" onClick={logoutHandler}>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link className="navIconText" to="/login">
                LOGIN <FontAwesomeIcon className="nav-icon" icon={faUser} size="s" />
              </Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="user-dropdown">
                <button
                  className="navIconText user-dropdown-btn"
                  onClick={() => setAdminDropdownOpen(!adminDropdownOpen)}
                >
                  ADMIN
                  <FontAwesomeIcon className="nav-icon" icon={faChevronDown} size="xs" />
                </button>
                {adminDropdownOpen && (
                  <div className="dropdown-menu">
                    <Link
                      className="dropdown-item"
                      to="/admin/productlist"
                      onClick={() => setAdminDropdownOpen(false)}
                    >
                      Products
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="/admin/orderlist"
                      onClick={() => setAdminDropdownOpen(false)}
                    >
                      Orders
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="/admin/userlist"
                      onClick={() => setAdminDropdownOpen(false)}
                    >
                      Users
                    </Link>
                  </div>
                )}
              </div>
            )}
            <Link className="navIconText" to="/cart">
              CART
              <FontAwesomeIcon className="nav-icon" icon={faCartShopping} size="s" />
              {cartItems.length > 0 && (
                <span className="cart-length-number">{cartItems.length}</span>
              )}
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

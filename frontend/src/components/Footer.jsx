import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-container container">
        <div className="footer-logo">
          <h1 className="logo-name">Huntley's</h1>
          <h4 className="secondary-name">SAUCES</h4>
          <h5 className="footer-description"> Makes all food complete.</h5>
        </div>
        <div className="footer-socials">
          <h3 className="footer-header">Follow Us</h3>
          <Link to={"https://www.instagram.com/huntleysinc/"}>
            <FontAwesomeIcon className="footer-icon" icon={faInstagram} size="xl" />
          </Link>
          <Link
            to={"https://www.facebook.com/people/Huntleys-Seafood-Dippin-Sauce/100057752495962/#"}
          >
            <FontAwesomeIcon className="footer-icon" icon={faFacebookSquare} size="xl" />
          </Link>
        </div>
        <div className="footer-shop">
          <h3 className="footer-header">SHOP</h3>
          <Link className="footer-links" to={"/products"}>
            ALL PRODUCTS
          </Link>
        </div>
        <div className="footer-company">
          <h3 className="footer-header">COMPANY</h3>
          <Link className="footer-links" to={"/about"}>
            ABOUT US
          </Link>
        </div>
      </div>
      <p className="copyright container">Copyright © {year} Huntley's Inc. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

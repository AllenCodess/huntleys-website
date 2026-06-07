import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faStar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router";

const FirstSection = () => {
  return (
    <section className="container section-text">
      <div className="section-flex-container">
        <div className="section-flex-item">
          <div className="section-text-container">
            <FontAwesomeIcon className=" circle-icon" icon={faStar} size="s" />
            <h2 className="section-header">SAUCES</h2>
            <p className="section-description">Bold flavours for every meal.</p>
            <Link to={"/products"}>
              <button className="section-btn">SHOP SAUCES</button>
            </Link>
          </div>

          <img className="section-img" src="/images/saucev2.png" alt="" />
        </div>
        <div className="section-flex-item">
          <div className="section-text-container">
            <FontAwesomeIcon className=" circle-icon" icon={faStar} size="s" />
            <h2 className="section-header">SIGN IN</h2>
            <p className="section-description">
              Sign in to your account to track orders, save favorites, and more.
            </p>
            <Link to={"/signin"}>
              <button className="section-btn">SIGN IN</button>
            </Link>
          </div>

          <img className="section-img" src="/images/signinv2.png" alt="" />
        </div>
        <div className="section-flex-item">
          <div className="section-text-container">
            <FontAwesomeIcon className=" circle-icon" icon={faStar} size="" />
            <h2 className="section-header">FEATURED</h2>
            <p className="section-description">Check out our featured sauce.</p>
            <Link to={"/product/6a21601655fc69065b469c66"}>
              <button className="section-btn">VIEW FEATURED</button>
            </Link>
          </div>

          <img className="section-img" src="/images/featuredv2.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;

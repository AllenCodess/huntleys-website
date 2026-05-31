import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <div className="hero-container container">
      <div className="img-container">
        <img className="hero-img" src="/images/homeherov2.png" alt="" />
        <div className="hero-text-container">
          <h3 className="hero-section-font-one">Premium Sauces & Dips</h3>
          <h1 className="hero-section-font-two">BOLD FLAVOUR.</h1>
          <h1 className="hero-section-font-two">
            MADE FOR <strong className="hero-more">MORE.</strong>
          </h1>
          <p className="hero-description">
            Huntley's Sauces are handcrafted in small batches using the finest ingredients for
            flavour that takes every dish to the next level.
          </p>
          <Link to={"/products"}>
            <button className="hero-btn">
              SHOP SAUCES
              <FontAwesomeIcon className="btn-arrow" icon={faArrowRight} size="lg" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

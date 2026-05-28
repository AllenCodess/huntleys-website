import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HomeScreen = () => {
  return (
    <>
      <Header />
      <div className="hero-container container">
        <div className="img-container">
          <img
            className="hero-img"
            src="/public/images/LandingPage-Images/hero-section-img.png"
            alt=""
          />
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
            <button className="hero-btn">
              SHOP SAUCES
              <FontAwesomeIcon className="btn-arrow" icon={faArrowRight} size="lg" color="black" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;

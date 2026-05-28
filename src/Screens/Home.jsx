import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const HomeScreen = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <section className="container section-text">
        <div className="section-flex-container">
          <div className="section-flex-item">
            <div className="section-text-container">
              <FontAwesomeIcon className="circle-icon" icon={faStar} size="lg" />
              <h2 className="section-header">SAUCES</h2>
              <p className="section-description">Bold flavours for every occasion.</p>
              <button>SHOP SAUCES</button>
            </div>

            <img
              className="section-img"
              src="../public/images/LandingPage-Images/sauce.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeScreen;

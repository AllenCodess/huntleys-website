import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";

const HomeScreen = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <FirstSection />
      <SecondSection />
      <section className="third-section third-section-container">
        <div className="img-container-third-section">
          <img
            className="third-section-img"
            src="public/images/LandingPage-Images/above-footer-img.png"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default HomeScreen;

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";

const HomeScreen = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <footer>
        <div className="footer-container container">
          <h1 className="logo-name">Huntley's</h1>
          <h4 className="secondary-name">SAUCES</h4>
          <h5 className="footer-description"> Makes all food complete.</h5>
        </div>
      </footer>
    </>
  );
};

export default HomeScreen;

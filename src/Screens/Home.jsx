import Header from "../components/Header";

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
            <h3>Premium Sauces & Dips</h3>
            <h1>BOLD FLAVOUR.</h1>
            <h1>MADE FOR MORE.</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;

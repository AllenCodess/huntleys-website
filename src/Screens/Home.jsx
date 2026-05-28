import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <>
      <Header />
      <div className="hero-container container">
        <img
          className="hero-img"
          src="/public/images/LandingPage-Images/hero-section-img.png"
          alt=""
        />
      </div>
    </>
  );
};

export default HomeScreen;

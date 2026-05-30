import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header />
      <div className="AboutHeroSection container">
        <div className="about-hero-container">
          <img
            className="about-hero-img"
            src="/images/LandingPage-Images/Jars/6JarsBackground.png"
            alt="Six Huntley Products"
          />
          <div className="about-header-container">
            <h2 className="about-main-header">Our Story</h2>
            <h1 className="about-sub-header">
              MADE WITH PURPOSE INSPIRED BY <strong>FAMILY.</strong>
            </h1>
          </div>
          <div className="right-side-hero-container">
            <img
              className="about-hero-img-tiffany"
              src="/images/LandingPage-Images/Tiffany3RemovebgPreview.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

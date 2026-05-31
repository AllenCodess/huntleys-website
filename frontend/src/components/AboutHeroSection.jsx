const AboutHeroSection = () => {
  return (
    <div className="AboutHeroSection container">
      <div className="about-hero-container">
        <img
          className="about-hero-img"
          src="/images/6JarsBackground.png"
          alt="Six Huntley Products"
        />
        <div className="about-header-container">
          <h2 className="about-main-header">Our Story</h2>
          <h1 className="about-sub-header">
            MADE WITH PURPOSE. INSPIRED BY <strong>FAMILY.</strong>
          </h1>
        </div>
        <div className="right-side-hero-container">
          <img
            className="about-hero-img-tiffany"
            src="/images/Tiffany3RemovebgPreview.png"
            alt=""
          />
          <div className="about-hero-text-container">
            <h2 className="about-hero-name">Tiffany K.</h2>
            <h2 className="about-hero-last-name">HUNTLEY</h2>
            <p className="about-hero-title">FOUNDER & OWNER</p>
            <div className="circle-container circle">
              <span className="about-hero-all-food">MAKES ALL </span>
              <span className="about-food-text">Food</span>
              <span className="about-hero-all-food">COMPLETE!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;

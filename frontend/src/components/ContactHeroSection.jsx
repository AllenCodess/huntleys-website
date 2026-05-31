const ContactHeroSection = () => {
  return (
    <>
      <div className="contact-hero-container container">
        <div className="img-container">
          <img className="contact-hero-img" src="/images/aboutheroimg.png" alt="" />

          <div className="contact-hero-section-text-container">
            <h2 className="contact-hero-title">We'd Love to Hear From You!</h2>
            <h2 className="contact-hero-header">
              LET'S STAY <span className="contact-hero-connected">CONNECTED.</span>
            </h2>
            <p className="contact-hero-description">
              Have a question about our sauces, need help with an order, or interested in partnering
              with us? We're here to help!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHeroSection;

const SecondSection = () => {
  return (
    <section className="collection collection-container">
      <div className="collection-header">
        <h3 className="collection-title">Our Collection</h3>
        <h2 className="collection-subtitle"> SHOP OUR SAUCES</h2>
      </div>
      <div className="sauce-collection-container">
        <div className="sauce-collection-item">
          <img
            className="collection-image"
            src="public/images/LandingPage-Images/Jars/seafoodDippinV2.png"
            alt=""
          />
          <p className="sauce-name">Seafood Dippin' Sauce</p>
          <p className="collection-price">$5.99</p>
          <button className="collection-btn"> ADD TO CART</button>
        </div>
        <div className="sauce-collection-item">
          <img
            className="collection-image"
            src="public/images/LandingPage-Images/Jars/cockTailSauce.png"
            alt=""
          />
          <p className="sauce-name">CockTail Sauce</p>
          <p className="collection-price">$5.99</p>
          <button className="collection-btn"> ADD TO CART</button>
        </div>
        <div className="sauce-collection-item">
          <img
            className="collection-image"
            src="public/images/LandingPage-Images/Jars/TartarSauce.png"
            alt=""
          />
          <p className="sauce-name">Spicy Tartar Sauce</p>
          <p className="collection-price">$5.99</p>
          <button className="collection-btn"> ADD TO CART</button>
        </div>
        <div className="sauce-collection-item">
          <img
            className="collection-image"
            src="public/images/LandingPage-Images/Jars/BBQandHoneyMustard.png"
            alt=""
          />
          <p className="sauce-name">BBQ & Honey Mustard </p>
          <p className="collection-price">$5.99</p>
          <button className="collection-btn"> ADD TO CART</button>
        </div>
        <div className="sauce-collection-item">
          <img
            className="collection-image"
            src="public/images/LandingPage-Images/Jars/BlazinBlueCheese.png"
            alt=""
          />
          <p className="sauce-name">Blazin' Blue Cheese </p>
          <p className="collection-price">$5.99</p>
          <button className="collection-btn"> ADD TO CART</button>
        </div>
        <div className="sauce-collection-item">
          <img
            className="collection-image"
            src="public/images/LandingPage-Images/Jars/BlazinRanch.png"
            alt=""
          />
          <p className="sauce-name">Blazin' Ranch Sauce</p>
          <p className="collection-price">$5.99</p>
          <button className="collection-btn"> ADD TO CART</button>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;

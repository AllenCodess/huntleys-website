import { useState } from "react";
import Header from "../components/Header";

const ShippingScreen = () => {
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Header />
      <div className="shipping-form-container container">
        <h1 className="shipping-header">Shipping</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="address"
            value={formData.address}
            placeholder="Address"
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            value={formData.city}
            placeholder="City"
            onChange={handleChange}
          />
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            placeholder="Postal Code"
            onChange={handleChange}
          />
          <input
            type="text"
            name="country"
            value={formData.country}
            placeholder="Country"
            onChange={handleChange}
          />
          <button>Continue</button>
        </form>
      </div>
    </>
  );
};

export default ShippingScreen;

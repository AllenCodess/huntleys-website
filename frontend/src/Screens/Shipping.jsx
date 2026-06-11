import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { saveShippingAddress } from "../slices/cartSlice";
import Header from "../components/Header";
import CheckoutSteps from "../components/CheckoutSteps";

const ShippingScreen = () => {
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress(formData));
    navigate("/payment");
  };

  return (
    <>
      <Header />
      <div className="shipping-form-container container">
        <CheckoutSteps step1 step2 />
        <div className="shipping-whole-container">
          <h1 className="shipping-header">Shipping</h1>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              className="shipping-inputs"
              name="address"
              value={formData.address}
              placeholder="Address"
              onChange={handleChange}
            />
            <input
              type="text"
              name="city"
              className="shipping-inputs"
              value={formData.city}
              placeholder="City"
              onChange={handleChange}
            />
            <input
              type="text"
              name="postalCode"
              className="shipping-inputs"
              value={formData.postalCode}
              placeholder="Postal Code"
              onChange={handleChange}
            />
            <input
              type="text"
              name="country"
              className="shipping-inputs"
              value={formData.country}
              placeholder="Country"
              onChange={handleChange}
            />
            <button className="shipping-btn">Continue</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ShippingScreen;

import CheckoutSteps from "../components/CheckoutSteps";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../slices/cartSlice";
import Header from "../components/Header";

const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };

  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress = {} } = cart;

  useEffect(() => {
    if (!shippingAddress.address) {
      navigate("/shipping");
    }
  }, [navigate, shippingAddress]);

  return (
    <>
      <Header />
      <div className="payment-container container">
        <CheckoutSteps step1 step2 step3 />
        <h1 className="payment-header">Payment Method</h1>
        <form onSubmit={submitHandler}>
          <div>
            <p>Select Method</p>
            <div className="payment-radio-group">
              <input
                type="radio"
                id="PayPal"
                name="paymentMethod"
                className="payment-input"
                value="PayPal"
                checked={paymentMethod === "PayPal"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="PayPal">PayPal or Credit Card</label>
            </div>
          </div>
          <button type="submit" className="payment-btn">
            Continue
          </button>
        </form>
      </div>
    </>
  );
};

export default PaymentScreen;

import { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";
import Header from "../components/Header";

function PlaceOrderScreen() {
  const navigate = useNavigate();
  const cart = useSelector(function (state) {
    return state.cart;
  });

  useEffect(
    function () {
      if (!cart.shippingAddress.address) {
        navigate("/shipping");
      } else if (!cart.paymentMethod) {
        navigate("/payment");
      }
    },
    [cart.paymentMethod, cart.shippingAddress.address, navigate],
  );

  return (
    <>
      <Header />
      <CheckoutSteps step1 step2 step3 step4 />
      <div className="placeorder-container">
        <div className="placeorder-left">Column</div>
        <div className="placeorder-right">Column</div>
        <h1>test s</h1>
      </div>
    </>
  );
}

export default PlaceOrderScreen;

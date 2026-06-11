import { useState } from "react";
import CheckoutSteps from "../components/CheckoutSteps";
import Header from "../components/Header";

const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  return (
    <>
      <Header />
      <div className="payment-container container">
        <CheckoutSteps step1 step2 step3 />
        <h1>Payment Method</h1>
        <form>
          <fieldset>
            <legend>Select Method</legend>
            <label>
              <input
                type="radio"
                id="PayPal"
                name="paymentMethod"
                value="PayPal"
                checked={paymentMethod === "PayPal"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              PayPal or Credit Card
            </label>
          </fieldset>
          <button type="submit">Continue</button>
        </form>
      </div>
    </>
  );
};

export default PaymentScreen;

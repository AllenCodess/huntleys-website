import { Link } from "react-router";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <nav className="checkout-steps">
      <ul>
        <li>
          {step1 ? <Link to="/login">Sign In</Link> : <span className="disabled">Sign In</span>}
        </li>
        <li>
          {step2 ? (
            <Link to="/shipping">Shipping</Link>
          ) : (
            <span className="disabled">Shipping</span>
          )}
        </li>
        <li>
          {step3 ? <Link to="/payment">Payment</Link> : <span className="disabled">Payment</span>}
        </li>
        <li>
          {step4 ? (
            <Link to="/placeorder">Place Order</Link>
          ) : (
            <span className="disabled">Place Order</span>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default CheckoutSteps;

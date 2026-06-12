import { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import CheckoutSteps from "../components/CheckoutSteps";
import Header from "../components/Header";
import { useCreateOrderMutation } from "../slices/ordersApiSlice";
import { clearCartItems } from "../slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

function PlaceOrderScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(function (state) {
    return state.cart;
  });

  const [createOrder, { isLoading, error }] = useCreateOrderMutation();

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

  async function placeOrderHandler() {
    try {
      const res = await createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      }).unwrap();
      dispatch(clearCartItems());
      navigate(`/order/${res._id}`);
    } catch (err) {
      toast.error(err);
    }
  }

  return (
    <>
      <Header />
      <CheckoutSteps step1 step2 step3 step4 />
      <div className="placeorder-container">
        <div className="placeorder-left">
          <div className="placeorder-section">
            <h2>Shipping</h2>
            <p>
              <strong>Address: </strong>
              {cart.shippingAddress.address}, {cart.shippingAddress.city},
              {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
            </p>
          </div>

          <div className="placeorder-section">
            <h2>Payment Method</h2>
            <strong>Method: </strong>
            {cart.paymentMethod}
          </div>

          <div className="placeorder-section">
            <h2>Order Items</h2>
            {cart.cartItems.length === 0 ? (
              <Message>Your cart is empty</Message>
            ) : (
              <div>
                {cart.cartItems.map(function (item, index) {
                  return (
                    <div key={index} className="placeorder-item">
                      <img src={item.image} alt={item.name} className="placeorder-item-image" />
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                      <span>
                        {item.qty} x ${item.price} = ${item.qty * item.price}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className="placeorder-right">
          <div className="placeorder-summary">
            <h2>Order Summary</h2>

            <div className="placeorder-summary-row">
              <span>Items</span>
              <span>${cart.itemsPrice}</span>
            </div>

            <div className="placeorder-summary-row">
              <span>Shipping</span>
              <span>${cart.shippingPrice}</span>
            </div>

            <div className="placeorder-summary-row">
              <span>Tax</span>
              <span>${cart.taxPrice}</span>
            </div>

            <div className="placeorder-summary-row">
              <span>Total</span>
              <span>${cart.totalPrice}</span>
            </div>

            {error && <Message variant="danger">{error}</Message>}

            <button
              type="button"
              className="btn btn-block"
              disabled={cart.cartItems.length === 0}
              onClick={placeOrderHandler}
            >
              Place Order
            </button>

            {isLoading && <Loader />}
          </div>
        </div>
      </div>
    </>
  );
}

export default PlaceOrderScreen;

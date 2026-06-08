import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import { addToCart, removeFromCart } from "../slices/cartSlice";

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems, itemsPrice, shippingPrice, taxPrice, totalPrice } = cart;

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <Header />
      <div className="cart-container container">
        <h1 className="cart-header">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <p>Your Shopping Cart is empty</p>
        ) : (
          <div className="item-and-price-container">
            <div className="item-list">
              {cartItems?.map((item) => (
                <div className="single-product" key={item._id}>
                  <img className="cart-image" src={item.image} alt={item.name} />
                  <p className="sauce-name">{item.name}</p>
                  <p className="collection-price">${item.price}</p>
                  <div className="qty-selector">
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(addToCart({ ...item, qty: Number(e.target.value) }))
                      }
                      className="qty-select"
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                    <button
                      className="cart-trash-btn"
                      onClick={() => removeFromCartHandler(item._id)}
                    >
                      <FontAwesomeIcon icon={faTrash} className="cart-trash" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-price">
              <h2 className="cart-price-header">
                Pricing (<span>{cartItems.length}</span>) Items
              </h2>
              <p className="cart-prices">Item(s): {cart.itemsPrice}</p>
              <p className="cart-prices">Shipping: {cart.shippingPrice}</p>
              <p className="cart-prices">Tax: {cart.taxPrice}</p>
              <p className="cart-prices">Total Price: {cart.totalPrice}</p>
              <button className="cart-btn">Proceed To Checkout</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default CartScreen;

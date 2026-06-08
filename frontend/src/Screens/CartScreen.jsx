import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <>
      <Header />
      <div className="cart-container container">
        <h1 className="cart-header">Shopping Cart</h1>
      </div>
    </>
  );
};
export default CartScreen;

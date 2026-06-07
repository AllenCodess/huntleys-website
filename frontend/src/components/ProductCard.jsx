import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "../slices/cartSlice.js";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
  };

  return (
    <div className="card-container">
      <Link className="productslink" to={`/product/${product._id}`}>
        <img className="productimg" src={product.image} alt="" />
      </Link>

      <div className="product-text-container">
        <Link className="productslink" to={`/product/${product._id}`}>
          <p className="product-title">{product.name}</p>
        </Link>
        <p className="product-price">{product.price}</p>
        <button
          className="product-btn"
          onClick={addToCartHandler}
          disabled={product.countInStock === 0}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

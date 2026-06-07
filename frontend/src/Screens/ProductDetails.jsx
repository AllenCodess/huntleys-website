import Header from "../components/Header";
import Footer from "../components/Footer";
import { useGetProductDetailsQuery } from "../slices/productApiSlice.js";
import { ClipLoader } from "react-spinners";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice.js";

const ProductDetails = () => {
  const { id: productId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate("/cart");
  };

  const { data: product, isLoading, error } = useGetProductDetailsQuery(productId);
  const override = {
    display: "block",
    margin: "0 auto",
  };

  return (
    <>
      <Header />
      {isLoading ? (
        <ClipLoader cssOverride={override} size={150} speedMultiplier={10} />
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
        <div className="product-details-container ">
          <div className="product-details-left">
            <img className="productDetailsimg" src={product.image} alt="" />
          </div>
          <div className="product-details-right">
            <h1 className="huntleys-heading">HUNTLEY'S</h1>
            <h2 className="product-details-sauce-name">{product.name}</h2>
            <p className="product-details-description">{product.description}</p>
            <p className="product-details-price">${product.price}</p>

            {/* Quantity selector */}
            <div className="qty-selector">
              <select
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
                className="qty-select"
              >
                {[...Array(product.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </div>

            <button
              className="product-details-btn"
              onClick={addToCartHandler}
              disabled={product.countInStock === 0}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ProductDetails;

import { useGetProductsQuery } from "../slices/productApiSlice.js";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice.js";
import { useState } from "react";

const SecondSection = () => {
  const { data: products } = useGetProductsQuery();

  const dispatch = useDispatch();

  const [qty, setQty] = useState(1);

  const addToCartHandler = (product) => {
    dispatch(addToCart({ ...product, qty }));
  };
  return (
    <section className="collection collection-container">
      <div className="collection-header">
        <h3 className="collection-title">Our Collection</h3>
        <h2 className="collection-subtitle"> SHOP OUR SAUCES</h2>
      </div>
      <div className="sauce-collection-container">
        {products?.map((product) => (
          <div className="sauce-collection-item" key={product._id}>
            <img className="collection-image" src={product.image} alt={product.name} />
            <p className="sauce-name">{product.name}</p>
            <p className="collection-price">${product.price}</p>
            <button
              className="collection-btn"
              onClick={() => addToCartHandler(product)}
              disabled={product.countInStock === 0}
            >
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecondSection;

import Footer from "../components/Footer.jsx";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { useGetProductsQuery } from "../slices/productApiSlice.js";
import { ClipLoader } from "react-spinners";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice.js";

const ProductsScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const override = {
    display: "block",
    margin: "0 auto",
  };
  return (
    <>
      <Header />
      <div className="products-content-container container">
        <div className="products-header">
          <h2 className="products-title">Our Colleciton</h2>
          <h2 className="products-heading">SHOP ALL SAUCES</h2>
          <p className="products-description">
            From seafood to BBQ and everything in between, our sauces are handcrafted to bring bold
            flavour to every meal.
          </p>
        </div>
        {isLoading ? (
          <ClipLoader cssOverride={override} size={150} speedMultiplier={10} />
        ) : error ? (
          <div>{error?.data.message || error.error}</div>
        ) : (
          <div className="display-product-card">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductsScreen;

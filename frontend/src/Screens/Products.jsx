import Footer from "../components/Footer.jsx";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";

const ProductsScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/products");
      const response = await data.json();

      setProducts(response);
    };

    fetchData();
  }, []);

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
        <div className="display-product-card">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsScreen;

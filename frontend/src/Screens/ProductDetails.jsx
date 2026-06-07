import { useParams } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useGetProductDetailsQuery } from "../slices/productApiSlice.js";

const ProductDetails = () => {
  const { id: productId } = useParams();
  const { data: product, isLoading, error } = useGetProductDetailsQuery(productId);

  return (
    <>
      <Header />
      {isLoading ? (
        <div> Loading . . .</div>
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
            <button className="product-details-btn">ADD TO CART</button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ProductDetails;

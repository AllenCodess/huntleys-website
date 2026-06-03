import { useParams } from "react-router";
import products from "../products";
import Header from "../components/Header";

const ProductDetails = () => {
  const { id: productId } = useParams();
  const product = products.find((p) => p._id === productId);
  console.log(product);
  return (
    <>
      <Header />
      <div className="product-details-container"></div>
    </>
  );
};

export default ProductDetails;

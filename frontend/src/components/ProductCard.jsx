import { Link } from "react-router";

const ProductCard = ({ product }) => {
  return (
    <div className="card-container">
      <img className="productimg" src={product.image} alt="" />

      <div className="product-text-container">
        <Link className="productslink" to={`/product/${product._id}`}>
          <p className="product-title">{product.name}</p>
        </Link>
        <p className="product-price">{product.price}</p>
        <button className="product-btn">ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductCard;

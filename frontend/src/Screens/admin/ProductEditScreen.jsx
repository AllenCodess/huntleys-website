import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import {
  useGetProductDetailsQuery,
  useUpdateProductMutation,
} from "../../slices/productApiSlice.js";

const ProductEditScreen = () => {
  const { id: productId } = useParams();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");

  const { data: product, isLoading, refetch, error } = useGetProductDetailsQuery(productId);

  const [updateProduct, { isLoading: loadingUpdate }] = useUpdateProductMutation();

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await updateProduct({
        productId,
        name,
        price,
        image,
        description,
        countInStock,
      });
      toast.success("product updated successfully");
      refetch();
      navigate("/admin/productlist");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
      setCountInStock(product.countInStock);
      setDescription(product.description);
    }
  }, [product]);

  return (
    <div className="product-edit-container">
      <Link to="/admin/productlist" className="btn-go-back">
        Go Back
      </Link>

      <h1>Edit Product</h1>
      {loadingUpdate && <div className="loader">Loading...</div>}
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : error ? (
        <p className="message message-danger">{error?.data?.message || error.error}</p>
      ) : (
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              id="price"
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          {/* IMAGE INPUT PLACEHOLDER */}

          <div className="form-group">
            <label htmlFor="countInStock">Count In Stock</label>
            <input
              id="countInStock"
              type="number"
              placeholder="Enter countInStock"
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button type="submit" className="btn-update">
            Update
          </button>
        </form>
      )}
    </div>
  );
};

export default ProductEditScreen;

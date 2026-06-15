import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Header";
import { toast } from "react-toastify";
import { useGetProductsQuery, useCreateProductMutation } from "../../slices/productApiSlice";

function ProductListScreen() {
  const { data: products, isLoading, error, refetch } = useGetProductsQuery();

  const [createProduct, { isLoading: loadingCreate }] = useCreateProductMutation();

  const createProductHandler = async () => {
    if (window.confirm("Are you sure you want to create a new product?")) {
      try {
        await createProduct();
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const deleteHandler = (id) => {
    console.log("delete", id);
  };

  return (
    <>
      <Header />
      <div className="productlist-container container">
        <div className="productlist-top">
          <h1 className="productlist-header">Products</h1>
          <button className="productlist-create-btn" onClick={createProductHandler}>
            <FontAwesomeIcon icon={faPlus} /> Create Product
          </button>
        </div>

        {loadingCreate && <p>Creating...</p>}

        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error?.data?.message || error.error}</p>
        ) : (
          <table className="orders-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>

                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map(function (product) {
                return (
                  <tr key={product._id}>
                    <td>{product._id}</td>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.brand}</td>
                    <td>
                      <Link to={`/admin/product/${product._id}/edit`}>
                        <button className="product-edit-btn">
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                      </Link>
                      <button
                        className="product-delete-btn"
                        onClick={() => deleteHandler(product._id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        {/* PAGINATE PLACEHOLDER */}
      </div>
    </>
  );
}

export default ProductListScreen;

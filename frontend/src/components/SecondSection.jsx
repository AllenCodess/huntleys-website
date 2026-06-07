import { useGetProductsQuery } from "../slices/productApiSlice.js";

const SecondSection = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
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
            <button className="collection-btn">ADD TO CART</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecondSection;

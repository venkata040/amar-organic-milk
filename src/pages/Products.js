import "./Products.css";
import ProductList from "../components/products/ProductList";

function Products() {
  return (
    <div className="products-page">

      <h1>Our Organic Products</h1>

      <input
        type="text"
        placeholder="🔍 Search Products..."
        className="search-box"
      />

      <ProductList />

    </div>
  );
}

export default Products;
import ProductList from "../components/products/ProductList";

function Products({ cart, setCart }) {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>
        Our Organic Products
      </h1>

      <ProductList
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
}

export default Products;
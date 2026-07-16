import ProductCard from "./ProductCard";
import "./ProductList.css";

function ProductList() {
  return (
    <div className="product-list">

      <ProductCard
        name="Cow Milk"
        price="$4.99 / Litre"
        description="Fresh organic cow milk."
      />

      <ProductCard
        name="Buffalo Milk"
        price="$5.99 / Litre"
        description="Rich and creamy buffalo milk."
      />

      <ProductCard
        name="Curd"
        price="$6.99 / Pack"
        description="Healthy homemade curd."
      />

      <ProductCard
        name="Ghee"
        price="$18.99 / Jar"
        description="Pure organic cow ghee."
      />

    </div>
  );
}

export default ProductList;
import { useEffect, useState } from "react";
import "./ProductList.css";
import ProductCard from "./ProductCard";

import cowMilk from "../../assets/images/cow-milk.jpg";
import buffaloMilk from "../../assets/images/buffalo-milk.webp";
import curd from "../../assets/images/curd.jpg";
import ghee from "../../assets/images/ghee.jpg";

const imageMap = {
  "cow-milk.jpg": cowMilk,
  "buffalo-milk.jpg": buffaloMilk,
  "curd.jpg": curd,
  "ghee.jpg": ghee,
};

function ProductList({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => {
        const updatedProducts = data.products.map((product) => ({
          ...product,
          image: imageMap[product.image],
          price: `$${Number(product.price).toFixed(2)}`,
        }));

        setProducts(updatedProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading products...</h2>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
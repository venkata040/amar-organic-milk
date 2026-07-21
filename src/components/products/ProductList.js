import "./ProductList.css";
import ProductCard from "./ProductCard";

import cowMilk from "../../assets/images/cow-milk.jpg";
import buffaloMilk from "../../assets/images/buffalo-milk.webp";
import curd from "../../assets/images/curd.jpg";
import ghee from "../../assets/images/ghee.jpg";

const products = [
  {
    image: cowMilk,
    name: "Cow Milk",
    description: "Fresh organic cow milk from healthy grass-fed cows.",
    price: "$4.99 / Litre",
  },
  {
    image: buffaloMilk,
    name: "Buffalo Milk",
    description: "Rich and creamy buffalo milk with high nutrition.",
    price: "$5.99 / Litre",
  },
  {
    image: curd,
    name: "Curd",
    description: "Fresh homemade organic curd.",
    price: "$6.99",
  },
  {
    image: ghee,
    name: "Organic Ghee",
    description: "Pure traditional organic ghee.",
    price: "$14.99",
  },
];

function ProductList({ cart, setCart }) {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard
  key={index}
  image={product.image}
  name={product.name}
  description={product.description}
  price={product.price}
  product={product}
  cart={cart}
  setCart={setCart}
/>
      ))}
    </div>
  );
}

export default ProductList;
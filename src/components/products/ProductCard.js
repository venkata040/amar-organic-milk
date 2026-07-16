import "./ProductCard.css";

function ProductCard({ name, price, description }) {
  return (
    <div className="product-card">

      <div className="product-image">
        🥛
      </div>

      <h2>{name}</h2>

      <p>{description}</p>

      <h3>{price}</h3>

      <button>Add to Cart</button>

    </div>
  );
}

export default ProductCard;
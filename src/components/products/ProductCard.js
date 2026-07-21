import "./ProductCard.css";

function ProductCard({
  image,
  name,
  description,
  price,
  product,
  cart,
  setCart,
}) {

  const handleAddToCart = () => {
  setCart([...cart, product]);
};

  return (
    <div className="product-card">
      <img
        src={image}
        alt={name}
        className="product-image"
      />

      <h3>{name}</h3>

      <p>{description}</p>

      <h4>{price}</h4>

      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
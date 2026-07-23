import "./ProductCard.css";

function ProductCard({ product, cart, setCart }) {
  const handleAddToCart = () => {
    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  return (
    <div className="product-card">

      <div className="product-badge">
        🌿 Organic
      </div>

      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <h2>{product.name}</h2>

      <div className="rating">
        ⭐⭐⭐⭐⭐ <span>(4.9)</span>
      </div>

      <p>{product.description}</p>

      <h3>{product.price}</h3>

      <button onClick={handleAddToCart}>
        🛒 Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;
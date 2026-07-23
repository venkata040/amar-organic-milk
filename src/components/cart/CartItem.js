import "./CartItem.css";

function CartItem({ product, cart, setCart }) {
  // Increase Quantity
  const increaseQuantity = () => {
    const updatedCart = cart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCart(updatedCart);
  };

  // Decrease Quantity
  const decreaseQuantity = () => {
    if (product.quantity === 1) {
      const updatedCart = cart.filter(
        (item) => item.id !== product.id
      );
      setCart(updatedCart);
      return;
    }

    const updatedCart = cart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    setCart(updatedCart);
  };

  // Remove Product
  const handleRemove = () => {
    const updatedCart = cart.filter(
      (item) => item.id !== product.id
    );
    setCart(updatedCart);
  };

  // Calculate subtotal
  const price = parseFloat(product.price.replace(/[^0-9.]/g, ""));
  const subtotal = price * product.quantity;

  return (
    <div className="cart-item">
      <img
        src={product.image}
        alt={product.name}
        className="cart-image"
      />

      <div className="cart-details">
        <h2>{product.name}</h2>

        <p>{product.description}</p>

        <h3>{product.price}</h3>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            margin: "15px 0",
          }}
        >
          <button onClick={decreaseQuantity}>−</button>

          <strong>Quantity: {product.quantity}</strong>

          <button onClick={increaseQuantity}>+</button>
        </div>

        <h4>
          Subtotal: ${subtotal.toFixed(2)}
        </h4>

        <button
          className="remove-btn"
          onClick={handleRemove}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
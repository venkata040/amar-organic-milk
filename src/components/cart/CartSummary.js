import { Link } from "react-router-dom";
import "./CartSummary.css";

function CartSummary({ cart }) {
  // Total Items
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Subtotal
  const subtotal = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return sum + price * item.quantity;
  }, 0);

  const delivery = 0;
  const total = subtotal + delivery;

  return (
    <div className="cart-summary">
      <h2>Order Summary</h2>

      <div className="summary-row">
        <span>Items</span>
        <span>{totalItems}</span>
      </div>

      <div className="summary-row">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <div className="summary-row">
        <span>Delivery</span>
        <span className="free">FREE</span>
      </div>

      <div className="summary-row">
        <span>GST</span>
        <span>Included</span>
      </div>

      <hr />

      <div className="summary-total">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <Link to="/checkout">
        <button className="checkout-btn">
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
}

export default CartSummary;
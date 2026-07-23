import { Link } from "react-router-dom";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import "./Cart.css";

function Cart({ cart, setCart }) {
  return (
    <div className="cart-page">

      {/* Left Side */}
      <div className="cart-items">

        <h1>Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty 🛒</h2>
            <p>Add some fresh organic products to continue shopping.</p>

            <Link to="/products">
              <button className="continue-btn">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <>
            {cart.map((product) => (
              <CartItem
                key={product.id}
                product={product}
                cart={cart}
                setCart={setCart}
              />
            ))}

            <div className="checkout-button">
              <Link to="/checkout">
                <button>
                  Proceed to Checkout →
                </button>
              </Link>
            </div>
          </>
        )}

      </div>

      {/* Right Side */}
      <div className="cart-summary">
        <CartSummary cart={cart} />
      </div>

    </div>
  );
}

export default Cart;
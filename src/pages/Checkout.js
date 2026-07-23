import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { placeOrder } from "../services/orderService";
import "./Checkout.css";

function Checkout({ cart, setCart }) {
  const navigate = useNavigate();

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return sum + price * item.quantity;
  }, 0);

  const delivery = 0;
  const total = subtotal + delivery;

  const handlePlaceOrder = async () => {
    if (
      !customerName ||
      !phone ||
      !email ||
      !address ||
      !city ||
      !postalCode
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const orderData = {
      customer_name: customerName,
      phone,
      email,
      address,
      city,
      postal_code: postalCode,
      payment_method: paymentMethod,
      total,
      items: cart.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        price: parseFloat(item.price.replace(/[^0-9.]/g, "")),
      })),
    };

    try {
      const response = await placeOrder(orderData);

      alert(`Order placed successfully!\nOrder ID: ${response.orderId}`);

      setCart([]);

      navigate("/order-success");
    } catch (error) {
      console.error(error);
      alert("Failed to place order.");
    }
  };

  return (
    <div className="checkout-page">
      <div className="checkout-left">
        <h1>Checkout</h1>

        <div className="checkout-form">
          <h2>Customer Information</h2>

          <input
            type="text"
            placeholder="Full Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Delivery Address"
            rows="4"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <div className="address-row">
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <input
              type="text"
              placeholder="Postal Code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>

          <h2>Payment Method</h2>

          <label>
            <input
              type="radio"
              name="payment"
              value="Cash on Delivery"
              checked={paymentMethod === "Cash on Delivery"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cash on Delivery
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="Credit / Debit Card"
              checked={paymentMethod === "Credit / Debit Card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Credit / Debit Card
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="UPI"
              checked={paymentMethod === "UPI"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            UPI
          </label>

          <button
            className="place-order-btn"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>

      <div className="checkout-right">
        <div className="summary-box">
          <h2>Order Summary</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div className="summary-product" key={item.id}>
                <span>
                  {item.name} × {item.quantity}
                </span>

                <span>
                  $
                  {(
                    parseFloat(item.price.replace(/[^0-9.]/g, "")) *
                    item.quantity
                  ).toFixed(2)}
                </span>
              </div>
            ))
          )}

          <hr />

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
            <span>FREE</span>
          </div>

          <hr />

          <div className="summary-total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
import { Link } from "react-router-dom";
import "./OrderSuccess.css";

function OrderSuccess() {
  const orderNumber =
    "AM" + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="success-page">

      <div className="success-card">

        <div className="success-icon">
          ✅
        </div>

        <h1>Order Placed Successfully!</h1>

        <p>
          Thank you for choosing <strong>Amar Organic Milk</strong>.
        </p>

        <p>
          Your order has been received and will be delivered
          to your doorstep soon.
        </p>

        <div className="order-number">
          Order Number
          <br />
          <strong>#{orderNumber}</strong>
        </div>

        <Link to="/products">
          <button className="continue-shopping-btn">
            Continue Shopping
          </button>
        </Link>

      </div>

    </div>
  );
}

export default OrderSuccess;
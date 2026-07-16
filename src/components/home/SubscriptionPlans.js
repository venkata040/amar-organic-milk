import "./SubscriptionPlans.css";

function SubscriptionPlans() {
  return (
    <section className="subscription-section">

      <h2>Choose Your Subscription Plan</h2>

      <div className="subscription-container">

        <div className="plan-card">
          <h3>Daily Plan</h3>

          <h1>$4.99</h1>

          <p>✔ Fresh milk every morning</p>
          <p>✔ Free home delivery</p>
          <p>✔ Cancel anytime</p>

          <button>Subscribe</button>
        </div>

        <div className="plan-card popular">

          <div className="badge">
            Most Popular
          </div>

          <h3>Weekly Plan</h3>

          <h1>$32.99</h1>

          <p>✔ 7 Days Fresh Milk</p>
          <p>✔ Priority Delivery</p>
          <p>✔ Save 10%</p>

          <button>Subscribe</button>

        </div>

        <div className="plan-card">

          <h3>Monthly Plan</h3>

          <h1>$119.99</h1>

          <p>✔ 30 Days Delivery</p>
          <p>✔ Maximum Savings</p>
          <p>✔ Premium Support</p>

          <button>Subscribe</button>

        </div>

      </div>

    </section>
  );
}

export default SubscriptionPlans;
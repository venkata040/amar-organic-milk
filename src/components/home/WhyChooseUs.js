import "./WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <section className="why-section">

      <h2>Why Choose Amar Organic Milk?</h2>

      <div className="why-container">

        <div className="why-card">
          <div className="icon">🌿</div>
          <h3>100% Organic</h3>
          <p>No chemicals or preservatives. Fresh from our farms.</p>
        </div>

        <div className="why-card">
          <div className="icon">🚚</div>
          <h3>Free Home Delivery</h3>
          <p>Delivered fresh every morning to your doorstep.</p>
        </div>

        <div className="why-card">
          <div className="icon">🥛</div>
          <h3>Farm Fresh Daily</h3>
          <p>Collected every day to ensure maximum freshness.</p>
        </div>

        <div className="why-card">
          <div className="icon">⭐</div>
          <h3>Premium Quality</h3>
          <p>Quality checked to provide healthy milk for your family.</p>
        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;
import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about-section">

      <div className="about-image">
        🐄
      </div>

      <div className="about-content">

        <h2>About Amar Organic Milk</h2>

        <p>
          Many people consume processed milk every day without knowing its quality.
          At Amar Organic Milk, we believe every family deserves pure, fresh,
          and trusted organic milk. Our milk comes directly from carefully
          selected farms and is delivered fresh to your doorstep, so you can
          enjoy natural goodness with complete confidence.
        </p>

        <div className="about-features">

          <p>🌿 100% Pure Organic Milk</p>

          <p>🥛 Fresh Every Morning</p>

          <p>🚚 Doorstep Delivery</p>

          <p>❤️ Trusted Quality</p>

          <p>🌱 No Artificial Preservatives</p>

        </div>

        <button className="learn-more-btn">
          Learn More
        </button>

      </div>

    </section>
  );
}

export default AboutSection;
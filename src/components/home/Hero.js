import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tag">
          🌿 100% Organic • Farm Fresh • Delivered Daily
        </span>

        <h1>Fresh Organic Milk Delivered To Your Doorstep</h1>

        <p>
          Experience the goodness of pure organic milk sourced from
          healthy grass-fed cows. Fresh every morning with no
          preservatives, no chemicals, and packed with natural
          nutrition.
        </p>

        <div className="hero-buttons">
          <button className="order-btn">🛒 Shop Now</button>

          <button className="learn-btn">📅 Subscribe Today</button>
        </div>
      </div>

      <div className="hero-image">
        🥛
      </div>
    </section>
  );
}

export default Hero;
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>Fresh Organic Milk Delivered Daily</h1>

        <p>
          Pure, healthy and farm fresh milk delivered directly to
          your doorstep every morning.
        </p>

        <div className="hero-buttons">
          <button className="order-btn">Order Now</button>

          <button className="learn-btn">Learn More</button>
        </div>

      </div>

      <div className="hero-image">
        🥛
      </div>

    </section>
  );
}

export default Hero;
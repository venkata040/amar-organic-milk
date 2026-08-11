import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/products");
  };

  const handleSubscribe = () => {
    navigate("/subscription");
  };

  return (
    <section className="hero">

      <div className="hero-content">

        <span className="hero-tag">
          🌿 100% Organic • Farm Fresh • Delivered Daily
        </span>

        <h1>
          Fresh Organic Milk
          <br />
          Delivered To Your Doorstep
        </h1>

        <p>
          Experience the goodness of pure organic milk sourced
          from healthy grass-fed cows. Fresh every morning with
          no preservatives, no chemicals, and packed with natural
          nutrition.
        </p>

        <div className="hero-buttons">

          <button
            className="order-btn"
            onClick={handleShopNow}
          >
            🛒 Shop Now
          </button>

          <button
            className="learn-btn"
            onClick={handleSubscribe}
          >
            📅 Subscribe Today
          </button>

        </div>

      </div>

      <div className="hero-image">
        <div className="milk-icon">
          🥛
        </div>

        <span className="fresh-badge">
          🌱 100% Fresh
        </span>
      </div>

    </section>
  );
}

export default Hero;
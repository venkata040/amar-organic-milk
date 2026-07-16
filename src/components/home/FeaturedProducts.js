import "./FeaturedProducts.css";

function FeaturedProducts() {
  return (
    <section className="products">
      <h2>Our Fresh Products</h2>

      <div className="product-container">

        <div className="product-card">
          <div className="product-image">🥛</div>
          <h3>Cow Milk</h3>
          <p>Fresh organic cow milk.</p>
          <h4>$4.99 / Litre</h4>
          <button>Buy Now</button>
        </div>

        <div className="product-card">
          <div className="product-image">🥛</div>
          <h3>Buffalo Milk</h3>
          <p>Rich and creamy buffalo milk.</p>
          <h4>$5.99 / Litre</h4>
          <button>Buy Now</button>
        </div>

        <div className="product-card">
          <div className="product-image">🥣</div>
          <h3>Curd</h3>
          <p>Healthy homemade curd.</p>
          <h4>$6.99 / Pack</h4>
          <button>Buy Now</button>
        </div>

        <div className="product-card">
          <div className="product-image">🧈</div>
          <h3>Ghee</h3>
          <p>Pure organic cow ghee.</p>
          <h4>$18.99 / Jar</h4>
          <button>Buy Now</button>
        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;
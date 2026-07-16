import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonial-section">

      <h2>What Our Customers Say</h2>

      <div className="testimonial-container">

        <div className="testimonial-card">
          <h3>⭐⭐⭐⭐⭐</h3>

          <p>
            "The milk is always fresh and delivered on time.
            Highly recommended!"
          </p>

          <h4>- Rahul</h4>
        </div>

        <div className="testimonial-card">
          <h3>⭐⭐⭐⭐⭐</h3>

          <p>
            "Excellent quality and very friendly delivery service."
          </p>

          <h4>- Priya</h4>
        </div>

        <div className="testimonial-card">
          <h3>⭐⭐⭐⭐⭐</h3>

          <p>
            "Our family has been subscribing for months.
            Amazing quality!"
          </p>

          <h4>- John</h4>
        </div>

      </div>

    </section>
  );
}

export default Testimonials;
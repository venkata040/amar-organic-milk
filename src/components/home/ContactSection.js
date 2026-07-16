import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contact-section">

      <h2>Contact Us</h2>

      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-info">

          <h3>Get In Touch</h3>

          <p>
            We would love to hear from you. Contact us for fresh organic milk,
            subscriptions, or any enquiries.
          </p>

          <div className="info-item">
            <span>📍</span>
            <p>Melbourne, Victoria, Australia</p>
          </div>

          <div className="info-item">
            <span>📞</span>
            <p>+61 XXX XXX XXX</p>
          </div>

          <div className="info-item">
            <span>📧</span>
            <p>info@amarorganicmilk.com</p>
          </div>

        </div>

        {/* Right Side */}
        <form className="contact-form">

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="text"
            placeholder="Phone Number"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default ContactSection;